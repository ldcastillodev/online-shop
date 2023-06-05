import { useState, MouseEvent } from 'react'
import { textColorTransition } from '../at-tabs/shared/classes'
import { Link } from '../at-navbar-link'

export interface AtAnchorLinksProps {
  links: Link[]
}

export const AtAnchorLinks = ({ links = [] }: AtAnchorLinksProps) => {
  const [selectedLink, setSelectedLink] = useState('')

  const scrollToSection = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setSelectedLink(href)
    const section = document.querySelector(href)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className="flex flex-row justify-between grow py-2">
      {links.slice(0, 7).map((link, index) => (
        <div key={index} className="group">
          <a
            href={link.href}
            onClick={(e) => scrollToSection(e, link.href)}
            className={`${textColorTransition} group relative focus:outline-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-neutrals-900 inline-flex shrink-0 h-12 items-center justify-center ${
              link.href === selectedLink
                ? 'text-secondary-700'
                : 'text-neutrals-700 hover:text-neutrals-800 focus:text-neutrals-800'
            }`}
          >
            {link.label}
            <div
              className={`absolute bottom-[0] h-0.5 transition-[width] ease-custom duration-500 group-hover:w-full group-focus:w-full ${
                link.href === selectedLink
                  ? 'w-full bg-secondary-700'
                  : 'w-[0] group-hover:bg-neutrals-800 group-focus:bg-neutrals-800'
              }`}
            />
          </a>
        </div>
      ))}
    </nav>
  )
}
