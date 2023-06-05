import { AtIconInformative, AtIconInformativeProps } from '../../atoms'
import { AspectRatio, Image, MlImages } from '../../molecules'
import { PropsWithChildren } from 'react'

export const Description = ({ text = '' }) => (
  <p className="text-16 leading-1.5 text-neutrals-700 mt-4 lg:mt-6">{text}</p>
)

export const Caption = ({ text = '' }) => (
  <figcaption className="mt-2 text-12 lg:text-14 leading-1.5 text-neutrals-700">{text}</figcaption>
)

export type TextBodyProps = { title?: string; body?: string; details?: AtIconInformativeProps[] }

export const TextBody = ({ title, body, details }: TextBodyProps) => (
  <div className="lg:w-1/2">
    {title && (
      <h3 className="mb-2 font-heading font-medium text-20 lg:text-24 leading-1.3 text-neutrals-900">{title}</h3>
    )}
    {body && <p className="mb-4 lg:mb-6 text-14 lg:text-16 leading-1.5 text-neutrals-700">{body}</p>}
    {details && (
      <div className={`grid grid-cols-1 ${!(title || body) ? 'lg:grid-cols-2' : ''} gap-y-4 lg:gap-y-2 gap-x-7.5`}>
        {details.map((el, i) => (
          <AtIconInformative key={i} {...el} />
        ))}
      </div>
    )}
  </div>
)

export type ImageBodyProps = {
  aspectRatio: AspectRatio
  images: Image[]
  shortDescription?: string
}

export const ImageBody = ({ aspectRatio, images, shortDescription }: ImageBodyProps) => (
  <figure className="lg:w-1/2">
    <MlImages unsetMaxDimensions aspectRatio={aspectRatio} images={images} className="max-h-[302px]" />
    <Caption text={shortDescription} />
  </figure>
)

export const SectionBody = ({
  children,
  description,
}: PropsWithChildren<{
  description?: string
}>) => (
  <>
    {description && <Description text={description} />}
    <div className="mt-8 lg:mt-10 flex flex-col lg:items-center lg:flex-row gap-6 lg:gap-7.5">{children}</div>
  </>
)

export const sectionBorders = 'mx-auto w-full lg:max-w-screen-lg px-4 py-12 lg:py-16 lg:px-[10.4375rem]'

export const Section = ({ title, children }: PropsWithChildren<{ title: string }>) => (
  <section className={sectionBorders}>
    <h2 className="font-heading font-medium text-32 leading-1.3 text-neutrals-900 mb-2 lg:mb-4">{title}</h2>
    {children}
  </section>
)
