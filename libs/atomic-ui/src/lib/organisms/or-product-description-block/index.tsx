import { Image } from '../../molecules/ml-images'
import { MlImageGrid } from '../../molecules/ml-image-grid'
import { AtIconInformative, AtIconInformativeProps, AtEyebrowLink, AtEyebrowLinkProps } from '../../atoms'
import { Group } from 'iconoir-react'

export interface OrProductDescriptionBlockProps {
  title: string
  subTitle: string
  body: string
  informative: AtIconInformativeProps[]
  eyebrowLink: AtEyebrowLinkProps
  images: Image[]
  floorPlanImage?: Image
}

export const OrProductDescriptionBlock = ({
  title,
  subTitle,
  images,
  floorPlanImage,
  body,
  informative,
  eyebrowLink,
}: OrProductDescriptionBlockProps) => {
  return (
    <section>
      <MlImageGrid images={images} floorPlanImage={floorPlanImage} />
      <div className="px-4 lg:px-0 lg:w-[42.5rem]">
        <div className="mt-6">
          <AtEyebrowLink {...eyebrowLink} />
          <span className="font-bold text-neutrals-600 text-12"> AT </span>
          <AtEyebrowLink {...eyebrowLink} />
        </div>
        <div className="flex flex-row items-start mt-2">
          <h1 className="font-heading font-medium text-32 lg:text-[3.5rem] leading-1.3 text-neutrals-900 mb-2 lg:mb-2">
            {title}
          </h1>
        </div>
        <div className={`text-neutrals-700 font-bold inline-flex gap-2 py-1 mb-2 lg:mb-10`}>
          <div className="w-10 h-10 p-2 shrink-0">
            <Group />
          </div>
          <div className="leading-1.5 pt-2.5">
            <p className="font-bold">{subTitle}</p>
          </div>
        </div>
        <div className="mt-6 text-14 lg:text-16 text-neutrals-700 leading-1.5 lg:mb-16 lg:mt-0">
          <p>{body}</p>
        </div>
        <div className="mt-6 flex flex-col lg:gap-8 gap-4">
          {informative?.map((content, index) => (
            <AtIconInformative
              className="items-baseline"
              key={index}
              {...content}
              classIcon="w-4 h-4 shrink-0 lg:mr-6 mr-5"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
