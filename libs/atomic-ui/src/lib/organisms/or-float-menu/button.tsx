import { outline, SortOption } from '../or-bottom-sheet'
import { NavArrowDown } from 'iconoir-react'
import { forwardRef } from 'react'

export const SortButton = forwardRef<
  HTMLButtonElement,
  {
    option: SortOption
    open: boolean
    onClick: () => void
    className?: string
  }
>(({ onClick, open, option: { description, label }, className = '' }, ref) => (
  <button ref={ref} className={`${outline} leading-1.5 h-10 flex items-center ${className}`} onClick={onClick}>
    <span>
      <strong>Sort by:</strong> {label} {description}
    </span>
    <NavArrowDown className={`${open ? 'rotate-180' : ''} w-10 px-2`} />
  </button>
))
