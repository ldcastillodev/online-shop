import { TimeslotList, useFormState } from './components'
import { defaultMeetingState } from './default-states'
import { OrBookingPanel } from './index'
import { meetingForm } from './configurations'
import { useEffect, useState } from 'react'
import { DateRange } from 'react-day-picker'

export const MeetingMock = ({ gather = false }) => {
  const [state, dispatch] = useFormState(defaultMeetingState)
  const [times, setTimes] = useState<TimeslotList[] | undefined>()
  const [multiDay, setMultiDay] = useState(false)

  useEffect(() => {
    const id = setTimeout(() => {
      const generateTimeslots = (hour = 9, amount = 6, modifier = 'a.m.') =>
        Array.from({ length: amount }, (_, i) => {
          const add30Minutes = i % 2 !== 0
          const hoursToAdd = Math.floor(i / 2)

          return `${hour + hoursToAdd}:${add30Minutes ? '30' : '00'} ${modifier}`
        })

      const morning = generateTimeslots()
      const afternoon = generateTimeslots(12, 6, 'p.m.')

      setTimes([
        { label: 'For You', timeslots: morning },
        { label: 'Morning', timeslots: morning },
        { label: 'Afternoon', timeslots: afternoon },
      ])
      dispatch({ startTime: { ...state.startTime, loading: false } })
    }, 2000)

    return () => clearTimeout(id)
  }, [])

  return (
    <div className="lg:p-4">
      <OrBookingPanel
        {...meetingForm({
          total: { label: 'Total before taxes', fee: '$99.00' },
          reservation: { label: '$99 x 1 day', fee: '$99.00' },
          rate: '$99/day',
          capacity: '208',
          discounts: ['20% off for 5+ days', '25% off for 20+ days'],
          room: gather ? 'gather' : 'studio',
          multiDay,
          times,
        })}
        state={state}
        onChange={(update) => {
          if ('date' in update) {
            const value = update.date.value as DateRange | undefined
            setMultiDay(!!value?.to)
          }
          dispatch(update)
        }}
        onSubmit={(valid) => console.log(`is form ready to be submitted: ${valid}`, state)}
      />
    </div>
  )
}
