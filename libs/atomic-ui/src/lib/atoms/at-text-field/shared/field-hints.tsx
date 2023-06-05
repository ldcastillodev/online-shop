import { PortableText } from '@portabletext/react'
import { FieldWrapperProps } from './field-wrapper'

export const FieldHints = ({
  characterLimit,
  hideLimitHint,
  errorText,
  hasError,
  helperText,
  length,
}: Pick<
  FieldWrapperProps,
  'errorText' | 'helperText' | 'length' | 'characterLimit' | 'hideLimitHint' | 'hasError'
>) => (
  // eslint-disable-next-line react/jsx-no-useless-fragment
  <>
    {(helperText || errorText || !!characterLimit) && (
      <div
        className={`flex justify-between text-12 leading-1.5 pl-4 ${
          hasError ? 'text-feedback-negative-300' : 'text-neutrals-700'
        }`}
      >
        <div className="grow">
          {!hasError && helperText && <PortableText value={helperText} />}
          {hasError && errorText && <PortableText value={errorText} />}
        </div>
        {!hideLimitHint && characterLimit && <p className="pl-1">{`${length} / ${characterLimit}`}</p>}
      </div>
    )}
  </>
)
