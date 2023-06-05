import { Dialog } from '@headlessui/react'
import { CustomQuestionMark, TooltipArrow } from './icons'
import { Placement } from '@popperjs/core'
import { useState } from 'react'
import { usePopper } from 'react-popper'
import { offset } from './offset'

export interface AtTooltipProps {
  content: string
  /** Preferred placement of tooltip, defaults to `auto` (whichever position has the most space) */
  placement?: Placement
  label?: string
}

export const AtTooltip = ({ content, placement = 'auto', label }: AtTooltipProps) => {
  const [open, setOpen] = useState(false)
  const [ref, setRef] = useState<HTMLButtonElement | null>(null)
  const [popper, setPopper] = useState<HTMLDivElement | null>(null)
  const [arrow, setArrow] = useState<HTMLDivElement | null>(null)

  const { styles, attributes, state } = usePopper(ref, popper, {
    placement,
    modifiers: [
      { name: 'arrow', options: { element: arrow } },
      { name: 'offset', options: { offset } },
      { name: 'flip', options: { padding: 8, fallbackPlacements: ['top', 'bottom', 'left', 'right'] } },
    ],
  })

  const arrowPositionClasses = (): { position: string; rotation: string } => {
    const position = state?.placement.split('-')[0] as 'top' | 'bottom' | 'right' | 'left'

    switch (position) {
      case 'top':
        return { position: '-bottom-[0.7rem]', rotation: 'rotate-180' }
      case 'bottom':
        return { position: '-top-[0.7rem]', rotation: '' }
      case 'right':
        return { position: '-left-4', rotation: '-rotate-90 ' }
      case 'left':
        return { position: '-right-4', rotation: 'rotate-90' }
    }
  }

  const { position, rotation } = arrowPositionClasses() ?? {}

  return (
    <>
      <div className="focus-visible-within">
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={label}
          ref={setRef}
          className="flex justify-center items-center outline-none w-6 h-6 rounded-full text-neutrals-white bg-primary-500 hover:bg-primary-700 focus-visible:bg-primary-700 active:bg-primary-900"
        >
          <CustomQuestionMark />
        </button>
      </div>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        style={styles.popper}
        {...attributes.popper}
        ref={setPopper}
        className="z-[2] rounded-8 bg-neutrals-800 text-neutrals-white w-[18.125rem] pl-4 pr-2 py-4.5"
      >
        <Dialog.Panel>
          <TooltipArrow
            ref={setArrow}
            style={styles.arrow}
            className={position}
            svgClassName={`transform ${rotation}`}
            aria-hidden
          />
          {content}
        </Dialog.Panel>
      </Dialog>
    </>
  )
}
