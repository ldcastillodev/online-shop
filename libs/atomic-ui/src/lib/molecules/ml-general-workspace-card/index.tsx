import { Images, MlImages } from '../ml-images'
import { useState } from 'react'

export interface MlGeneralWorkspaceCardProps extends Images {
  title: string
  href: string
}

export const MlGeneralWorkspaceCard = ({ images, title, href }: MlGeneralWorkspaceCardProps) => {
  const [current, setCurrent] = useState(0)

  return (
    <div className="relative h-[17.125rem] lg:h-[25.625rem] w-full max-w-[22.5rem] lg:max-w-[35.625rem] rounded-4 border-1 border-transparent hover:border-neutrals-400 active:border-neutrals-600 [&:has(a:focus-visible)]:border-neutrals-900 [&:has(a:focus-visible)]:rounded-0">
      <a href={href} className="h-[17.125rem] lg:h-[25.625rem] p-2 lg:p-4 flex flex-col focus:outline-none">
        <div className="mb-2 grow"></div>
        <p className="text-neutrals-700 text-12 lg:text-14 leading-1.5 mb-2 lg:mb-4">{images?.[current].caption}</p>
        <p className="text-neutrals-900 text-24 leading-1.3 font-medium font-heading">{title}</p>
      </a>
      <div className="absolute top-2 left-2 lg:top-4 lg:left-4 w-[95.5%] lg:w-[94.4%]">
        <MlImages
          unsetMaxDimensions
          aspectRatio="16:9"
          className="max-w-[21.4375rem] lg:max-w-[35.625rem]"
          images={images}
          onSlideChange={setCurrent}
          href={href}
        />
      </div>
    </div>
  )
}
