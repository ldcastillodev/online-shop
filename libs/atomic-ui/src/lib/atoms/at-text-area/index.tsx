import { AtTextFieldProps } from '../at-text-field'
import { FieldWrapper } from '../at-text-field/shared/field-wrapper'
import { baseFieldClasses } from '../at-text-field/shared/classes'

export type AtTextAreaProps = Omit<AtTextFieldProps, 'clear' | 'icon'>

export const AtTextArea = ({
  errorText,
  hasError,
  helperText,
  label,
  name,
  onChange,
  placeholder,
  value = '',
  hideLimitHint,
  ...validation
}: AtTextAreaProps) => {
  const id = `${label}-field`

  return (
    <FieldWrapper
      characterLimit={validation.maxLength}
      label={label}
      errorText={errorText}
      hasError={hasError}
      hideLimitHint={hideLimitHint}
      helperText={helperText}
      htmlFor={id}
      length={value?.length}
    >
      <textarea
        id={id}
        value={value}
        name={name}
        className={`${baseFieldClasses(hasError)} p-4 h-[6.5rem] resize-none`}
        onChange={({ currentTarget: { value } }) => onChange?.(value)}
        placeholder={placeholder}
        {...validation}
      />
    </FieldWrapper>
  )
}
