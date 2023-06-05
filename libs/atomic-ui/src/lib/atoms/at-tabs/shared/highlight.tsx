interface HighlightProps {
  selected?: boolean
  disabled?: boolean
  className?: string
}

export const Highlight = ({ disabled, selected, className }: HighlightProps) => (
  <div
    className={`${className} h-0.5 transition-[width] ease-custom duration-500 group-hover:w-full group-focus:w-full ${
      selected ? 'w-full bg-current' : disabled ? '' : 'w-[0] group-hover:bg-current group-focus:bg-current'
    }`}
  />
)
