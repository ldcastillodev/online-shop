import { Image } from '../../molecules/ml-images/index'
import { PortableText, PortableTextProps } from '@portabletext/react'
import { textBody } from './shared/text-body'
export interface OrContentBlockFProps {
  title: string
  body: PortableTextProps['value']
  imageOne: Image
  imageTwo: Image
}

export const OrContentBlockF = ({ title, body, imageOne, imageTwo }: OrContentBlockFProps) => {
  return (
    <section className="lg:max-w-screen-lg mx-auto">
      <div className="flex flex-col lg:flex-row-reverse">
        <div className="lg:w-3/5 lg:px-20">
          <div className="px-4 lg:px-0 lg:pr-16">
            <div className="mb-4 lg:mb-6">
              <h2 className="text-neutrals-900 font-medium text-32 font-heading">{title}</h2>
            </div>
            <div>{body && <PortableText value={body} components={textBody} />}</div>
          </div>
        </div>
      </div>
      <div className="relative lg:hidden">
        <div>
          <img
            className="w-full h-full object-cover aspect-square max-w-[13.5rem]"
            src={imageOne.src}
            alt={imageOne.alt}
          />
        </div>
        <div className="absolute top-[80%] right-0 left-[15%] pr-4">
          <img className="w-full h-full object-cover aspect-[2/1]" src={imageTwo.src} alt={imageTwo.alt} />
        </div>
        <div className="w-[95%] h-[9rem] absolute bg-neutrals-100 -z-10 top-[65%] right-0"></div>
      </div>
      <div className="-mt-[8%] relative hidden lg:block">
        <div className="lg:flex">
          <div className="lg:w-4/12">
            <img className="w-full h-full object-cover aspect-square" src={imageOne.src} alt={imageOne.alt} />
          </div>
        </div>
        <div className="w-4/5 h-[22rem] absolute bg-neutrals-100 -z-10 bottom-0 right-0 top-[45%]"></div>
        <div className="lg:flex">
          <div className="lg:w-6/12 lg:ml-20 lg:-mt-24">
            <img className="w-full h-full object-cover aspect-[2/1]" src={imageTwo.src} alt={imageTwo.alt} />
          </div>
        </div>
      </div>
    </section>
  )
}
