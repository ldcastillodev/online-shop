import { Image } from '../../molecules'
import { AtButton, AtButtonProps, AtLink, AtLinkType, AtNavbarLink, Link } from '../../atoms'
import { Menu, NavArrowLeft } from 'iconoir-react'
import { useState } from 'react'
import { OrMobileMenu } from '../or-mobile-menu'

export interface OrNavbarProps {
  logo: Image
  links?: Link[]
  buttons?: AtButtonProps[]
  /** Setting this value will override every other element inside the navigation bar besides the logo, meant only for usage within the checkout flow */
  checkoutHref?: string
}

export const OrNavbar = ({ buttons, checkoutHref, links, logo: { alt, src } }: OrNavbarProps) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="bg-neutrals-white border-b-1 border-neutrals-300">
        <div
          className={`h-[4.5rem] lg:h-[6.625rem] lg:max-w-screen-lg mx-auto px-4 lg:px-10 flex items-center ${
            checkoutHref ? '' : 'justify-between'
          }`}
        >
          <a
            href="/"
            className={`${
              checkoutHref ? 'hidden lg:block' : ''
            } focus:outline-none focus-visible:outline-offset-4 focus-visible:outline focus-visible:outline-1 focus-visible:outline-neutrals-900`}
          >
            <img src={src} alt={alt} className="w-[4.5rem] lg:w-[8.5rem]" />
          </a>
          {links && !checkoutHref && (
            <nav className="hidden h-full lg:flex gap-16 px-10">
              {links.map((link, i) => (
                <AtNavbarLink key={i} {...link} selected={new RegExp(link.href).test(window.location.href)} />
              ))}
            </nav>
          )}
          {buttons && !checkoutHref && (
            <div className="hidden lg:flex gap-6">
              {buttons.map((button, i) => (
                <AtButton key={i} {...button} className="min-w-[11.25rem]" />
              ))}
            </div>
          )}
          {!checkoutHref && (links || buttons) && (
            <button
              className="w-10 h-10 flex justify-center items-center lg:hidden"
              aria-label="Open navigation menu"
              onClick={() => setOpen(true)}
            >
              <Menu />
            </button>
          )}
          {checkoutHref && (
            <div className="lg:ml-12">
              <AtLink
                type={AtLinkType.SECONDARY}
                actionTarget={checkoutHref}
                className="text-14 lg:text-16"
                title="Back to Space Details"
                IconLeftRef={NavArrowLeft}
              />
            </div>
          )}
        </div>
      </header>
      {!checkoutHref && (
        <OrMobileMenu logo={{ alt, src }} open={open} onClose={() => setOpen(false)} links={links} buttons={buttons} />
      )}
    </>
  )
}
