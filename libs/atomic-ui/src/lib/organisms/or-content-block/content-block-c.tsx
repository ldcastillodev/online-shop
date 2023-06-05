import { Image } from '../../molecules/ml-images/index'
import { AtButton } from '../../atoms'
import { AtButtonDimensions, AtButtonTypes } from '../../types'
import { NavArrowRight } from 'iconoir-react'

export interface OrContentClockGProps {
  title: string
  mainText: string
  subTitle: string
  body: string
  signature: string
  image: Image
  mainTextTwo: string
  titleTwo: string
  bodyTwo: string
  buttonText: string
  imageTwo: Image
}

export const OrContentBlockC = ({
  mainText,
  title,
  subTitle,
  body,
  signature,
  image,
  mainTextTwo,
  titleTwo,
  bodyTwo,
  buttonText,
  imageTwo,
}: OrContentClockGProps) => {
  return (
    <section className="lg:max-w-screen-lg mx-auto">
      <div className="lg:hidden">
        <div className="px-4">
          <div className="mb-4">
            <div className="h-1 w-12 bg-secondary-700" />
          </div>
          <div className="mb-6">
            <p className="uppercase text-12 font-bold text-secondary-700">{mainText}</p>
          </div>
        </div>
        <div className="relative mb-14">
          <div className="pl-4">
            <img
              className="w-full h-full object-cover aspect-square max-w-[13.5rem] rounded-3"
              src={image.src}
              alt={image.alt}
            />
          </div>
          <div className="absolute w-11/12 h-full rounded-3 bg-neutrals-100 right-0 top-[10%] -z-10"></div>
        </div>
        <div className="px-4 mb-16">
          <div className="">
            <h2 className="text-neutrals-900 text-32 font-heading">{title}</h2>
          </div>
          <div className="mb-4">
            <h3 className="text-neutrals-900 text-20 font-heading">{subTitle}</h3>
          </div>
          <div className="mb-4">
            <p className="text-neutrals-700 text-14">{body}</p>
          </div>
          <div className="pr-8">
            <p className="font-signature text-48 -rotate-6">{signature}</p>
          </div>
        </div>
        <div className="px-4">
          <div className="mb-4">
            <div className="h-1 w-12 bg-secondary-700" />
          </div>
          <div className="mb-6">
            <p className="uppercase text-12 font-bold text-secondary-700">{mainTextTwo}</p>
          </div>
        </div>
        <div className="relative mb-8">
          <div className="pr-4">
            <img src={imageTwo.src} alt={imageTwo.alt} />
          </div>
          <div className="absolute w-3/5 h-full rounded-3 bg-neutrals-100 right-0 bottom-[10%] -z-10"></div>
        </div>
        <div className="px-4">
          <div className="mb-4">
            <h2 className="text-neutrals-900 text-32 font-heading">{titleTwo}</h2>
          </div>
          <div className="mb-8">
            <p className="text-neutrals-700 text-14">{bodyTwo}</p>
          </div>
          <div>
            <AtButton
              title={buttonText}
              type={AtButtonTypes.SECONDARY}
              size={AtButtonDimensions.LARGE}
              IconRightRef={NavArrowRight}
              className="w-[14rem]"
              align="center"
            />
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="flex flex-row mb-24">
          <div className="w-6/12 self-center px-20">
            <div className="mb-4">
              <div className="h-1 w-12 bg-secondary-700" />
            </div>
            <div className="mb-6">
              <p className="uppercase text-12 font-bold text-secondary-700">{mainText}</p>
            </div>
            <div className="">
              <h2 className="text-neutrals-900 text-48 font-heading">{title}</h2>
            </div>
            <div className="mb-4">
              <h3 className="text-neutrals-900 text-24 font-heading">{subTitle}</h3>
            </div>
            <div className="mb-4 pr-16">
              <p className="text-neutrals-700 text-16">{body}</p>
            </div>
            <div className="pr-24">
              <p className="font-signature text-[4.5rem] -rotate-6">{signature}</p>
            </div>
          </div>
          <div className="w-6/12">
            <div className="relative mb-8">
              <div className="pr-16">
                <img className="w-full h-full object-cover" src={image.src} alt={image.alt} />
              </div>
              <div className="absolute w-full h-full rounded-3 bg-neutrals-100 left-[10%] top-[20%] -z-10"></div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-6/12 mt-8">
            <div className="relative">
              <div className="">
                <img className="w-full h-full object-cover" src={image.src} alt={image.alt} />
              </div>
              <div className="absolute w-11/12 h-full rounded-3 bg-neutrals-100 bottom-[20%] -z-10"></div>
            </div>
          </div>
          <div className="w-6/12 mt-8 self-center">
            <div className="px-30">
              <div className="mb-4">
                <div className="h-1 w-12 bg-secondary-700" />
              </div>
              <div className="mb-6">
                <p className="uppercase text-12 font-bold text-secondary-700">{mainTextTwo}</p>
              </div>
              <div className="mb-4">
                <h2 className="text-neutrals-900 text-48 font-heading">{titleTwo}</h2>
              </div>
              <div className="mb-8">
                <p className="text-neutrals-700 text-16">{bodyTwo}</p>
              </div>
              <div>
                <AtButton
                  title={buttonText}
                  type={AtButtonTypes.SECONDARY}
                  size={AtButtonDimensions.LARGE}
                  IconRightRef={NavArrowRight}
                  className="w-[14rem]"
                  align="center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
