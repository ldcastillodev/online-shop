import { forwardRef } from 'react'
import { DateRange, DayPicker, Matcher } from 'react-day-picker'
import { Dialog } from '@headlessui/react'
import { formatWeekdayName, isHoliday } from './overrides'
import { NavArrowLeft, NavArrowRight } from 'iconoir-react'
import './styles.css'
import { isWeekend } from 'date-fns'

interface CalendarDialogProps {
  styles: { [p: string]: React.CSSProperties }
  attributes: { [p: string]: { [p: string]: string } | undefined }
  open: boolean
  onClose: () => void
  mode: 'single' | 'range' | undefined
  selected: DateRange | Date | undefined
  /** Additional dates to disable, due to business requirements by default are blocked weekends and certain holiday days */
  disabled?: Matcher[]
  fromDate?: Date
  toDate?: Date
  required?: boolean
  onSelect: ((date: Date | DateRange) => void) | undefined
}

export const CalendarDialog = forwardRef<HTMLDivElement, CalendarDialogProps>(
  ({ attributes, mode, onClose, onSelect, open, selected, fromDate, toDate, styles, required, disabled = [] }, ref) => (
    <Dialog
      ref={ref}
      style={styles.popper}
      {...attributes.popper}
      open={open}
      onClose={onClose}
      className="w-[fit-content] bg-neutrals-white z-[2]"
    >
      <Dialog.Panel>
        <DayPicker
          initialFocus={open}
          fromDate={fromDate}
          toDate={toDate}
          mode={mode}
          disabled={[isWeekend, isHoliday, ...disabled]}
          components={{
            IconRight: NavArrowRight,
            IconLeft: NavArrowLeft,
          }}
          selected={selected}
          /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
          /* @ts-ignore */
          onSelect={onSelect}
          required={required}
          formatters={{ formatWeekdayName }}
        />
      </Dialog.Panel>
    </Dialog>
  )
)
