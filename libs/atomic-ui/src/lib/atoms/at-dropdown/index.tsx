import { Listbox } from '@headlessui/react'
import { baseFieldClasses, fieldContainerClasses, labelClasses } from '../at-text-field/shared/classes'
import { FieldHints } from '../at-text-field/shared/field-hints'
import { PortableTextProps } from '@portabletext/react'
import { NavArrowDown, WarningCircle } from 'iconoir-react'
import { DropdownListbox } from './dropdown-listbox'

export * from './options-generators'

export interface DropdownOption {
  label: string
  value: string
}

export interface DropdownOptionParams {
  options: DropdownOption[]
  value?: DropdownOption
  onChange?: (value: DropdownOption) => void
}

export interface AtDropdownProps extends DropdownOptionParams {
  label?: string
  placeholder?: string
  helperText?: PortableTextProps['value']
  errorText?: PortableTextProps['value']
  hasError?: boolean
  name: string
}

export const AtDropdown = ({
  errorText,
  hasError,
  helperText,
  label,
  name,
  onChange,
  options,
  placeholder,
  value,
}: AtDropdownProps) => (
  <div className={`${fieldContainerClasses} relative`}>
    <Listbox value={value} onChange={onChange} by={(a, b) => a?.value === b?.value} name={name}>
      <Listbox.Label className={labelClasses}>{label}</Listbox.Label>
      <Listbox.Button
        className={`${baseFieldClasses(hasError)} h-14 p-4 flex justify-between ui-open:border-neutrals-800`}
      >
        <span className={`grow-1 leading-1.5 ${value?.label ? '' : 'text-neutrals-600 ui-open:text-neutrals-800'}`}>
          {value?.label ? value.label : placeholder}
        </span>
        <div className={`flex gap-1 ${hasError ? 'text-feedback-negative-300' : ''}`}>
          {hasError && <WarningCircle />}
          <NavArrowDown className="ui-open:rotate-180" />
        </div>
      </Listbox.Button>
      <DropdownListbox options={options} className="absolute top-[5.25rem] w-full z-[2]" />
    </Listbox>
    <FieldHints errorText={errorText} hasError={hasError} helperText={helperText} />
  </div>
)
