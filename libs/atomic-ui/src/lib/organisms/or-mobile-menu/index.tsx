import { OrNavbarProps } from '../or-navbar'
import { Dialog } from '@headlessui/react'
import { Cancel } from 'iconoir-react'
import { AtButton, AtLink, AtLinkType } from '../../atoms'

export type OrMobileMenuProps = Pick<OrNavbarProps, 'logo' | 'links' | 'buttons'> & {
  open: boolean
  onClose: () => void
}

export const OrMobileMenu = ({ buttons, links, logo: { alt, src }, onClose, open }: OrMobileMenuProps) => (
  <Dialog open={open} onClose={onClose}>
    <Dialog.Panel className="fixed inset-0 bg-neutrals-white lg:hidden">
      <div className="flex items-center justify-between h-[4.5rem] border-b-1 border-neutrals-300 px-4 py-2">
        <a
          href="/"
          className="focus:outline-none focus-visible:outline-offset-4 focus-visible:outline focus-visible:outline-1 focus-visible:outline-neutrals-900"
        >
          <img alt={alt} src={src} className="w-[4.5rem]" />
        </a>
        <button
          onClick={onClose}
          aria-label="Close mobile menu"
          className="focus:outline-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-neutrals-900 focus-visible:outline-offset-4"
        >
          <Cancel className="w-10 h-10 p-2" />
        </button>
      </div>
      <div className="h-[calc(100%-4.5rem)] px-6 pb-5 flex flex-col justify-between">
        <nav className="grow flex flex-col gap-8 py-16">
          {links?.map(({ href, label }, i) => (
            <AtLink key={i} actionTarget={href} title={label} type={AtLinkType.SECONDARY} skipDefaultAlignment />
          ))}
        </nav>
        <div className="flex flex-col gap-2">
          {buttons?.map((button, i) => (
            <AtButton key={i} {...button} className="w-full" />
          ))}
        </div>
      </div>
    </Dialog.Panel>
  </Dialog>
)
