import { RadioGroup } from '@headlessui/react'
import { ErrorLabel } from '../at-checkbox/shared/error-label'
import { useState } from 'react'

export interface RadioButton {
  label: string
  description?: string
}

export interface AtRadioButtonGroupProps {
  className?: string
  radioButtons: RadioButton[]
  indexSelected: number
  readonly?: boolean
  disabled?: boolean
  hasError?: boolean
  formName?: string
  errorMessage?: string
}

export const AtRadioButton = ({
  radioButtons,
  className = '',
  hasError = false,
  errorMessage = '',
  indexSelected = 0,
  readonly = false,
  disabled = false,
  formName = '',
}: AtRadioButtonGroupProps) => {
  const baseClass =
    'relative inline-flex items-center h-6 w-6 mr-4 rounded-full border-2 border-solid focus:outline-none'
  const disabledClass = 'pointer-events-none cursor-default'
  const errorClass = 'border-feedback-negative-300'
  const focusClass = 'focus-visible-within'
  const pressClass = 'active:border-primary-900'
  const [value, setvalue] = useState(radioButtons[indexSelected])

  return (
    <RadioGroup value={value} onChange={setvalue} className={`flex h-auto ${className}`} name={formName}>
      <div className={`flex flex-col`}>
        {radioButtons.map((option, index) => (
          <div key={index} className={`flex items-start mb-4 ${focusClass}`}>
            <RadioGroup.Option
              key={option.label}
              value={option}
              className={({ checked }) =>
                `${baseClass}
                  ${
                    checked && !disabled && !readonly && !hasError
                      ? `bg-primary-500 border-primary-500 ${pressClass} active:bg-primary-900`
                      : hasError
                      ? `${errorClass} border-feedback-negative-300 hover:border-feedback-negative-300 ${
                          checked ? 'bg-feedback-negative-300' : ''
                        }`
                      : disabled
                      ? `${disabledClass} border-neutrals-500 hover:border-neutrals-500 ${
                          checked ? 'bg-neutrals-500' : ''
                        }`
                      : readonly
                      ? `${disabledClass} border-primary-300 hover:border-primary-300 ${
                          checked ? 'bg-primary-300' : ''
                        }`
                      : `hover:border-primary-700 focus:border-primary-700 border-neutrals-700 ${pressClass} ${
                          checked ? 'active:bg-primary-900' : ''
                        }`
                  }`
              }
              disabled={disabled}
            >
              {({ checked }) => (
                <div
                  className={
                    checked
                      ? 'absolute bg-neutrals-white rounded-full w-2/4 h-2/4 top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4'
                      : ''
                  }
                ></div>
              )}
            </RadioGroup.Option>
            <div
              className={`flex flex-col`}
              onClick={() => {
                if (!disabled && !readonly) {
                  setvalue(option)
                }
              }}
            >
              <RadioGroup.Label
                className={`leading-1.5 hover:text-neutrals-900 focus:text-neutrals-800
                ${
                  hasError
                    ? 'text-neutrals-800'
                    : disabled || readonly
                    ? `${disabledClass} text-neutrals-500`
                    : 'text-neutrals-800'
                }`}
              >
                {option.label}
              </RadioGroup.Label>
              {option.description && (
                <RadioGroup.Description
                  className={`text-neutrals-700 leading-1.5 text-14 ${disabled || readonly ? disabledClass : ''}`}
                >
                  {option.description}
                </RadioGroup.Description>
              )}
              {hasError && index === radioButtons.length - 1 && (
                <div className="leading-1.5">
                  <ErrorLabel message={errorMessage} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </RadioGroup>
  )
}
