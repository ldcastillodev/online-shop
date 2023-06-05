import { AtButtonStyles, AtButtonSizeWithText, AtButtonSizeWithoutText } from './at-button-styles'
import { AtButtonTypes, AtButtonDimensions, AtButtonBehaviors } from '../../types'
import { AtIcon, IconRef } from '../at-icon'
import { forwardRef, MouseEventHandler } from 'react'

export interface AtButtonProps {
  title?: string
  /** **Use only sparingly**, for example, when the button is just an icon with no text, because **this overrides completely the text content of the button** for a11y users (meaning the visible text of the button is not what's read to them) */
  ariaLabel?: string
  type: AtButtonTypes
  size: AtButtonDimensions
  isDisabled?: boolean
  iconLeft?: string
  iconRight?: string
  align?: string
  IconLeftRef?: IconRef
  IconRightRef?: IconRef
  iconLeftClasses?: string
  iconRightClasses?: string
  className?: string
  typeButton?: AtButtonBehaviors
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export const AtButton = forwardRef<HTMLButtonElement, AtButtonProps>(
  (
    {
      title,
      ariaLabel,
      type,
      size,
      isDisabled,
      iconLeft,
      iconLeftClasses = '',
      iconRight,
      iconRightClasses = '',
      IconLeftRef,
      IconRightRef,
      className,
      align,
      typeButton = AtButtonBehaviors.BUTTON,
      onClick,
    }: AtButtonProps,
    ref
  ) => {
    const baseClass = `flex items-center ${align ? `justify-${align}` : 'justify-evenly'}`
    const baseFocusClass =
      'focus:outline-none focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline focus-visible:outline-neutrals-900'

    const notGrayscale = type !== 'grayscale'

    return (
      <button
        ref={ref}
        aria-label={ariaLabel}
        className={`${baseClass} ${baseFocusClass} ${
          notGrayscale ? 'uppercase leading-1.4 tracking-[0.16em]' : 'px-0'
        } ${title ? AtButtonSizeWithText[size] : AtButtonSizeWithoutText[size]} ${
          isDisabled
            ? `${AtButtonStyles[type].disabled}`
            : `${AtButtonStyles[type].hover} ${AtButtonStyles[type].active} ${AtButtonStyles[type].focus} ${AtButtonStyles[type].base}`
        } ${className}`}
        disabled={isDisabled}
        onClick={onClick}
        type={typeButton}
      >
        {IconLeftRef ? (
          <IconLeftRef
            className={`w-10 px-2 ${(IconRightRef || title) && notGrayscale ? 'mr-2' : ''} ${iconLeftClasses}`}
          />
        ) : (
          iconLeft && (
            <AtIcon
              src={iconLeft}
              className={`w-10 px-2 ${(iconRight || title) && notGrayscale ? 'mr-2' : ''} ${iconLeftClasses}`}
            />
          )
        )}
        {title}
        {IconRightRef ? (
          <IconRightRef className={`w-10 px-2 ${title && notGrayscale ? 'ml-2' : ''} ${iconRightClasses}`} />
        ) : (
          iconRight && (
            <AtIcon
              src={iconRight}
              className={`w-10 px-2 ${title && notGrayscale ? 'ml-2' : ''} ${iconRightClasses}`}
            />
          )
        )}
      </button>
    )
  }
)
