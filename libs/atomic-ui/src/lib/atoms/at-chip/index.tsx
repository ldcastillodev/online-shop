import { MouseEventHandler } from 'react'

export interface AtChipProps {
  label: string
  selected?: boolean
  disabled?: boolean
  error?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
  className?: string
}

export const AtChip = ({ disabled, error, label, selected, onClick, className = '' }: AtChipProps) => (
  <button
    disabled={disabled}
    onClick={onClick}
    className="group outline-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-neutrals-900 outline-offset-4"
  >
    <div
      className={`${className} text-14 leading-1.5 flex justify-center items-center h-10 min-w-[6rem] rounded-[6.25rem] border-1 outline-none ${
        disabled
          ? 'text-neutrals-500 border-neutrals-500'
          : error
          ? 'text-feedback-negative-300 border-feedback-negative-300'
          : selected
          ? 'text-neutrals-white bg-neutrals-800 group-hover:bg-neutrals-700 group-focus-visible:bg-neutrals-700'
          : 'text-neutrals-800 border-neutrals-600 group-hover:border-neutrals-800 group-focus-visible:border-neutrals-800'
      }`}
    >
      {label}
    </div>
  </button>
)
