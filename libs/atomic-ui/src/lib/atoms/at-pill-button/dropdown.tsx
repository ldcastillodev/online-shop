import { DropdownOptionParams } from '../at-dropdown'
import { Dialog, Listbox } from '@headlessui/react'
import { Pill } from './pill'
import { DropdownListbox } from '../at-dropdown/dropdown-listbox'
import { useState } from 'react'
import { usePopper } from 'react-popper'

export type AtPillDropdownProps = DropdownOptionParams & { label: string }

export const AtPillDropdown = ({ label, onChange, options, value }: AtPillDropdownProps) => {
  const [button, setButton] = useState<HTMLElement | null>(null)
  const [list, setList] = useState<HTMLElement | null>(null)

  const { styles, attributes } = usePopper(button, list, { placement: 'bottom-start' })

  return (
    <Listbox onChange={onChange} value={value} by={(a, b) => a?.value === b?.value}>
      <Listbox.Button
        ref={setButton}
        className="group focus:outline-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-neutrals-900 outline-offset-4"
      >
        {({ open, value }) => <Pill open={open} value={value?.label} label={label} />}
      </Listbox.Button>
      <Dialog style={styles.popper} {...attributes.popper} className="z-[2]" ref={setList} onClose={() => undefined}>
        <Dialog.Panel>
          <DropdownListbox options={options} className="max-w-full w-[21.4375rem]" />
        </Dialog.Panel>
      </Dialog>
    </Listbox>
  )
}
