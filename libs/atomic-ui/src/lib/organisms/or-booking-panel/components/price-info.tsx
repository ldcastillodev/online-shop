import { FeeProps } from '../../or-checkout-summary/components'

export type PriceValue = Pick<FeeProps, 'fee' | 'discountedFee' | 'label'>

const Price = ({
  discountedFee,
  fee,
  label,
  className = '',
}: PriceValue & {
  className?: string
}) => (
  <div className={`flex justify-between ${className}`}>
    <p>{label}</p>
    <p>
      {discountedFee && <span>{fee}</span>}
      <span>{discountedFee ?? fee}</span>
    </p>
  </div>
)

export const PriceInfo = ({
  reservation,
  total,
  priceLabel = 'Price',
}: Record<'reservation' | 'total', PriceValue> & { priceLabel?: string }) => (
  <div className="flex flex-col gap-2 text-14 leading-1.5 text-neutrals-800">
    <p className="font-bold">{priceLabel}</p>
    <Price label={reservation.label} fee={reservation.fee} discountedFee={reservation.discountedFee} />
    <Price label={total.label} fee={total.fee} discountedFee={total.discountedFee} className="font-bold" />
  </div>
)
