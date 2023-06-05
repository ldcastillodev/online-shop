import { AtButton } from '../../atoms'
import { AtButtonDimensions, AtButtonTypes } from '../../types'
import { Image, MlImages } from '../../molecules'
import { ArrowTr } from 'iconoir-react'

export interface OrZoSectionProps {
  title: string
  subTitle: string
  label: string
  logo: Image
  backgroundImage: Image
}

export const OrZoSection = ({ title, subTitle, label, logo: { alt, src }, backgroundImage }: OrZoSectionProps) => {
  return (
    <section>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-5/12">
          <div className="mb-6">
            <img alt={alt} src={src} className="w-32 lg:w-[12rem]" />
          </div>
          <div className="mb-4">
            <h1 className="font-zo text-24 lg:text-40 text-zocolors-primary leading-1.5">{title}</h1>
          </div>
          <div className="mb-10">
            <h2 className="text-zocolors-secondary text-14 lg:text-16 lg:leading-1.5">{subTitle}</h2>
          </div>
          <div className="mb-10 lg:mb-0">
            <AtButton
              title={label}
              type={AtButtonTypes.SECONDARY}
              size={AtButtonDimensions.LARGE}
              IconRightRef={ArrowTr}
              className="w-64"
              align="center"
            />
          </div>
        </div>
        <div className="lg:w-7/12">
          <MlImages unsetMaxDimensions images={[backgroundImage]} aspectRatio="16:9" />
        </div>
      </div>
    </section>
  )
}
