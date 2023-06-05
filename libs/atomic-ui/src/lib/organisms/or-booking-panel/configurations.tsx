import { OrBookingPanelProps } from './index'
import { DetailProps, FormField, TermsText, PriceInfo, PriceValue, TimeslotList } from './components'
import { simpleBlock } from '../../atoms/at-text-field/shared/mocks'
import { notNumber, phoneFormatter, timeDurationMap } from '../../atoms'
import { addBusinessDays, addHours, addMonths } from 'date-fns'
import { validBusinessDay } from '../../atoms/at-date-picker/overrides'

type BookingConfig = Omit<OrBookingPanelProps, 'onChange' | 'onSubmit' | 'state'>

export const inquireForm = (privacyLink?: string): BookingConfig => ({
  details: { rate: 'Inquire for pricing' },
  primaryLabel: 'Send inquiry',
  fieldClassName: 'gap-5 px-4 lg:px-8',
  fields: [
    {
      type: 'text',
      name: 'firstName',
      label: 'First name',
      required: true,
      placeholder: 'First Name',
      maxLength: 50,
      errorText: simpleBlock('Please provide your first name.'),
      hideLimitHint: true,
    },
    {
      type: 'text',
      name: 'lastName',
      label: 'Last name',
      required: true,
      placeholder: 'Last Name',
      maxLength: 50,
      errorText: simpleBlock('Please provide your last name.'),
      hideLimitHint: true,
    },
    {
      type: 'text',
      name: 'email',
      label: 'Email',
      required: true,
      placeholder: 'example@domain.com',
      pattern: '\\b[aA-zZ0-9._+-]+@[aA-zZ0-9.-]+\\.[aA-zZ]{2,}\\b',
      maxLength: 100,
      errorText: simpleBlock('Please provide your email.'),
      hideLimitHint: true,
    },
    {
      type: 'text',
      name: 'phone',
      label: 'Phone number',
      required: true,
      placeholder: '(000) 000-0000',
      pattern: '^\\(\\d{3}\\) \\d{3}-\\d{4,14}$|\\+\\d{7,20}',
      maxLength: 21,
      hideLimitHint: true,
      formatter: phoneFormatter,
      skipChange: notNumber,
      errorText: simpleBlock('Please provide your phone number.'),
    },
    {
      type: 'text-area',
      name: 'description',
      label: 'How can we assist you? (optional)',
      maxLength: 500,
      hideLimitHint: true,
      placeholder:
        'Please share additional details (move-in date, number of desks) or questions you may have for our team.',
      errorText: simpleBlock('Please provide additional information so we may best assist you.'),
    },
    {
      type: 'checkbox',
      name: 'marketing',
      label: 'I would like to receive email updates from Studio by Tishman Speyer',
    },
    { type: 'custom', children: <TermsText className="lg:hidden" privacyLink={privacyLink} /> },
  ],
  bottomContent: <TermsText className="hidden lg:block px-8 pt-6" privacyLink={privacyLink} />,
})

type DeskForm = (
  params: {
    availableDesks: number
    reservation: PriceValue
    total: PriceValue
    onInquire?: () => void
  } & DetailProps
) => BookingConfig

/**
 * The desk booking panel needs to have a default value of "1" while using the default date as "Today" (except if today is past 5 PM, in which case it would be "Tomorrow"). This needs to be handled separately through state management. Form allows for setting either single or range dates. Should user click "Inquire", the user is redirected to contact us page, with the state saved as metadata.
 *
 * This calendar is limited for **up to two years** in the future, with certain holidays that need to be disabled from selection.
 */
export const deskForm: DeskForm = ({
  availableDesks = 25,
  total,
  reservation,
  onInquire,
  capacity,
  rate,
  discounts,
}) => ({
  details: { capacity, rate, discounts },
  primaryLabel: 'Book now',
  secondaryLabel: 'Inquire',
  onSecondaryClick: onInquire,
  fieldClassName: 'gap-8 px-4 lg:px-8',
  fields: [
    {
      type: 'calendar',
      name: 'date',
      mode: 'range',
      label: 'Select Date(s)',
      fromDate: validBusinessDay(new Date()),
      toDate: addMonths(new Date(), 6),
      required: true,
      errorText: simpleBlock('Please select a date.'),
    },
    {
      type: 'dropdown',
      name: 'desks',
      label: 'Desks needed',
      required: true,
      errorText: simpleBlock(
        'The number of desks selected is no longer available. Please choose a different quantity.'
      ),
      helperText: simpleBlock(`Desks available: ${availableDesks}`),
      options: Array.from({ length: availableDesks }, (v, i) => ({
        label: `${i + 1} ${i === 0 ? 'desk' : 'desks'}`,
        value: `${i + 1}`,
      })),
    },
    { type: 'divider' },
    { type: 'custom', children: <PriceInfo total={total} reservation={reservation} /> },
  ],
})

