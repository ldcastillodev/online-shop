import { MlImages, Image } from '../../molecules/ml-images/index'

export interface OrContentBlockDProps {
  title: string
  content: string
  image: Image[]
}

export const OrContentBlockD = ({ title, content, image }: OrContentBlockDProps) => {
  return (
    <section className="lg:max-w-screen-lg mx-auto">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-5/12 lg:self-center">
          <div className="mb-4 px-4 lg:mb-6 lg:px-[6.5rem]">
            <h2 className="text-neutrals-900 font-medium text-32 font-heading">{title}</h2>
          </div>
          <div className="mb-8 px-4 lg:px-[6.5rem] lg:mb-0">
            <p className="text-neutrals-700 text-14 lg:text-16">{content}</p>
          </div>
        </div>
        <div className="pl-4 lg:w-7/12 lg:pl-0">
          <MlImages unsetMaxDimensions images={image} />
        </div>
      </div>
    </section>
  )
}
