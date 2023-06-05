import { Minus, Plus } from 'iconoir-react'

const baseButtonClasses =
  'w-10 h-10 bg-neutrals-white outline-none border-1 border-neutrals-300 focus:border-neutrals-900 text-neutrals-900 flex justify-center items-center'

export interface ZoomButtonsProps {
  onZoomIn: () => void
  onZoomOut: () => void
}

export const ZoomButtons = ({ onZoomIn, onZoomOut }: ZoomButtonsProps) => (
  <div className="drop-shadow-1 flex flex-col absolute top-4 right-6 rounded-4">
    <button aria-label="Zoom in" onClick={onZoomIn} className={`${baseButtonClasses} rounded-t-4`}>
      <Plus />
    </button>
    <button aria-label="Zoom out" onClick={onZoomOut} className={`${baseButtonClasses} rounded-b-4`}>
      <Minus />
    </button>
  </div>
)
