import { InputHTMLAttributes } from 'react'
import { DeleteCircle, WarningCircle } from 'iconoir-react'
import { baseFieldClasses } from './shared/classes'
import { FieldWrapper } from './shared/field-wrapper'
import { PortableTextProps } from '@portabletext/react'
import { AtIcon } from '../at-icon'

export type ValidationProps = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  'required' | 'pattern' | 'disabled' | 'maxLength' | 'minLength' | 'readOnly'
>

export * from './shared/utils'

export type SkipChangeFn = (value: string) => boolean

export type FieldFormatterFn = (value: string) => Record<'raw' | 'formatted', string>

export interface AtTextFieldProps extends ValidationProps {
  label?: string
  placeholder?: string
  helperText?: PortableTextProps['value']
  errorText?: PortableTextProps['value']
  hasError?: boolean
  name: string
  value?: string
  hideLimitHint?: boolean
  onChange?: (value: string) => void
  skipChange?: SkipChangeFn
  formatter?: FieldFormatterFn
  /** Clear value callback */
  clear?: () => void
  icon?: string
}

export const AtTextField = ({
  hasError,
  helperText,
  errorText,
  icon,
  label,
  name,
  value = '',
  hideLimitHint,
  onChange,
  skipChange,
  formatter,
  clear,
  placeholder,
  ...validation
}: AtTextFieldProps) => {
  const id = `${name}-field`

  const warnIconColor = hasError ? 'text-feedback-negative-300' : 'text-neutrals-800'

  const optionalMask = formatter?.(value).formatted ?? value

  return (
    <FieldWrapper
      htmlFor={id}
      label={label}
      helperText={helperText}
      errorText={errorText}
      hideLimitHint={hideLimitHint}
      characterLimit={validation.maxLength}
      hasError={hasError}
      length={optionalMask.length}
    >
      <div className={'relative text-neutrals-600 focus-within:text-neutrals-800'}>
        <input
          className={`h-14 py-2 ${baseFieldClasses(hasError)} ${icon ? 'pl-12' : 'pl-4'} ${
            hasError ? 'pr-20' : 'pr-12'
          }`}
          id={id}
          name={name}
          placeholder={placeholder}
          type="text"
          value={optionalMask}
          onChange={({ currentTarget: { value } }) => {
            if (!skipChange?.(value)) onChange?.(formatter?.(value).raw ?? value)
          }}
          {...validation}
        />
        {icon && (
          <AtIcon
            src={icon}
            className={`w-10 h-10 p-2 pointer-events-none absolute bottom-2 left-2 ${value ? 'text-neutrals-800' : ''}`}
          />
        )}
        {value && (
          <button
            type="button"
            aria-label="Clear field"
            onClick={clear}
            className={`absolute bottom-4 right-4 ${warnIconColor}`}
          >
            <DeleteCircle />
          </button>
        )}
        {hasError && (
          <WarningCircle
            className={`pointer-events-none absolute bottom-4 ${value ? 'right-12' : 'right-4'} ${warnIconColor}`}
          />
        )}
      </div>
    </FieldWrapper>
  )
}
