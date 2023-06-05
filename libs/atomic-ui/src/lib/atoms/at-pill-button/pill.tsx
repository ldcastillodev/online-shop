import { NavArrowDown } from 'iconoir-react'

export const Pill = ({ label = '', value = '', open = false }) => (
  <div
    className={`text-14 leading-1.5 min-w-max h-10 rounded-[6.25rem] border-1 group-hover:border-neutrals-800 group-focus-visible:border-neutrals-800 inline-flex items-center justify-between gap-2 pl-4 pr-2 py-2 ${
      value || open ? 'text-neutrals-800' : 'text-neutrals-600'
    } ${open ? 'border-neutrals-800' : 'border-neutrals-600'}`}
  >
    {value ? value : label}
    <div className="w-10 flex justify-center items-center">
      <NavArrowDown className={`text-neutrals-800 ${open ? 'rotate-180' : ''}`} />
    </div>
  </div>
)
