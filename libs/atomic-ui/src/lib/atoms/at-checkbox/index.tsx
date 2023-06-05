import { Switch } from '@headlessui/react'
import { Check } from 'iconoir-react'
import { ErrorLabel } from './shared/error-label'
import { useState } from 'react'
import { AtTooltip, AtTooltipProps } from '../at-tooltip'

export interface AtCheckboxProps {
  label: string
  name: string
  description?: string
  isChecked?: boolean
  className?: string
  onChange?: (checked: boolean) => void
  readonly?: boolean
  disabled?: boolean
  hasError?: boolean
  errorMessage?: string
  hint?: AtTooltipProps
}

export const AtCheckbox = ({
  isChecked,
  description,
  label,
  name,
  onChange,
  readonly,
  disabled,
  hasError,
  errorMessage,
  className = '',
  hint,
}: AtCheckboxProps) => {
  const [checked, setChecked] = useState<boolean>(isChecked || false)
  const baseClass = 'inline-flex shrink-0 relative rounded-[4px] min-w-6 w-6 h-6'
  const disabledClass = 'pointer-events-none cursor-default'
  const focusClass = 'focus-visible-within'

  const handleChange = (newChecked: boolean) => {
    setChecked(newChecked)
    if (onChange) {
      onChange(newChecked)
    }
  }

  return (
    <div className="flex gap-2">
      <Switch.Group>
        <div className={`inline-flex gap-4 ${focusClass} ${className}`}>
          <Switch
            name={name}
            checked={checked}
            onChange={handleChange}
            className={`${baseClass} outline-none border-solid
        ${
          checked && !disabled && !readonly && !hasError
            ? `bg-primary-500 border-primary-500 hover:border-primary-700 hover:bg-primary-700 border-0`
            : hasError
            ? `border-feedback-negative-300 hover:feedback-negative-300 ${
                checked ? 'bg-feedback-negative-300 border-0' : 'border-1'
              }`
            : disabled
            ? `${disabledClass} border-neutrals-500 hover:border-neutrals-500 ${
                checked ? 'bg-neutrals-500 border-0' : 'border-1'
              }`
            : readonly
            ? `${disabledClass} border-primary-300 hover:border-primary-300 ${
                checked ? 'bg-primary-300 border-0' : 'border-1'
              }`
            : `border-neutrals-700 hover:border-primary-700 ${
                checked ? 'hover:bg-primary-700 border-0 active:bg-primary-900' : 'border-1'
              }`
        }
          `}
            disabled={disabled || readonly}
          >
            {checked && (
              <span
                className={`text-primary-100 rounded-[4px] outline-none
                ${
                  !disabled && !readonly && !hasError
                    ? 'bg-primary-500 hover:bg-primary-700 active:bg-primary-900'
                    : hasError
                    ? 'bg-feedback-negative-300'
                    : readonly
                    ? `${disabledClass} bg-primary-300`
                    : disabled
                    ? `${disabledClass} bg-neutrals-500`
                    : ''
                }`}
              >
                <Check />
              </span>
            )}
          </Switch>
          <div className="flex flex-col">
            <Switch.Label
              className={`leading-1.5 pb-1
            ${
              hasError
                ? 'text-feedback-negative-300'
                : disabled || readonly
                ? `${disabledClass} text-neutrals-500`
                : 'text-neutrals-900'
            }`}
            >
              {label}
            </Switch.Label>
            {description && (
              <Switch.Description
                className={`text-neutrals-700 leading-1.5 text-14 ${disabled || readonly ? disabledClass : ''}
              `}
              >
                {description}
              </Switch.Description>
            )}
            {hasError && <ErrorLabel message={errorMessage} />}
          </div>
        </div>
      </Switch.Group>
      {hint && <AtTooltip {...hint} />}
    </div>
  )
}
