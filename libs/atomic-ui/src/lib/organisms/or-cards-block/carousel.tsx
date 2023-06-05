import { MlSpaceCard, MlSpaceCardProps } from '../../molecules/ml-space-card'
import { useRef, useState } from 'react'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import { AtButton } from '../../atoms'
import { AtButtonDimensions, AtButtonTypes } from '../../types'
import { NavArrowLeft, NavArrowRight } from 'iconoir-react'
import 'swiper/css'
import 'swiper/css/scrollbar'
import { MlSpaceCardSkeleton } from '../../molecules/ml-space-card/skeleton'
import { Scrollbar } from 'swiper'

export const CardsCarousel = ({
  cards,
  loading = false,
  loadingPlaceholders = 4,
  size = 'medium',
  buttonPositioning = 'right-0 -top-[3.75rem]',
  slideClassName = 'pb-4',
  spaceBetween = 30,
}: {
  cards?: MlSpaceCardProps[]
  loading?: boolean
  size?: 'small' | 'medium'
  loadingPlaceholders?: number
  buttonPositioning?: string
  slideClassName?: string
  spaceBetween?: number
}) => {
  const swiperRef = useRef<SwiperRef>(null)
  const [beginning, setBeginning] = useState(true)
  const [end, setEnd] = useState(false)

  return (
    <div className="relative mt-2 lg:mt-4">
      <div className={`absolute hidden lg:flex gap-4 h-fit ${buttonPositioning}`}>
        <AtButton
          ariaLabel="Previous slide"
          className="w-10"
          type={AtButtonTypes.PRIMARY}
          size={AtButtonDimensions.SMALL}
          onClick={() => swiperRef.current?.swiper.slidePrev()}
          IconLeftRef={NavArrowLeft}
          isDisabled={loading || beginning}
        />
        <AtButton
          ariaLabel="Next slide"
          className="w-10"
          type={AtButtonTypes.PRIMARY}
          size={AtButtonDimensions.SMALL}
          onClick={() => swiperRef.current?.swiper.slideNext()}
          IconLeftRef={NavArrowRight}
          isDisabled={loading || end}
        />
      </div>
      <Swiper
        ref={swiperRef}
        onSlideChange={(swiper) => {
          setBeginning(swiper.isBeginning)
          setEnd(swiper.isEnd)
        }}
        modules={[Scrollbar]}
        scrollbar={{ hide: true }}
        spaceBetween={spaceBetween}
        slidesPerView="auto"
        className="lg:w-[79.5625rem]"
      >
        {!loading &&
          cards?.map((card, i) => (
            <SwiperSlide className={slideClassName} key={i} style={{ width: 'max-content' }}>
              <MlSpaceCard {...card} size={size} />
            </SwiperSlide>
          ))}
        {loading &&
          Array.from({ length: loadingPlaceholders }, (_, i) => (
            <SwiperSlide className={slideClassName} key={i} style={{ width: 'max-content' }}>
              <MlSpaceCardSkeleton size={size} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}
