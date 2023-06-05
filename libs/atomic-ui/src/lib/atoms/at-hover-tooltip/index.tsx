import { PropsWithChildren, useState } from 'react'
import { usePopper } from 'react-popper'

export interface AtHoverTooltipProps {
  content: string
}

export const AtHoverTooltip = ({ content, children }: PropsWithChildren<AtHoverTooltipProps>) => {
  const [target, setTarget] = useState<HTMLDivElement | null>(null)
  const [tooltip, setTooltip] = useState<HTMLDivElement | null>(null)

  const { styles, attributes } = usePopper(target, tooltip, {
    placement: 'bottom',
    modifiers: [{ name: 'offset', options: { offset: [0, 8] } }],
  })

  return (
    <div ref={setTarget} className="w-[fit-content] group">
      {children}
      <div
        style={styles.popper}
        {...attributes.popper}
        ref={setTooltip}
        role="tooltip"
        className="invisible group-hover:visible group-focus-within:visible p-4 bg-neutrals-800 rounded-8 text-neutrals-white text-14 leading-1.5"
      >
        {content}
      </div>
    </div>
  )
}
