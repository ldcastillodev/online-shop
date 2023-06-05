import { MlImages, Image } from '../../molecules/ml-images/index'

export interface OrContentBlockBProps {
  title: string
  paragraphOne: string
  paragraphTwo: string
  paragraphThree: string
  paragraphFour: string
  imageOne: Image
  ImageTwo: Image
}

export const OrContentBlockB = ({
  title,
  paragraphOne,
  paragraphTwo,
  paragraphThree,
  paragraphFour,
  imageOne,
  ImageTwo,
}: OrContentBlockBProps) => {
  return (
    <section className="lg:max-w-screen-lg mx-auto">
      <div className="lg:hidden">
        <div className="mb-8 px-4">
          <div className="h-1 w-12 bg-secondary-700" />
        </div>
        <div className="mb-4 px-4">
          <h2 className="text-neutrals-900 font-medium mb-4 text-32 font-heading leading-1.3">{title}</h2>
        </div>
        <div className="text-16 leading-1.5 text-neutrals-700 font-regular mb-10 px-4">
          <p>{paragraphOne}</p>
        </div>
        <div className="text-14 leading-1.4 text-neutrals-700 font-regular mb-6 px-4">
          <p>{paragraphTwo}</p>
        </div>
        <div className="text-14 leading-1.4 text-neutrals-700 font-regular mb-6 px-4">
          <p>{paragraphThree}</p>
        </div>

        <div className="relative mb-24">
          <div className="pl-4">
            <MlImages images={[imageOne]} aspectRatio="1:1" className="rounded-4" />
          </div>
          <div className="absolute top-[60%] right-0 left-[15%]">
            <MlImages unsetMaxDimensions images={[ImageTwo]} aspectRatio="2:1" className="rounded-4" />
          </div>
        </div>
        <div className="text-14 leading-1.4 text-neutrals-700 font-regular px-4">
          <p>{paragraphFour}</p>
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="lg:flex lg:mb-20">
          <div className="lg:w-7/12 lg:px-20">
            <div className="mb-8 px-4">
              <div className="h-1 w-12 bg-secondary-700" />
            </div>
            <div className="mb-4 px-4">
              <h2 className="text-neutrals-900 font-medium mb-4 text-32 lg:text-48 font-heading leading-1.3">
                {title}
              </h2>
            </div>
          </div>
          <div className="lg:w-5/12 lg:self-center lg:pr-[10rem]">
            <div className="text-16 leading-1.5 text-neutrals-700 font-regular mb-10 px-4">
              <p>{paragraphOne}</p>
            </div>
          </div>
        </div>
        <div className="lg:flex">
          <div className="lg:w-4/12">
            <MlImages changeDimension unsetMaxDimensions images={[imageOne]} aspectRatio="1:1" className="rounded-4" />
          </div>
          <div className="lg:w-8/12">
            <div className="px-[15rem]">
              <div className="text-14 lg:text-16 leading-1.4 text-neutrals-700 font-regular mb-6 px-4">
                <p>{paragraphTwo}</p>
              </div>
              <div className="text-14 lg:text-16 leading-1.4 text-neutrals-700 font-regular mb-6 px-4">
                <p>{paragraphThree}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-4/5 h-[22rem] absolute bg-neutrals-100 -z-10 -bottom-[14rem] right-0"></div>
        <div className="lg:flex">
          <div className="lg:w-6/12 lg:ml-20 lg:-mt-24">
            <MlImages unsetMaxDimensions images={[ImageTwo]} aspectRatio="2:1" className="rounded-4" />
          </div>
          <div className="lg:w-6/12 lg:self-center lg:-mt-24">
            <div className="lg:text-16 lg:px-[6rem] lg:mr-40 leading-1.4 text-neutrals-700 font-regular">
              <p>{paragraphFour}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
