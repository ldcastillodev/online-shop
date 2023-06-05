export enum AtEyebrowLinkTarget {
  BLANK = '_blank',
  SELF = '_self',
}

export interface AtEyebrowLinkProps {
  title: string
  actionTarget?: string
  isDisabled?: boolean
  target?: AtEyebrowLinkTarget
  className?: string
}

export const AtEyebrowLink = ({ title, actionTarget, isDisabled, target, className = '' }: AtEyebrowLinkProps) => {
  const baseClass = `font-bold uppercase text-primary-500 text-12 leading-1.5`
  const focusClass =
    'focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-neutrals-900 focus:text-primary-700 focus:outline-none focus:underline'
  const disabledClass = 'text-neutrals-500 pointer-events-none cursor-default'
  const pressClass = 'active:text-primary-900 active:underline'
  const hoverClass = 'hover:text-primary-700 hover:underline'

  return (
    <a
      className={`${baseClass} ${focusClass} ${hoverClass} ${pressClass} ${className}
      ${isDisabled ? disabledClass : ''}`}
      href={actionTarget}
      target={target}
    >
      {title}
    </a>
  )
}
