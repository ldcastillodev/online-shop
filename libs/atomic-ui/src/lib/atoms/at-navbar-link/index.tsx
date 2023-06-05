import { Highlight } from '../at-tabs/shared/highlight'
import { textColorTransition } from '../at-tabs/shared/classes'
import { NavArrowDown } from 'iconoir-react'

export interface Link {
  href: string
  label: string
  selected?: boolean
  disabled?: boolean
}

export interface AtNavbarLinkProps extends Link {
  open?: boolean
  links?: Link[] // TODO: **Placeholder field**, currently has no defined behavior
}

export const AtNavbarLink = ({ disabled, href, label, links, open, selected }: AtNavbarLinkProps) => (
  <div
    className={`group relative h-full leading-1.5 inline-flex justify-center items-center gap-2 py-2 ${
      !disabled ? 'hover:text-neutrals-700 focus-within:text-neutrals-700' : ''
    } ${disabled ? 'text-neutrals-500' : selected ? 'text-primary-500' : 'text-neutrals-800'} ${textColorTransition}`}
  >
    <div className="focus-visible-within peer flex gap-2 items-center">
      <a href={!disabled ? href : undefined} aria-disabled={disabled} className="focus:outline-none">
        {label}
      </a>
      {links && <NavArrowDown className={`cursor-pointer ${open ? 'rotate-180' : ''} w-10 h-10 p-2`} />}
    </div>
    <Highlight
      selected={selected}
      disabled={disabled}
      className="absolute -bottom-[1px] peer-[:has(:focus-visible)]:w-full peer-[:has(:focus-visible)]:bg-current"
    />
  </div>
)
