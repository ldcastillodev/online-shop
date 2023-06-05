import { Image } from '../ml-images'
import { Building, Coin, NavArrowLeft, NavArrowRight } from 'iconoir-react'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import { AtButton } from '../../atoms'
import { AtButtonDimensions, AtButtonTypes } from '../../types'
import { useRef, useState } from 'react'

export interface MlIllustratedCardProps {
  images: Image[]
  title: string
  description: string
  price: string
  floor: string
}

const detailClasses = 'flex gap-2 items-center text-neutrals-800 text-14 leading-1.5'

export const MlIllustratedCard = ({ description, floor, images, price, title }: MlIllustratedCardProps) => {
  const swiper = useRef<SwiperRef>(null)
  const [beginning, setBeginning] = useState(true)
  const [end, setEnd] = useState(false)

  // illustration-card class is used for overrides for the bullet color (grouping), they're on the overrides.css file in ml-images folder
  // same for default swiper styles, imported in ml-images so no need to import them again (due to bundling)
  return (
    <div className="illustration-card border-1 bg-neutrals-white border-neutrals-300 rounded-4 max-w-full w-[21.4375rem] lg:w-[20.3125rem]">
      <Swiper
        ref={swiper}
        modules={[Pagination]}
        pagination={{
          dynamicBullets: true,
          dynamicMainBullets: 4,
        }}
        onSlideChange={(swiper) => {
          setEnd(swiper.isEnd)
          setBeginning(swiper.isBeginning)
        }}
        className="w-full h-40"
      >
        <div className="absolute top-1/2 -translate-y-1/2 z-[2] left-6">
          <AtButton
            ariaLabel="Previous slide"
            className="w-10"
            type={AtButtonTypes.TERTIARY}
            isDisabled={beginning}
            size={AtButtonDimensions.SMALL}
            onClick={() => swiper.current?.swiper.slidePrev()}
            IconLeftRef={NavArrowLeft}
          />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 z-[2] left-full -translate-x-[calc(100%+1.5rem)]">
          <AtButton
            ariaLabel="Next slide"
            className="w-10"
            isDisabled={end}
            type={AtButtonTypes.TERTIARY}
            size={AtButtonDimensions.SMALL}
            onClick={() => swiper.current?.swiper.slideNext()}
            IconLeftRef={NavArrowRight}
          />
        </div>
        {images.map(({ alt, src }, i) => (
          <SwiperSlide key={i}>
            <img
              alt={alt}
              src={src}
              className="py-6 px-20 lg:px-[4.5rem] w-full h-full object-center"
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="pt-8 p-6">
        <p className="font-heading text-neutrals-900 font-medium text-20 leading-1.3 mb-1 line-clamp-1">{title}</p>
        <p className="text-14 leading-1.5 text-neutrals-800 mb-4 line-clamp-3">{description}</p>
        <div className={`${detailClasses} mb-3`}>
          <Coin className="shrink-0" />
          <span className="line-clamp-1">{price}</span>
        </div>
        <div className={detailClasses}>
          <Building className="shrink-0" />
          <span className="line-clamp-1">{floor}</span>
        </div>
      </div>
    </div>
  )
}
