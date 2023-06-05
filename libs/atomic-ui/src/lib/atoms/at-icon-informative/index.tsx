import { AtIcon } from '../at-icon'

export interface AtIconInformativeProps {
  title?: string
  titleClass?: string
  label: string
  labelClass?: string
  icon: string
  className?: string
  classIcon?: string
  contentClass?: string
}

export const AtIconInformative = ({
  title,
  titleClass,
  label,
  labelClass,
  icon,
  className = '',
  contentClass,
  classIcon = 'w-10 h-10 p-2 shrink-0',
}: AtIconInformativeProps) => (
  <div className={`text-neutrals-800 inline-flex gap-2 py-1 ${className}`}>
    <AtIcon src={icon} className={classIcon} />
    <div className={`leading-1.5 ${contentClass ?? 'pt-2.5'}`}>
      {title && <p className={`font-bold mb-2 ${titleClass ?? ''}`}>{title}</p>}
      <p className={`${title ? 'text-neutrals-700' : 'text-neutrals-800'} text-14 ${labelClass ?? ''}`}>{label}</p>
    </div>
  </div>
)
