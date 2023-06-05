import { MlImages, Image } from '../../molecules/ml-images/index'
import { AtIconInformative, AtIconInformativeProps } from '../../atoms'

export interface OrContentBlockEProps {
  title: string
  subTitle?: string
  informative: AtIconInformativeProps[]
  image: Image[]
}

export const OrContentBlockE = ({ title, subTitle, informative, image }: OrContentBlockEProps) => {
  return (
    <section className="lg:max-w-screen-lg mx-auto">
      <div className="lg:flex lg:flex-row-reverse">
        <div className="lg:w-6/12 lg:mt-12 px-5 lg:px-8">
          <div className="flex flex-col">
            <div className="mb-4">
              <h2 className="text-neutrals-900 text-32 font-heading">{title}</h2>
            </div>
            <div className="mb-9">
              <p className="text-neutrals-700 text-16">{subTitle}</p>
            </div>
          </div>
          <div className="flex flex-row flex-wrap">
            {informative?.map((content, index) => (
              <div className="mb-9 lg:mb-10 w-full px-1">
                <AtIconInformative
                  className="items-start gap"
                  key={index}
                  {...content}
                  classIcon="w-14 h-14 shrink-0 lg:mr-6 mr-4"
                  titleClass="font-heading lg:text-24 text-20 font-medium"
                  labelClass="lg:text-16"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-6/12">
          <div className="flex flex-row justify-end lg:justify-start mt-7">
            <div className="relative w-full">
              <div className="lg:hidden">
                <div className="lg:w-full lg:pr-16 flex items-end	justify-end px-5">
                  <MlImages aspectRatio="1:1" images={image} />
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="lg:w-full lg:pr-16 lg:flex lg:items-end	lg:justify-end lg:px-40">
                  <MlImages unsetMaxDimensions aspectRatio="1:1" images={image} />
                </div>
              </div>
              <div className="pl-4 lg:pl-0">
                <div className="w-full h-[9rem] absolute bg-neutrals-100 top-[50%] lg:top-[55%] -z-10 lg:w-3/4 lg:h-80"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
