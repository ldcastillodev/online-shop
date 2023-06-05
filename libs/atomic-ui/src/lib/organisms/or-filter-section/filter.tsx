import { filterConfiguration, filterMap, instantBook, SpaceType, spaceTypes } from './configurations'
import { MlIconCard } from '../../molecules'
import { AtToggle, DropdownOption } from '../../atoms'
import { DateRange } from 'react-day-picker'

export type FilterState = {
  type?: SpaceType
  date?: DateRange | Date
  duration?: DropdownOption
  startTime?: DropdownOption
  capacity?: DropdownOption
  instantBook?: boolean
  loading?: boolean
}

export type FilterChangeHandler = (value: { [field in keyof FilterState]: FilterState[field] }) => void

export interface FilterProps {
  state?: FilterState
  onChange?: FilterChangeHandler
  spaceLabel?: string
  withButtonSpace?: boolean
}

export const Filter = ({ onChange, spaceLabel = 'Space Type', state, withButtonSpace }: FilterProps) => (
  <div className="flex flex-col gap-8">
    <div>
      <p className="px-4 lg:px-0 mb-1 text-neutrals-800 leading-1.5 font-bold">{spaceLabel}</p>
      <div className="p-1.5 px-4 lg:px-0 flex gap-8 overflow-x-auto lg:overflow-x-visible">
        {spaceTypes.map((space, i) => (
          <MlIconCard
            key={i}
            {...space}
            onClick={() => onChange?.({ type: space.typeKey })}
            selected={state?.type === space.typeKey}
          />
        ))}
      </div>
    </div>
    <div
      className={`px-4 lg:px-0 lg:pl-1 overflow-x-scroll lg:overflow-x-visible flex h-14 items-center gap-4 ${
        !withButtonSpace ? 'justify-between' : ''
      }`}
    >
      <div className="flex gap-4">{state?.type && filterConfiguration(state, onChange)[state.type].map(filterMap)}</div>
      <AtToggle {...instantBook} checked={state?.instantBook} onChange={(instantBook) => onChange?.({ instantBook })} />
      {withButtonSpace && <div aria-hidden className="hidden lg:block grow" />}
    </div>
  </div>
)
