import {
  AltDivider,
  Discount,
  Divider,
  Fee,
  FeeProps,
  Fees,
  Reservation,
  ReservationProps,
  Room,
  RoomProps,
} from './components'

export interface OrCheckoutSummaryProps {
  room: RoomProps
  reservation: ReservationProps
  fees: FeeProps[]
  subTotal: string
  taxes: string
  taxPercentage: string
  total: string
  discountCode?: string
}

export const OrCheckoutSummary = ({
  discountCode,
  fees,
  reservation,
  room,
  subTotal,
  taxes,
  taxPercentage,
  total,
}: OrCheckoutSummaryProps) => (
  <section className="lg:pt-12 lg:pl-10 lg:pr-[10.4375rem] lg:w-[44.0625rem]">
    <Room {...room} />
    <AltDivider />
    <div className="px-4 lg:px-0">
      <Reservation {...reservation} />
      <Divider />
      <Fees fees={fees} />
      <Divider />
      <Fee label="Subtotal" fee={subTotal} className="mb-2 lg:mb-4" />
      <Fee label="Sales Tax" fee={taxes} description={taxPercentage} className="mb-4 lg:mb-6" />
      <div className="flex justify-between font-bold text-neutrals-900 leading-1.5 lg:text-20">
        <p>Total Due</p>
        <p>{total}</p>
      </div>
      <Divider />
      <Discount discountCode={discountCode} />
    </div>
  </section>
)
