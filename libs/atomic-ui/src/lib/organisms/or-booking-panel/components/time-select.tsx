import { AtChip, AtLink, AtTabs } from '../../../atoms'
import { NavArrowRight } from 'iconoir-react'
import { labelClasses } from '../../../atoms/at-text-field/shared/classes'

export type Timeslot = Record<'label' | 'timeslot', string>

export type TimeslotList = {
  label: string
  timeslots: string[]
}

export interface TimeSelectProps {
  label?: string
  loading?: boolean
  error?: boolean
  loadingLabel?: string
  unselectedSlotError?: string
  unavailableSlotError?: string
  noSlotAvailableError?: string
  noSlotAvailableActionLabel?: string
  noSlotAvailableHref?: string
  times?: TimeslotList[]
  value?: Timeslot
  onChange?: (slot: Timeslot) => void
}

export const TimeSelect = ({
  error = false,
  label = 'Available Start Times',
  loading = false,
  loadingLabel = 'Loading available start times.',
  noSlotAvailableActionLabel = 'Check availability for other rooms',
  noSlotAvailableHref = '#',
  noSlotAvailableError = 'There are no available timeslots on this day.',
  onChange,
  times,
  unavailableSlotError = 'This time slot is no longer available. Please select a different time.',
  unselectedSlotError = 'Please select a time slot.',
  value,
}: TimeSelectProps) => {
  const menu = () => {
    if (loading) {
      return (
        <div className="mt-4 flex flex-wrap gap-2" aria-label={loadingLabel}>
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} className="h-9 w-24 rounded-4 bg-gradient-to-l from-neutrals-white to-[#F0F2F5]" />
          ))}
        </div>
      )
    }

    if (times) {
      return (
        <>
          <AtTabs
            tabListClassName="justify-evenly"
            tabButtonClassName="flex-grow"
            tabs={times.map(({ label, timeslots }) => ({
              label,
              content: (
                <div className="mt-5 flex flex-wrap gap-2">
                  {timeslots.map((timeslot, i) => (
                    <AtChip
                      key={i}
                      label={timeslot}
                      error={(!value && error) || (value?.timeslot === timeslot && error)}
                      selected={value?.timeslot === timeslot}
                      onClick={() => onChange?.({ label, timeslot })}
                    />
                  ))}
                </div>
              ),
            }))}
          />
          {error && (
            <p className="mt-1 pl-4 text-12 leading-1.5 text-feedback-negative-300">
              {value ? unavailableSlotError : unselectedSlotError}
            </p>
          )}
        </>
      )
    }

    return (
      <>
        <p className="mt-4 leading-1.5 text-feedback-negative-300">{noSlotAvailableError}</p>
        <AtLink title={noSlotAvailableActionLabel} actionTarget={noSlotAvailableHref} IconRightRef={NavArrowRight} />
      </>
    )
  }

  return (
    <div className="pb-2">
      <p className={labelClasses}>{label}</p>
      {menu()}
    </div>
  )
}
