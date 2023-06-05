import { MlImages, Image } from '../../molecules/ml-images/index'
import { AtLinkProps, AtLink } from '../../atoms'

export interface contentItems {
  title: string
  body: string
  link: AtLinkProps
}

export interface OrContentBlockAProps {
  title: string
  image: Image[]
  contents: contentItems[]
}

export const OrContentBlockA = ({ title, image, contents }: OrContentBlockAProps) => {
  return (
    <section className="lg:max-w-screen-lg mx-auto">
      <div>
        <div className="lg:flex">
          <div className="lg:w-2/4">
            <div className="mb-6 px-4 lg:px-20">
              <div className="h-0.5 w-12 bg-secondary-700" />
            </div>
            <div className="mb-10 px-4 lg:mb-24 lg:px-20">
              <h2 className="text-neutrals-900 font-medium mb-4 text-32 lg:text-48 font-heading leading-1.3">
                {title}
              </h2>
            </div>
            <div className="lg:pr-30">
              <MlImages unsetMaxDimensions images={image} />
            </div>
            <div className="mb-16">
              <div className="w-[17rem] h-10 lg:h-14 lg:w-[26rem] bg-neutrals-white" />
            </div>
          </div>
          <div className="lg:w-2/4">
            <div>
              {contents?.map((content, index) => (
                <div className="lg:w-[26rem] lg:pt-8">
                  <div className="mb-6 px-4 lg:px-0">
                    <h3 className="text-neutrals-900 font-medium mb-4 text-24 lg:text-32 font-heading leading-1.3">
                      {content.title}
                    </h3>
                  </div>
                  <div className="mb-8 px-4 lg:px-0">
                    <p className="text-neutrals-700 text-16 leading-1.5">{content.body}</p>
                  </div>
                  <div className={`${index === contents.length - 1 ? '' : 'mb-14'} px-4 lg:px-0`}>
                    <AtLink {...content.link} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
