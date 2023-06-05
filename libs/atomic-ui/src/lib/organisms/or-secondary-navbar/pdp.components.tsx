import { formatValue } from '../../atoms/at-date-picker/overrides'
import { OrSecondaryNavbarPdpProps } from './pdp'
import { AtEyebrowLink } from '../../atoms'

export const Pricing = ({
  rate,
  price,
  discountedPrice,
}: Pick<OrSecondaryNavbarPdpProps, 'rate' | 'price' | 'discountedPrice'>) =>
  price ? (
    <div className="h-full py-1 font-bold leading-1.5 text-neutrals-800 w-[11.4375rem]">
      <p>Total before taxes</p>
      <p>
        {discountedPrice ? (
          <>
            <span className="line-through font-regular">{price}</span>
            <span> {discountedPrice}</span>
          </>
        ) : (
          `${price}`
        )}
      </p>
    </div>
  ) : (
    <p className="my-auto font-bold leading-1.5 text-neutrals-800 w-[11.4375rem]">{rate}</p>
  )

export const Date = ({ date, range, time }: Pick<OrSecondaryNavbarPdpProps, 'date' | 'range' | 'time'>) => (
  <div className="h-full py-1 leading-1.5 text-neutrals-800 w-[11.4375rem]">
    <p>{formatValue(range ? 'range' : 'single', date)}</p>
    {!range && <p>{time ? time : 'Select a time slot'}</p>}
  </div>
)

export const Space = ({
  building,
  space,
  workspaceType,
}: Pick<OrSecondaryNavbarPdpProps, 'building' | 'workspaceType' | 'space'>) => (
  <div>
    <div className="flex items-center gap-4 text-12 leading-1.5 py-2">
      <AtEyebrowLink {...building} />
      <span className="text-neutrals-600">•</span>
      <AtEyebrowLink {...workspaceType} />
    </div>
    <p className="font-heading font-medium text-24 leading-1.3">{space}</p>
  </div>
)
