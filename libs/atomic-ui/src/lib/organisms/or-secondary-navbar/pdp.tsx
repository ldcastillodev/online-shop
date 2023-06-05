import { DateRange } from 'react-day-picker'
import { AtButton, AtEyebrowLinkProps } from '../../atoms'
import { Date, Pricing, Space } from './pdp.components'
import { AtButtonDimensions, AtButtonTypes } from '../../types'
import { useEffect, useState } from 'react'
import { Transition } from '@headlessui/react'

const transition = 'transition-transform duration-500 ease-custom'
const hidden = '-translate-y-full'

export interface OrSecondaryNavbarPdpProps {
  building: AtEyebrowLinkProps
  workspaceType: AtEyebrowLinkProps
  space: string
  rate: string
  price?: string
  discountedPrice?: string
  date?: Date | DateRange
  range?: boolean
  time?: string
  onAction?: () => void
}

/** Navbar specific to the Product Detail Page, gets visible once we get past the booking panel. **The booking panel needs to have an ID as `booking-panel` to be able to render based on its position** */
export const OrSecondaryNavbarPdp = ({
  building,
  date,
  discountedPrice,
  onAction,
  price,
  range,
  rate,
  space,
  time,
  workspaceType,
}: OrSecondaryNavbarPdpProps) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const bookingPanel = document.getElementById('booking-panel') as HTMLDivElement

    const observer = new IntersectionObserver((entries) => setShow(entries[0].boundingClientRect.bottom < 0), {
      threshold: 0,
    })
    observer.observe(bookingPanel)
    return () => observer.unobserve(bookingPanel)
  }, [])

  return (
    <Transition
      show={show}
      className="fixed top-0 w-full bg-neutrals-white border-b-1 border-neutrals-300"
      enter={transition}
      leave={transition}
      enterFrom={hidden}
      leaveTo={hidden}
    >
      <div className="hidden lg:flex w-full max-w-screen-lg mx-auto h-[5.9375rem] px-[10.4375rem] items-center justify-between">
        <Space building={building} workspaceType={workspaceType} space={space} />
        <div className="flex gap-7.5">
          {date && <Date range={range} date={date} time={time} />}
          <Pricing rate={rate} discountedPrice={discountedPrice} price={price} />
          <AtButton
            type={AtButtonTypes.PRIMARY}
            size={AtButtonDimensions.LARGE}
            onClick={() => onAction?.()}
            className="w-[15.875rem]"
            title={!date ? 'Check availability' : !range && !time ? 'Select a time' : 'Book now'}
          />
        </div>
      </div>
    </Transition>
  )
}
