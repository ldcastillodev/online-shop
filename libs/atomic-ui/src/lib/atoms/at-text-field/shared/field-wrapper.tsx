import { PropsWithChildren } from 'react'
import { PortableTextProps } from '@portabletext/react'
import { FieldHints } from './field-hints'
import { fieldContainerClasses, labelClasses } from './classes'

export interface FieldWrapperProps {
  characterLimit?: number
  hideLimitHint?: boolean
  errorText?: PortableTextProps['value']
  hasError?: boolean
  helperText?: PortableTextProps['value']
  htmlFor?: string
  label?: string
  length?: number
}

/** Base component including container, label and hints for text/select/area fields */
export const FieldWrapper = ({
  characterLimit,
  hideLimitHint,
  children,
  errorText,
  hasError = false,
  helperText,
  htmlFor,
  label,
  length,
}: PropsWithChildren<FieldWrapperProps>) => (
  <div className={fieldContainerClasses}>
    <label htmlFor={htmlFor} className={labelClasses}>
      {label}
    </label>
    {children}
    <FieldHints
      helperText={helperText}
      hideLimitHint={hideLimitHint}
      errorText={errorText}
      characterLimit={characterLimit}
      hasError={hasError}
      length={length}
    />
  </div>
)
