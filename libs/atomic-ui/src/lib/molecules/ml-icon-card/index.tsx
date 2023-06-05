import { AtIcon, IconRef } from '../../atoms'
import { FilledCheck } from './filled-check'

export interface MlIconCardProps {
  icon?: string
  IconRef?: IconRef
  label: string
  onClick?: (label: string) => void
  selected?: boolean
}

export const MlIconCard = ({ icon, IconRef, label, onClick, selected = false }: MlIconCardProps) => (
  <button
    onClick={() => onClick?.(label)}
    className="group flex flex-col gap-4 focus-visible:outline focus-visible:outline-1 focus-visible:outline-neutrals-900 focus-visible:outline-offset-4"
  >
    <div
      className={`h-[5.5rem] w-30 lg:h-[6.5rem] lg:w-[12rem] py-4 px-8 lg:py-6 lg:px-[4.25rem] relative flex justify-center items-center border-1 rounded-4 ${
        selected ? 'border-neutrals-800' : 'border-neutrals-300'
      } group-hover:border-neutrals-600 group-active:border-neutrals-700 group-focus:border-neutrals-600`}
    >
      {icon && !IconRef && <AtIcon src={icon} className="w-full h-full text-neutrals-800" />}
      {IconRef && <IconRef className="w-full h-full" />}
      {selected && <FilledCheck className="absolute bottom-0 translate-y-1/2" />}
    </div>
    <p className="w-full text-neutrals-700 text-14 leading-1.5 text-center ui-selected:text-neutrals-900">{label}</p>
  </button>
)
