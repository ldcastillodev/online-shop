import { PortableTextProps } from '@portabletext/react'
import { FieldHints } from '../../atoms/at-text-field/shared/field-hints'
import { AtButton } from '../../atoms'
import { Cancel, WarningCircle } from 'iconoir-react'
import { AtButtonDimensions, AtButtonTypes, AtButtonBehaviors } from '../../types'
import { baseFieldClasses } from '../../atoms/at-text-field/shared/classes'
import { useState, FormEvent } from 'react'

export interface MlDiscountFieldProps {
  placeholder?: string
  errorText?: PortableTextProps['value']
  hasError?: boolean
  name: string
  title: string
  couponValue?: string
}

export const MlDiscountField = ({
  errorText,
  hasError,
  name,
  placeholder,
  title,
  couponValue,
}: MlDiscountFieldProps) => {
  const [coupon, setCoupon] = useState((couponValue || '').toUpperCase())
  const [value, setValue] = useState('')
  const id = `${name}-field`
  const warnIconColor = hasError ? 'text-feedback-negative-300' : 'text-neutrals-800'

  const handleInputReset = () => {
    setValue('')
  }

  const handleCouponReset = () => {
    setCoupon('')
  }

  const alphanum = /^[a-zA-Z0-9]+$/ // alphanumeric characters only

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (value.length === 0 || hasError) return
    setCoupon(value.toUpperCase())
    handleInputReset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="lg:flex">
        <div className="lg:flex lg:flex-col lg:w-full">
          <div className="grow relative text-neutrals-600 focus-within:text-neutrals-800 mb-2">
            <input
              className={`h-14 py-2 pl-4 ${baseFieldClasses(hasError)} ${hasError ? 'pr-20' : 'pr-12'}`}
              id={id}
              name={name}
              placeholder={placeholder}
              type="text"
              value={value}
              onChange={(event) =>
                event.target.value.match(alphanum)
                  ? setValue(event.target.value)
                  : event.target.value.length === 0
                  ? setValue('')
                  : null
              }
            />
            {hasError && (
              <WarningCircle
                className={`pointer-events-none absolute bottom-4 ${value ? 'right-12' : 'right-4'} ${warnIconColor}`}
              />
            )}
          </div>
          {hasError && (
            <div className="mb-2">
              <FieldHints errorText={errorText} hasError={hasError} />
            </div>
          )}
          {!hasError && coupon && (
            <div className={`inline-flex items-center text-16 gap-4 px-4 py-2 bg-neutrals-100 h-12 mb-4 lg:w-fit`}>
              <div className="text-neutrals-800">
                <span className="text-black">{coupon}</span>
              </div>
              <button
                aria-label="Remove discount code"
                className={`items-center justify-center`}
                onClick={() => handleCouponReset()}
                type={AtButtonBehaviors.BUTTON}
              >
                <Cancel />
              </button>
            </div>
          )}
        </div>
        <div className="lg:ml-4">
          <AtButton
            title={title}
            className="px-4 lg:px-0 w-full lg:w-[9.3125rem]"
            type={AtButtonTypes.SECONDARY}
            size={AtButtonDimensions.LARGE}
            typeButton={AtButtonBehaviors.SUBMIT}
          />
        </div>
      </div>
    </form>
  )
}
