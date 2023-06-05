import { Flash } from 'iconoir-react'

export interface AtTagProps {
  icon?: boolean
  label: string
  className?: string
}

export const AtTag = ({ icon = false, label, className = '' }: AtTagProps) => (
  <div
    className={`h-7 inline-flex justify-center items-center rounded-4 bg-secondary-100 text-secondary-700 font-bold text-12 leading-1.5 uppercase ${
      icon ? 'pl-1.5 pr-2' : 'px-2'
    } ${className}`}
  >
    {icon && <Flash className="fill-current mr-1 w-4" />}
    {label}
  </div>
)
