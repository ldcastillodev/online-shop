import { AtLink, AtLinkProps } from '../../atoms'
import { PortableText, PortableTextProps } from '@portabletext/react'
import { textElements } from './text-elements'

const linkList = (links?: AtLinkProps[]) => links?.map((link, i) => <AtLink key={i} {...link} darkMode />)

const linkBoxClass = 'flex flex-col gap-3 lg:gap-6 items-start w-[15.875rem]'

export interface OrFooterProps {
  logo: Record<'src' | 'alt', string>
  socialLinks?: AtLinkProps[]
  contact?: PortableTextProps['value']
  links?: AtLinkProps[]
  secondaryLinks?: AtLinkProps[]
  copyright?: string
  className?: string
}

export const OrFooter = ({
  copyright,
  contact,
  links,
  logo,
  secondaryLinks,
  socialLinks,
  className = '',
}: OrFooterProps) => {
  const linkGroup1 = links?.slice(0, Math.round(links.length / 2))
  const linkGroup2 = links?.slice(Math.round(links.length / 2), links.length)

  return (
    <footer className={`bg-neutrals-900 ${className}`}>
      <div className="lg:max-w-screen-lg mx-auto flex flex-col lg:flex-row gap-16 justify-between px-4 lg:px-[10.4375rem] py-16 lg:py-20">
        <div className="w-[8.5rem]">
          <img src={logo.src} alt={logo.alt} width={136} height={68} className="mb-6 lg:mb-[3.75rem]" />
          <div className="flex gap-2 justify-around">
            {socialLinks?.map((link, i) => (
              <AtLink key={i} {...link} className="w-10" darkMode />
            ))}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-7.5">
          <div className={linkBoxClass}>{linkList(linkGroup1)}</div>
          <div className={linkBoxClass}>{linkList(linkGroup2)}</div>
        </div>
        <div className="text-neutrals-white">
          {contact && <PortableText value={contact} components={textElements} />}
        </div>
      </div>
      <div className="h-[1px] bg-neutrals-800" />
      <div className="lg:max-w-screen-lg mx-auto flex flex-col lg:flex-row lg:items-center justify-between pt-8 lg:px-[10.4375rem] py-8">
        <p className="text-neutrals-300 px-[5rem] lg:px-0 text-center lg:text-left mb-6 lg:mb-0">{copyright}</p>
        <div className="flex justify-center gap-8 lg:gap-16">{linkList(secondaryLinks)}</div>
      </div>
    </footer>
  )
}
