import { Group } from 'iconoir-react'

export interface DetailProps {
  capacityLabel?: string
  capacity?: string
  rate: string
  discounts?: string[]
}

export const Detail = ({ capacity, capacityLabel = 'Capacity', discounts, rate }: DetailProps) => (
  <div className="flex justify-between pb-6 pl-4 pr-2.5 lg:pt-8 lg:pl-8 lg:pr-8 border-b-1 border-neutrals-300">
    <div className="min-h-[2.5rem] flex flex-col justify-center">
      <p className="font-heading font-medium text-20 lg:text-24 leading-1.3 text-neutrals-900 [&:not(:only-child)]:mb-2">
        {rate}
      </p>
      {discounts?.map((discount, i) => (
        <p key={i} className="font-medium lg:font-regular text-12 lg:text-14 leading-1.5 text-neutrals-700">
          {discount}
        </p>
      ))}
    </div>
    {capacity && (
      <div className="h-fit flex items-center font-bold text-neutrals-700 text-14 leading-1.5">
        <Group className="w-10 h-10 p-2" />
        {capacityLabel}: {capacity}
      </div>
    )}
  </div>
)
