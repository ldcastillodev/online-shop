import { Listbox } from '@headlessui/react'
import { Check } from 'iconoir-react'
import { DropdownOption } from './index'

export const DropdownListbox = ({ options, className = '' }: { options: DropdownOption[]; className?: string }) => (
  <Listbox.Options
    className={`${className} max-h-80 overflow-y-auto shadow-level-4 border-1 border-neutrals-300 rounded-8 outline-none bg-neutrals-white`}
  >
    {options.map((option, index) => (
      <Listbox.Option
        key={index}
        className="h-14 p-4 cursor-pointer leading-1.5 flex justify-between border-b-1 border-neutrals-300 text-neutrals-800 ui-selected:bg-neutrals-300 ui-selected:text-neutrals-900 ui-active:bg-neutrals-300 ui-active:text-neutrals-900 ui-selected:font-bold"
        value={option}
      >
        {option.label}
        <Check className="hidden ui-selected:block text-primary-500" />
      </Listbox.Option>
    ))}
  </Listbox.Options>
)
