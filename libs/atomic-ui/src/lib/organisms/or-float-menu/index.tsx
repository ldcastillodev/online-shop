import { outline, SortOption } from '../or-bottom-sheet'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { SortButton } from './button'
import { usePopper } from 'react-popper'

export interface OrFloatMenuProps {
  options: SortOption[]
  onSelect: (option: SortOption) => void
  selected: SortOption
}

export const OrFloatMenu = ({ onSelect, options, selected }: OrFloatMenuProps) => {
  const [open, setOpen] = useState(false)
  const [box, setBox] = useState<HTMLDivElement | null>(null)
  const [button, setButton] = useState<HTMLButtonElement | null>(null)

  const { attributes, styles } = usePopper(button, box, {
    placement: 'bottom-end',
    modifiers: [{ name: 'offset', options: { offset: [0, 8] } }],
  })

  return (
    <div className="hidden lg:block">
      <SortButton ref={setButton} option={selected} open={open} onClick={() => setOpen(true)} />
      <Transition
        show={open}
        as={Fragment}
        enter="transition duration-100 ease-custom"
        leave="transition duration-100 ease-custom"
        enterFrom="opacity-[0] transform scale-95"
        enterTo="opacity-[1] transform scale-100"
        leaveFrom="opacity-[1] transform scale-100"
        leaveTo="opacity-[0] transform scale-95"
      >
        <Dialog onClose={() => setOpen(false)}>
          <Dialog.Panel
            ref={setBox}
            {...attributes.popper}
            style={styles.popper}
            className="bg-neutrals-white rounded-8 w-[23.4375rem] shadow-level-4 flex flex-col items-start py-8 text-neutrals-800 leading-1.5"
          >
            {options.map((op, i) => (
              <button
                key={i}
                onClick={() => {
                  onSelect(op)
                  setOpen(false)
                }}
                className={`${outline} ${
                  selected.value === op.value ? 'font-bold' : ''
                } px-4 hover:bg-neutrals-100 w-full text-left h-12`}
              >
                <strong>{op.label}</strong> {op.description}
              </button>
            ))}
          </Dialog.Panel>
        </Dialog>
      </Transition>
    </div>
  )
}
