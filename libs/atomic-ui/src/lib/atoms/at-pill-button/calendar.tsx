import { CalendarParams } from '../at-date-picker'
import { useState } from 'react'
import { usePopper } from 'react-popper'
import { Pill } from './pill'
import { CalendarDialog } from '../at-date-picker/calendar'
import { formatValue } from '../at-date-picker/overrides'

export type AtPillCalendarProps = CalendarParams & { label: string }

export const AtPillCalendar = ({ label, mode = 'single', onChange, value }: AtPillCalendarProps) => {
  const [open, setOpen] = useState(false)
  const [button, setButton] = useState<HTMLButtonElement | null>(null)
  const [calendar, setCalendar] = useState<HTMLDivElement | null>(null)

  const { attributes, styles } = usePopper(button, calendar, { placement: 'bottom-start' })

  return (
    <div>
      <button
        ref={setButton}
        onClick={() => setOpen(true)}
        className="group focus:outline-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-neutrals-900 outline-offset-4"
      >
        <Pill label={label} value={formatValue(mode, value)} open={open} />
      </button>
      <CalendarDialog
        ref={setCalendar}
        styles={styles}
        open={open}
        onClose={() => setOpen(false)}
        selected={value}
        onSelect={onChange}
        mode={mode}
        attributes={attributes}
      />
    </div>
  )
}
