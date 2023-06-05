import { Image, MlDiscountField } from '../../molecules'
import { DateRange } from 'react-day-picker'
import { Community, Minus, NavArrowDown, Plus } from 'iconoir-react'
import { AtLink, AtLinkType } from '../../atoms'
import { format } from 'date-fns'
import { Disclosure } from '@headlessui/react'

export type FeeProps = {
  label: string
  description?: string
  fee: string
  discountedFee?: string
  discount?: string
}

export const Fee = ({
  description,
  discount,
  discountedFee,
  fee,
  label,
  className = '',
}: FeeProps & {
  className?: string
}) => (
  <div className={`w-full flex justify-between leading-1.5 text-14 lg:text-16 text-neutrals-700 ${className}`}>
    <div>
      <p className="font-bold text-neutrals-800">{label}</p>
      {description && <p>{description}</p>}
      {discount && <p className="text-feedback-positive-300">{discount}</p>}
    </div>
    <div className="flex gap-2">
      {discountedFee && <p className="line-through">{fee}</p>}
      <p>{discountedFee ?? fee}</p>
    </div>
  </div>
)

export type RoomProps = {
  image: Image
  space: string
  name: string
}

export const Room = ({ image: { alt, src }, name, space }: RoomProps) => (
  <div className="flex gap-6 items-center px-4 pt-6 lg:px-0 lg:pt-0">
    <img src={src} alt={alt} width={110} height={83} className="object-cover rounded-4" />
    <div>
      <p className="uppercase text-12 leading-1.5 font-bold text-neutrals-700 mb-1">{space}</p>
      <h2 className="font-heading text-20 lg:text-24 leading-1.3 font-medium w-[10.6875rem] lg:w-[13.6875rem]">
        {name}
      </h2>
    </div>
  </div>
)

export const Divider = () => <div className="bg-neutrals-400 h-[1px] w-full my-4 lg:my-6" />

export const AltDivider = () => <div className="bg-neutrals-400 h-1 lg:h-[1px] w-full my-4 lg:my-6" />

const GuestBanner = () => (
  <div className="mt-6 border-1 border-neutrals-300 p-2 py-4 lg:py-2 pr-[2.625rem] lg:pr-2 rounded-4 flex gap-2 lg:gap-1 items-center text-neutrals-800 leading-1.5 text-14 lg:text-16">
    <Community className="p-2 w-10 h-10" />
    Guest information will be collected after payment.
  </div>
)

export type ReservationProps = {
  additionalServices?: string
  date: Date | DateRange
  modifyHref?: string
  time?: string
}

const formatDateDetails = (date: Date | DateRange) => {
  const f = (date: Date) => format(date, 'MMM d, y')

  if ('from' in date) {
    const { from, to } = date as DateRange

    if (!from || !to) return ''

    return `${f(from)} to ${f(to)}`
  }

  return f(date as Date)
}

export const sectionHeading = `py-2 lg:pt-0 lg:pb-2.5 text-neutrals-800 lg:text-20 leading-1.5 font-bold lg:mb-2`

export const subsectionHeading = 'text-neutrals-800 font-bold leading-1.5 text-14 lg:text-16'

export const subsectionText = 'text-neutrals-700 text-14 lg:text-16 leading-1.5'

const AdditionalInfo = ({ additionalServices = '' }) => (
  <>
    {additionalServices && (
      <div>
        <h4 className={subsectionHeading}>Additional Services</h4>
        <p className={subsectionText}>{additionalServices}</p>
      </div>
    )}
    <GuestBanner />
  </>
)

export const Reservation = ({ additionalServices, date, modifyHref, time }: ReservationProps) => (
  <div>
    <div className="flex justify-between">
      <h3 className="text-neutrals-800 lg:text-20 leading-1.5 font-bold lg:mb-2 py-2 lg:pt-[0.1875rem] lg:pb-[0.4375rem]">
        Reservation details
      </h3>
      <AtLink type={AtLinkType.DEFAULT} actionTarget={modifyHref} title="Edit" />
    </div>
    <div className="mb-2">
      <h4 className={subsectionHeading}>Date{time ? ' and time' : ''}</h4>
      <p className={subsectionText}>{formatDateDetails(date)}</p>
      {time && <p className={subsectionText}>{time}</p>}
    </div>
    <div className="hidden lg:block">
      <AdditionalInfo additionalServices={additionalServices} />
    </div>
    <Disclosure as="div" className="lg:hidden">
      <Disclosure.Panel className="mb-2">
        <AdditionalInfo additionalServices={additionalServices} />
      </Disclosure.Panel>
      <Disclosure.Button>
        {({ open }) => (
          <div className="flex items-center">
            See {open ? 'less' : 'more'}
            <NavArrowDown className={`w-10 h-10 p-2 ${open ? 'rotate-180' : ''}`} />
          </div>
        )}
      </Disclosure.Button>
    </Disclosure>
  </div>
)

export const Fees = ({ fees }: { fees: FeeProps[] }) => (
  <div>
    <h3 className={sectionHeading}>Fee Details</h3>
    <div className="flex flex-col gap-2 lg:gap-4">
      {fees.map((fee, i) => (
        <Fee key={i} {...fee} />
      ))}
    </div>
  </div>
)

export const Discount = ({ discountCode }: { discountCode?: string }) => (
  <Disclosure>
    <Disclosure.Button className="w-full flex justify-between items-center text-neutrals-800 font-bold lg:text-20 leading-1.5">
      {({ open }) => (
        <>
          Discount Code
          {open ? <Minus className="w-10 h-10 p-2" /> : <Plus className="w-10 h-10 p-2" />}
        </>
      )}
    </Disclosure.Button>
    <Disclosure.Panel className="pt-4 lg:pt-6">
      <MlDiscountField
        name="discount"
        title="Apply code"
        placeholder="Enter discount code"
        couponValue={discountCode}
      />
    </Disclosure.Panel>
  </Disclosure>
)
