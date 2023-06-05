import { MlIconCardProps } from '../../molecules'
import { Desk } from './icons/desk'
import { ConferenceRoom } from './icons/conference-room'
import { EventSpace } from './icons/event-space'
import { Office } from './icons/office'
import { Suite } from './icons/suite'
import {
  AtPillCalendar,
  AtPillCalendarProps,
  AtPillDropdown,
  AtPillDropdownProps,
  AtToggleProps,
  capacityMap,
  timeDurationMap,
  timeslotsMap,
} from '../../atoms'
import { FilterChangeHandler, FilterState } from './filter'

export type SpaceType = 'desk' | 'meeting' | 'event' | 'office' | 'suite'

export const spaceTypes: (Pick<MlIconCardProps, 'label' | 'IconRef'> & { typeKey: SpaceType })[] = [
  { label: 'Desk', IconRef: Desk, typeKey: 'desk' },
  { label: 'Meeting Room', IconRef: ConferenceRoom, typeKey: 'meeting' },
  { label: 'Event Space', IconRef: EventSpace, typeKey: 'event' },
  { label: 'Office', IconRef: Office, typeKey: 'office' },
  { label: 'Suite', IconRef: Suite, typeKey: 'suite' },
]

export type FilterMapProps = ({ type: 'date' } & AtPillCalendarProps) | ({ type: 'dropdown' } & AtPillDropdownProps)

export const filterMap = (props: FilterMapProps, i: number) => {
  if (props.type === 'date') return <AtPillCalendar key={i} {...props} />
  return <AtPillDropdown key={i} {...props} />
}

export const filterConfiguration: (
  state?: FilterState,
  onChange?: FilterChangeHandler
) => Record<SpaceType, FilterMapProps[]> = (state, onChange) => {
  const changeFn = (field: keyof FilterState) => (value: FilterState[typeof field]) => onChange?.({ [field]: value })

  return {
    desk: [{ type: 'date', mode: 'range', label: 'Date(s)', value: state?.date, onChange: changeFn('date') }],
    meeting: [
      {
        type: 'date',
        mode: 'range',
        label: 'Date(s)',
        value: state?.date,
        onChange: changeFn('date'),
      },
      {
        type: 'dropdown',
        label: 'Duration',
        options: Array.from({ length: 16 }, timeDurationMap),
        value: state?.duration,
        onChange: changeFn('duration'),
      },
      {
        type: 'dropdown',
        label: 'Start Time',
        options: [
          ...Array.from({ length: 6 }, timeslotsMap(9)),
          ...Array.from({ length: 6 }, timeslotsMap(12, 'p.m.')),
        ],
        value: state?.startTime,
        onChange: changeFn('startTime'),
      },
      {
        type: 'dropdown',
        label: 'Capacity',
        options: Array.from({ length: 11 }, capacityMap),
        value: state?.capacity,
        onChange: changeFn('capacity'),
      },
    ],
    event: [
      {
        type: 'date',
        mode: 'range',
        label: 'Date(s)',
        value: state?.date,
        onChange: changeFn('date'),
      },
      {
        type: 'dropdown',
        label: 'Capacity',
        options: [
          { label: '60 and under', value: '>=1' },
          { label: '61-150', value: '>=61' },
          { label: '151 or more', value: '>=151' },
        ],
        value: state?.capacity,
        onChange: changeFn('capacity'),
      },
    ],
    office: [
      // { type: 'date', mode: 'range', label: 'Date(s)', value: state?.date, onChange: changeFn('date') }, // TODO: Not considered for MVP
      {
        type: 'dropdown',
        label: 'Capacity',
        options: [
          { label: '5 and under', value: '>=1' },
          { label: '6-20', value: '>=6' },
          { label: '21 or more', value: '>=21' },
        ],
        value: state?.capacity,
        onChange: changeFn('capacity'),
      },
    ],
    suite: [
      {
        type: 'dropdown',
        label: 'Capacity',
        options: [{ label: 'TODO: Pending business', value: 'TODO' }],
        value: state?.capacity,
        onChange: changeFn('capacity'),
      },
    ],
  }
}

export const instantBook: AtToggleProps = {
  label: 'Instant Book',
  hint: { content: 'Filter for spaces you can book now', placement: 'bottom' },
}

export const initialFilterState: FilterState = { type: 'meeting', loading: true }
