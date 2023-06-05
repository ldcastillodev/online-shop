import { Dialog, Transition } from '@headlessui/react'
import { Cancel } from 'iconoir-react'
import { Fragment, PointerEvent, useRef, useState } from 'react'
import { SortButton } from '../or-float-menu/button'

export type SortOption = Record<'value' | 'label' | 'description', string>

export interface OrBottomSheetProps {
  onSelect: (option: SortOption) => void
  selected: SortOption
  options: SortOption[]
}

export const outline =
  'focus:outline-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-neutrals-900 focus-visible:outline-offset-4'

export const OrBottomSheet = ({ onSelect, options, selected }: OrBottomSheetProps) => {
  const [open, setOpen] = useState(false)
  const dialogBox = useRef<HTMLDivElement | null>(null)
  const [initialHeight, setInitialHeight] = useState<number>(0)

  const dragDownwards = (e: PointerEvent) => {
    e.preventDefault()
    const captured = e.currentTarget.hasPointerCapture(e.pointerId)
    const pointerBelowBar = e.clientY > initialHeight

    if (captured && pointerBelowBar) {
      dialogBox.current!.style.setProperty('--drag-offset', `${e.clientY - initialHeight}px`)
    }
  }

  const checkFinalPositionAction = (e: PointerEvent) => {
    e.preventDefault()
    e.currentTarget.releasePointerCapture(e.pointerId)

    const threshold = 0.8
    const pointerPosition = e.clientY > window.innerHeight ? window.innerHeight : e.clientY
    const { height } = dialogBox.current!.getBoundingClientRect()
    const thresholdStart = initialHeight + height * (1 - threshold)
    const meetsThreshold = pointerPosition >= thresholdStart

    if (meetsThreshold) setOpen(false)
    else dialogBox.current!.style.setProperty('--drag-offset', `0px`)
  }

  const capturePointer = (e: PointerEvent) => {
    e.preventDefault()
    e.currentTarget.setPointerCapture(e.pointerId)
    setInitialHeight(e.clientY)
  }

  return (
    <>
      <SortButton option={selected} open={open} onClick={() => setOpen(true)} className="lg:hidden" />
      <Transition show={open} as={Fragment}>
        <Dialog onClose={() => setOpen(false)} className="lg:hidden touch-none">
          <Transition.Child
            className="fixed inset-0"
            enter="transition-background ease-custom duration-200"
            leave="transition-background ease-custom duration-200"
            enterTo="bg-neutrals-black bg-opacity-2"
            leaveFrom="bg-neutrals-black bg-opacity-2"
          />
          <Transition.Child
            as={Fragment}
            enter="transition-translate ease-custom duration-200"
            leave="transition-translate ease-custom duration-200"
            enterFrom="translate-y-full"
            enterTo="translate-y-[var(--drag-offset)]"
            leaveFrom="translate-y-[var(--drag-offset)]"
            leaveTo="translate-y-full"
          >
            <Dialog.Panel
              style={{ '--drag-offset': '0px' } as Record<string, string>}
              ref={dialogBox}
              className="bg-neutrals-white rounded-t-8 fixed bottom-0 w-full"
            >
              <div
                className="w-full h-4 flex items-center justify-center"
                onPointerDown={capturePointer}
                onPointerUp={checkFinalPositionAction}
                onPointerMove={dragDownwards}
              >
                <svg width="25" height="4" viewBox="0 0 25 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2.52783 2H22.4724"
                    stroke="#CFD0D8"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex justify-between items-center px-4 pb-2 border-b-1 border-neutrals-300 text-neutrals-900 leading-1.5 font-bold">
                <div className="w-10" aria-hidden />
                <p>Sort By</p>
                <button
                  className={`w-10 h-10 p-2 ${outline}`}
                  onClick={() => setOpen(false)}
                  aria-label="Close sort by menu"
                >
                  <Cancel />
                </button>
              </div>
              <div className="flex flex-col items-start py-4 text-neutrals-800 leading-1.5">
                {options.map((op, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      onSelect(op)
                      setOpen(false)
                    }}
                    className={`${outline} ${
                      selected.value === op.value ? 'font-bold' : ''
                    } px-4 hover:bg-neutrals-100 w-full text-left h-14`}
                  >
                    <strong>{op.label}</strong> {op.description}
                  </button>
                ))}
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  )
}