type OfficeForm = (
  params: {
    onInquire?: () => void
    reservation: PriceValue
    total: PriceValue
  } & DetailProps
) => BookingConfig

export const officeForm: OfficeForm = ({ onInquire, reservation, total, rate, discounts, capacity }) => {
  const initialDate = validBusinessDay(addHours(new Date(), 18))
  return {
    details: { capacity, rate, discounts },
    primaryLabel: 'Book now',
    secondaryLabel: 'Inquire',
    onSecondaryClick: onInquire,
    fieldClassName: 'gap-8 px-4 lg:px-8',
    fields: [
      {
        type: 'calendar',
        name: 'date',
        mode: 'range',
        label: 'Select Date(s)',
        fromDate: initialDate,
        toDate: addBusinessDays(initialDate, 30),
        required: true,
        errorText: simpleBlock('Please select a date.'),
      },
      { type: 'divider' },
      { type: 'custom', children: <PriceInfo total={total} reservation={reservation} /> },
    ],
  }
}

type MeetingForm = (
  params: {
    onInquire?: () => void
    reservation: PriceValue
    multiDay?: boolean
    room?: 'studio' | 'gather'
    total: PriceValue
    times?: TimeslotList[]
  } & DetailProps
) => BookingConfig

export const meetingForm: MeetingForm = ({
  onInquire,
  reservation,
  total,
  rate,
  discounts,
  capacity,
  room = 'studio',
  multiDay,
  times,
}) => {
  const initialDate = validBusinessDay(addHours(new Date(), 18))

  const calendar: FormField = {
    type: 'calendar',
    name: 'date',
    mode: 'range',
    label: 'Select Date(s)',
    fromDate: initialDate,
    toDate: room === 'studio' ? addMonths(initialDate, 6) : addBusinessDays(initialDate, 10),
    required: true,
    errorText: simpleBlock('Please select a date.'),
  }

  const duration: FormField[] = [
    {
      type: 'dropdown',
      name: 'duration',
      required: true,
      label: 'Duration',
      options: Array.from({ length: 16 }).fill({}).map(timeDurationMap),
    },
    {
      type: 'time-select',
      name: 'startTime',
      times,
    },
  ]

  const additionalServicesField: FormField = {
    type: 'conditional-checkbox',
    name: 'needsAdditionalServices',
    label: 'Additional services',
    hint: {
      content: 'Optional services that can be added to your booking.',
      placement: 'right-start',
    },
    fields: [
      {
        type: 'custom',
        children: (
          <div className="text-neutrals-800">
            Please tell us a bit about what you’re looking for, and a Studio by Tishman Speyer team member will reach
            out to arrange details!
          </div>
        ),
      },
      {
        type: 'text-area',
        name: 'additionalServices',
        maxLength: 500,
        hideLimitHint: true,
        required: true,
        errorText: simpleBlock('Please provide details regarding additional services.'),
        label: 'Additional Services',
        placeholder: 'For example, catering or A/V equipment',
      },
    ],
  }

  const price: FormField[] = [
    { type: 'divider' },
    { type: 'custom', children: <PriceInfo total={total} reservation={reservation} /> },
  ]

  return {
    details: { capacity, rate, discounts },
    primaryLabel: 'Book now',
    secondaryLabel: 'Inquire',
    onSecondaryClick: onInquire,
    fieldClassName: 'gap-8 px-4 lg:px-8',
    fields: [
      calendar,
      ...(multiDay ? [] : duration),
      room === 'gather' ? additionalServicesField : undefined,
      ...price,
    ].filter((el) => el) as FormField[],
  }
}
