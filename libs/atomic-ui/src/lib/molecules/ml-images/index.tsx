import { A11y, Pagination } from 'swiper'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/a11y'
import './overrides.css'
import { useRef, useState } from 'react'
import { AtButton } from '../../atoms'
import { AtButtonDimensions, AtButtonTypes } from '../../types'
import { aspectRatioClass, buttonPositioning } from './configuration'
import { Overlay } from './overlay'
import { NavArrowLeft, NavArrowRight } from 'iconoir-react'

export type AspectRatio = '16:9' | '1:1' | '2:1' | '3:2' | '4:3' | 'custom'

type SizeOptions = {
  aspectRatio?: AspectRatio
  /** Manually set max dimensions, if an aspect ratio is set, by just setting either width or height browser will calculate what the other should be */
  unsetMaxDimensions?: boolean
  /** Change the dimension of the image, this will only work if aspect ratio 1:1 want to use the other width */
  changeDimension?: boolean
}

export type Image = {
  src: string
  alt: string
  caption?: string
}

export type Images = {
  images?: Image[]
}

export type MlImagesProps = Images &
  SizeOptions & {
    onSlideChange?: (index: number) => void
    onClick?: (index: number) => void
    href?: string
    className?: string
  }

export const MlImages = ({
  images,
  aspectRatio = 'custom',
  unsetMaxDimensions = false,
  changeDimension = false,
  onSlideChange,
  onClick,
  href,
  className = '',
}: MlImagesProps) => {
  const swiper = useRef<SwiperRef | null>(null)
  const [beginning, setBeginning] = useState(true)
  const [end, setEnd] = useState(false)

  const dimensions = aspectRatio === '1:1' && !changeDimension ? 'max-w-[13.5rem]' : 'max-w-[24rem]'
  const aspectRatioClasses = aspectRatio
    ? `${aspectRatioClass[aspectRatio]} ${!unsetMaxDimensions ? dimensions : ''}`
    : ''

  if (!images?.length) return null

  if (images.length === 1) {
    if (href) {
      return (
        <a href={href} tabIndex={-1}>
          <img
            src={images[0].src}
            alt={images[0].alt}
            className={`w-full h-full object-cover ${aspectRatioClasses} ${className}`}
          />
        </a>
      )
    }

    return (
      <img
        src={images[0].src}
        alt={images[0].alt}
        className={`w-full h-full object-cover ${aspectRatioClasses} ${className}`}
      />
    )
  }

  return (
    <Swiper
      modules={[A11y, Pagination]}
      wrapperTag={href ? 'a' : undefined}
      onBeforeInit={(swiper) => {
        if (href) {
          const wrapper = swiper.wrapperEl as HTMLAnchorElement
          wrapper.href = href
          wrapper.tabIndex = -1 // Don't allow tab focusing since this anchor should be used inside a card (which should hold the focus)
        }
      }}
      pagination={{
        dynamicBullets: true,
        dynamicMainBullets: 5,
      }}
      onSlideChange={(swiper) => {
        setEnd(swiper.isEnd)
        setBeginning(swiper.isBeginning)
        onSlideChange?.(swiper.activeIndex)
      }}
      onClick={(swiper) => (onClick ? onClick(swiper.activeIndex) : 0)}
      ref={swiper}
      className={`${className} ${aspectRatioClasses} group`}
    >
      <div className={`${buttonPositioning} left-4`}>
        <AtButton
          ariaLabel="Previous slide"
          className="w-10"
          type={AtButtonTypes.PRIMARY}
          size={AtButtonDimensions.SMALL}
          isDisabled={beginning}
          onClick={() => swiper.current?.swiper.slidePrev()}
          IconLeftRef={NavArrowLeft}
        />
      </div>
      <div className={`${buttonPositioning} left-full -translate-x-[calc(100%+1rem)]`}>
        <AtButton
          ariaLabel="Next slide"
          className="w-10"
          type={AtButtonTypes.PRIMARY}
          size={AtButtonDimensions.SMALL}
          isDisabled={end}
          onClick={() => swiper.current?.swiper.slideNext()}
          IconLeftRef={NavArrowRight}
        />
      </div>
      <Overlay className="absolute z-[5] bottom-[0] left-1/2 -translate-x-1/2 pointer-events-none" />
      {images.map(({ alt, src }, index) => (
        <SwiperSlide key={index}>
          <img alt={alt} src={src} loading={index !== 0 ? 'lazy' : 'eager'} className="object-cover w-full h-full" />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
