import { DateRange } from 'react-day-picker'
import { baseFieldClasses, labelClasses } from '../at-text-field/shared/classes'
import { useState } from 'react'
import { Calendar } from 'iconoir-react'
import { formatValue } from './overrides'
import { usePopper } from 'react-popper'
import { FieldHints } from '../at-text-field/shared/field-hints'
import { PortableTextProps } from '@portabletext/react'
import { CalendarDialog } from './calendar'

export interface CalendarParams {
  mode?: 'single' | 'range'
  value?: DateRange | Date
  onChange?: (date: Date | DateRange) => void
}

export interface AtDatePickerProps extends CalendarParams {
  label?: string
  name: string
  errorText?: PortableTextProps['value']
  required?: boolean
  fromDate?: Date
  toDate?: Date
  hasError?: boolean
  helperText?: PortableTextProps['value']
}

export const AtDatePicker = ({
  errorText,
  hasError,
  required,
  fromDate,
  toDate,
  helperText,
  label,
  name,
  value,
  onChange,
  mode = 'single',
}: AtDatePickerProps) => {
  const [open, setOpen] = useState(false)
  const [field, setField] = useState<HTMLDivElement | null>(null)
  const [calendar, setCalendar] = useState<HTMLDivElement | null>(null)

  const { styles, attributes } = usePopper(field, calendar, {
    placement: 'bottom-end',
  })

  return (
    <div>
      <div ref={setField}>
        <label>
          <span className={labelClasses}>{label}</span>
          <button
            type="button"
            onClick={() => setOpen(true)}
            name={name}
            className={`${baseFieldClasses(hasError)} ${
              open ? 'border-neutrals-800' : ''
            } h-14 cursor-pointer py-2 px-4 flex justify-between items-center mt-1`}
          >
            <span className={`leading-1.5 ${value ? 'text-neutrals-800' : 'text-neutrals-600'}`}>
              {formatValue(mode, value, label)}
            </span>
            <Calendar />
          </button>
        </label>
        <CalendarDialog
          ref={setCalendar}
          styles={styles}
          attributes={attributes}
          open={open}
          fromDate={fromDate}
          toDate={toDate}
          required={required}
          onClose={() => setOpen(false)}
          mode={mode}
          selected={value}
          onSelect={onChange}
        />
      </div>
      <div className="mt-1">
        <FieldHints helperText={helperText} errorText={errorText} hasError={hasError} />
      </div>
    </div>
  )
}
