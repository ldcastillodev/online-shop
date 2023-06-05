import { DateFormatter, DateRange } from 'react-day-picker'
import { addBusinessDays, format, isWeekend, startOfDay } from 'date-fns'

export const formatWeekdayName: DateFormatter = (date, options) => format(date, 'ccc', options).toUpperCase()

const dateValue = (date: Date) => `${format(date, 'MMM')} ${date.getDate()}`

const rangeValue = ({ from, to }: DateRange) => {
  if (from && !to) return dateValue(from)
  if (from && to) return `${dateValue(from)} - ${dateValue(to)}`
}

export const formatValue = (mode: 'single' | 'range', value?: DateRange | Date, label?: string) => {
  if (!value) return label

  if (mode === 'single') return dateValue(value as Date)

  return rangeValue(value as DateRange)
}

type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
type Year = 2023 | 2024
type Holiday = Record<Year, Record<Month, number[]>>

const holidays: Holiday = {
  2023: {
    1: [2, 16],
    2: [20],
    3: [],
    4: [7],
    5: [26, 29],
    6: [19],
    7: [3, 4],
    8: [],
    9: [4],
    10: [9],
    11: [22, 23, 24],
    12: [22, 25, 29],
  },
  2024: {
    1: [1, 15],
    2: [19],
    3: [29],
    4: [],
    5: [24, 27],
    6: [19],
    7: [4],
    8: [30],
    9: [1],
    10: [14],
    11: [20, 21, 22],
    12: [24, 25, 31],
  },
}

export const isHoliday = (date: Date): boolean => {
  const year = date.getFullYear() as keyof Holiday
  const month = (date.getMonth() + 1) as Month
  const day = date.getDate()

  try {
    return holidays[year][month].includes(day)
  } catch {
    console.error(
      'Failure checking holidays, this may happen because the year that is being checked does not have a defined list'
    )
    return false
  }
}

export const pastWorkingHours = (date: Date): boolean => date.getHours() >= 16

/**
 * Return the next valid business day (not holiday, weekend, or past 5 PM)
 * @param date The date to start checking from, should be the current time
 */
export const validBusinessDay = (date: Date): Date => {
  if (pastWorkingHours(date)) return validBusinessDay(addBusinessDays(startOfDay(date), 1))
  if (!isWeekend(date) && !isHoliday(date)) return date

  return validBusinessDay(addBusinessDays(date, 1))
}
