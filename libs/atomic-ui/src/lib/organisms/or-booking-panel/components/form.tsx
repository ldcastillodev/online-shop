import {
  AtCheckbox,
  AtCheckboxProps,
  AtDatePicker,
  AtDatePickerProps,
  AtDropdown,
  AtDropdownProps,
  AtTabs,
  AtTextArea,
  AtTextAreaProps,
  AtTextField,
  AtTextFieldProps,
  DropdownOption,
  Tab,
} from '../../../atoms'
import { FormEventHandler, Fragment, ReactNode, Reducer, useReducer } from 'react'
import { MlCtaBar, MlCtaBarProps } from '../../../molecules'
import { DateRange } from 'react-day-picker'
import { ConditionalField } from './conditional-field'
import { TimeSelect, TimeSelectProps, Timeslot } from './time-select'

export type FieldType = string | boolean | Date | DateRange | DropdownOption | Timeslot

export type FormFieldState = {
  [field: string]: {
    value?: FieldType
    disabled?: boolean
    pristine?: boolean
    error?: boolean
    loading?: boolean
  }
}

export const useFormState = (initialState: FormFieldState) =>
  useReducer<Reducer<FormFieldState, FormFieldState>>((prev, next) => ({ ...prev, ...next }), initialState)

export type FormField =
  | ({ type: 'text' } & Omit<AtTextFieldProps, 'value' | 'onChange' | 'clear' | 'hasError' | 'disabled'>)
  | ({ type: 'text-area' } & Omit<AtTextAreaProps, 'value' | 'onChange' | 'clear' | 'hasError' | 'disabled'>)
  | ({
      type: 'checkbox'
      required?: boolean
    } & Omit<AtCheckboxProps, 'onChange' | 'hasError' | 'isChecked' | 'disabled' | 'className'>)
  | { type: 'divider' }
  | ({ type: 'calendar'; required?: boolean } & Omit<AtDatePickerProps, 'value' | 'onChange' | 'hasError'>)
  | ({ type: 'dropdown'; required?: boolean } & Omit<AtDropdownProps, 'value' | 'onChange' | 'hasError'>)
  | ({
      type: 'conditional-checkbox'
      fields: FormField[]
    } & Omit<AtCheckboxProps, 'onChange' | 'hasError' | 'isChecked' | 'disabled' | 'className'>)
  | { type: 'tab'; label?: string; tabs: (Omit<Tab, 'content'> & { content: FormField[] })[] }
  | ({ type: 'time-select'; name: string } & Omit<TimeSelectProps, 'value' | 'onChange' | 'error' | 'loading'>)
  /* TODO: Placeholders for possible uses based on UI definition
  | { type: 'rich-text' }
  | { type: 'grid' } // Used in guest and contact layouts
  | { type: 'radio' }
  */
  | { type: 'custom'; children: ReactNode }

export interface FormProps extends MlCtaBarProps {
  fields: FormField[]
  state: FormFieldState
  bottomContent?: ReactNode
  onSubmit: (valid: boolean) => void
  onChange: (change: FormFieldState) => void
  fieldClassName?: string
}

