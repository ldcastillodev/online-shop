import { validBusinessDay } from '../../atoms/at-date-picker/overrides'
import { addHours } from 'date-fns'
import { FormFieldState } from './components'

export const defaultInquireState: FormFieldState = {
  firstName: { value: '' },
  lastName: { value: '' },
  email: { value: '' },
  phone: { value: '' },
  description: { value: '' },
  marketing: { value: false },
}

export const defaultOfficeState: FormFieldState = {
  date: { value: { from: validBusinessDay(addHours(new Date(), 18)) }, pristine: true },
}

export const defaultDeskState: FormFieldState = {
  date: { value: { from: validBusinessDay(new Date()) }, pristine: true },
  desks: { value: { label: '1 desk', value: '1' } },
}

export const defaultMeetingState: FormFieldState = {
  date: { value: { from: validBusinessDay(addHours(new Date(), 18)) }, pristine: true },
  duration: { value: { label: '30 minutes', value: '0.5' } },
  needsAdditionalServices: { value: false },
  additionalServices: { value: '' },
  startTime: { loading: true },
}
