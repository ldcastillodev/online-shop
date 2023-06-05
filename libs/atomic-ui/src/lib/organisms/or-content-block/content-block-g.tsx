import { MlImages, Image } from '../../molecules/ml-images/index'
import { AtIconInformative, AtIconInformativeProps } from '../../atoms'

export interface OrContentBlockGProps {
  title: string
  subTitle?: string
  informative: AtIconInformativeProps[]
  image: Image[]
}

export const OrContentBlockG = ({ title, subTitle, informative, image }: OrContentBlockGProps) => {
  return (
    <section className="lg:max-w-screen-lg mx-auto">
      <div className="flex flex-col">
        <div className="mb-4">
          <h2 className="text-neutrals-900 text-32 font-heading leading-1.3">{title}</h2>
        </div>
        <div className="mb-8 lg:mb-16">
          <p className="text-neutrals-700 text-14 lg:text-16">{subTitle}</p>
        </div>
      </div>
      <div className="flex flex-row flex-wrap">
        {informative?.map((content, index) => (
          <div className="mb-8 lg:mb-14 w-full lg:w-2/4 lg:pr-[2.75rem] px-1">
            <AtIconInformative
              className="lg:items-baseline items-start"
              key={index}
              {...content}
              classIcon="w-6 h-6 shrink-0 lg:mr-6 mr-4"
              titleClass="font-heading lg:text-24 text-20 font-medium"
              labelClass="lg:text-16"
              contentClass="pt-0"
            />
          </div>
        ))}
      </div>
      <div className="lg:pr-[2.75rem] lg:mt-10">
        <MlImages unsetMaxDimensions images={image} />
      </div>
    </section>
  )
}