export const Form = ({
  bottomContent,
  fieldClassName,
  fields,
  state,
  onChange,
  onSecondaryClick,
  onSubmit,
  primaryLabel,
  secondaryLabel,
}: FormProps) => {
  const fieldMapFn = (field: FormField, i: number) => {
    if (field.type === 'divider') return <div key={i} className="w-full h-[1px] bg-neutrals-300" />
    if (field.type === 'custom') return <Fragment key={i}>{field.children}</Fragment>

    if (field.type === 'tab') {
      // TODO: preliminary implementation, pending verification (this will probably be done on contact template impl, which could use this prototype
      const processTabContent = (content: FormField[]) => <div>{content.map(fieldMapFn)}</div>
      return <AtTabs tabs={field.tabs.map((tab) => ({ ...tab, content: processTabContent(tab.content) }))} />
    }

    const { value, error, disabled, loading } = state[field.name]
    const changeFn = (value: FieldType) =>
      onChange?.({
        [field.name]: {
          ...state[field.name],
          value,
          error: false,
          pristine: false,
        },
      })

    switch (field.type) {
      case 'conditional-checkbox':
        return (
          <ConditionalField
            key={i}
            {...field}
            isChecked={value as boolean}
            hasError={error}
            disabled={disabled}
            onChange={changeFn}
          >
            {field.fields.map(fieldMapFn)}
          </ConditionalField>
        )

      case 'checkbox':
        return (
          <AtCheckbox
            key={i}
            {...field}
            isChecked={value as boolean}
            hasError={error}
            disabled={disabled}
            onChange={changeFn}
          />
        )
      case 'text-area':
        return (
          <AtTextArea
            key={i}
            {...field}
            value={value as string}
            hasError={error}
            disabled={disabled}
            onChange={changeFn}
          />
        )
      case 'text':
        return (
          <AtTextField
            key={i}
            {...field}
            value={value as string}
            hasError={error}
            disabled={disabled}
            onChange={changeFn}
            clear={() => changeFn('')}
          />
        )
      case 'calendar':
        return (
          <AtDatePicker
            key={i}
            {...field}
            value={value as Date | DateRange}
            hasError={error}
            onChange={(value) => {
              if (value && 'to' in value && state[field.name].pristine) {
                const { to } = value as DateRange
                changeFn({ from: to } as DateRange)
              } else changeFn(value)
            }}
          />
        )
      case 'dropdown':
        return <AtDropdown key={i} {...field} value={value as DropdownOption} hasError={error} onChange={changeFn} />
      case 'time-select':
        return (
          <TimeSelect
            key={i}
            {...field}
            loading={loading}
            error={error}
            value={value as Timeslot}
            onChange={changeFn}
          />
        )
      default:
        throw new Error('Invalid field type specified')
    }
  }

  const checkValidity: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    const input = Array.from(e.currentTarget) as (HTMLInputElement | HTMLTextAreaElement | HTMLButtonElement)[]
    let validForm = true

    input.forEach((field) => {
      const valid = field.checkValidity()
      validForm &&= valid
      onChange?.({ [field.name]: { ...state[field.name], error: !valid } })
    })

    // Validity check for elements other than native input fields
    fields.forEach((field) => {
      if (field.type === 'time-select') {
        const valid = !!(state[field.name].value as Timeslot)
        validForm &&= valid
        onChange?.({ [field.name]: { ...state[field.name], error: !valid } })
      }

      if (field.type === 'dropdown') {
        const valid = !field.required || (field.required && !!(state[field.name].value as DropdownOption)?.value)
        validForm &&= valid
        onChange?.({ [field.name]: { ...state[field.name], error: !valid } })
      }

      if (field.type === 'calendar') {
        const valid =
          !field.required ||
          (field.required &&
            !!(
              (field.mode === 'single' && state[field.name].value) ||
              (field.mode === 'range' && (state[field.name].value as DateRange)?.from)
            ))

        validForm &&= valid
        onChange?.({ [field.name]: { ...state[field.name], error: !valid } })
      }
    })

    onSubmit?.(validForm)
  }

  return (
    <form noValidate onSubmit={checkValidity} className="pt-6 lg:pt-8 lg:pb-8">
      <div className={`flex flex-col ${fieldClassName}`}>{fields.map(fieldMapFn)}</div>
      <div className="lg:mt-6 lg:px-8 fixed bottom-0 lg:static w-full bg-neutrals-white">
        <MlCtaBar primaryLabel={primaryLabel} secondaryLabel={secondaryLabel} onSecondaryClick={onSecondaryClick} />
      </div>
      {bottomContent}
      <div aria-hidden className={`lg:hidden w-full ${secondaryLabel ? 'h-[11.5rem]' : 'h-32'}`} />
    </form>
  )
}
