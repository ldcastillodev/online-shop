import { AtIcon, IconRef } from '../at-icon'

export enum AtLinkType {
  DEFAULT = 'default',
  INLINE = 'inline',
  SECONDARY = 'secondary',
}

export enum AtLinkTarget {
  BLANK = '_blank',
  SELF = '_self',
}

export interface AtLinkProps {
  title?: string
  /** **Use only when there is no relevant label on the link**, for example, on links where the content is only an icon. This is because **this label overrides completely what's inside the link for a11y users** */
  ariaLabel?: string
  type?: AtLinkType
  actionTarget?: string
  isDisabled?: boolean
  iconLeft?: string
  iconRight?: string
  IconLeftRef?: IconRef
  IconRightRef?: IconRef
  target?: AtLinkTarget
  className?: string
  darkMode?: boolean
  skipDefaultAlignment?: boolean
}

export const linkColors = (darkMode = false, type?: AtLinkType) => {
  if (type === AtLinkType.SECONDARY) {
    return {
      base: 'text-neutrals-800 hover:text-neutrals-700 active:text-neutrals-600',
      disabled: 'text-neutrals-500',
      focus: 'focus-visible:text-neutrals-700 focus-visible:outline-neutrals-900',
    }
  }

  if (darkMode) {
    return {
      base: 'text-neutrals-white hover:text-primary-100 active:text-primary-300 focus:text-primary-100',
      disabled: 'text-neutrals-700',
      focus: 'focus-visible:outline-neutrals-white',
    }
  }

  return {
    base: 'text-primary-500 hover:text-primary-700 active:text-primary-900',
    disabled: 'text-neutrals-500',
    focus: 'focus-visible:outline-neutrals-900',
  }
}

export const AtLink = ({
  title,
  ariaLabel,
  type,
  actionTarget,
  isDisabled,
  iconLeft,
  iconRight,
  IconLeftRef,
  IconRightRef,
  target,
  className = '',
  darkMode = false,
  skipDefaultAlignment = false,
}: AtLinkProps) => {
  const baseClass =
    'inline-flex items-center h-10 focus-visible:outline-offset-4 focus-visible:outline focus-visible:outline-1 focus:outline-none'
  const disabledClass = 'pointer-events-none cursor-default'
  const colors = linkColors(darkMode, type)

  return (
    <a
      className={`${baseClass} ${colors.focus} ${skipDefaultAlignment ? '' : 'justify-evenly'} ${
        type === AtLinkType.INLINE ? 'underline' : ''
      }
      ${isDisabled ? `${disabledClass} ${colors.disabled}` : colors.base} ${className}`}
      href={actionTarget}
      target={target}
      aria-label={ariaLabel}
    >
      {IconLeftRef ? (
        <IconLeftRef className="w-10 px-2" />
      ) : (
        iconLeft && <AtIcon src={iconLeft} className="w-10 px-2" />
      )}
      {title}
      {IconRightRef ? (
        <IconRightRef className="w-10 px-2" />
      ) : (
        iconRight && <AtIcon src={iconRight} className="w-10 px-2" />
      )}
    </a>
  )
}
