import { ComponentMeta, ComponentStory } from '@storybook/react'
import { OrBookingPanel } from './index'
import { deskForm, inquireForm, officeForm } from './configurations'
import { useState } from 'react'
import { useFormState } from './components'
import { defaultDeskState, defaultInquireState, defaultOfficeState } from './default-states'
import { MeetingMock } from './meeting-mock-sb'

export default {
  title: 'Organisms/Booking Panel',
  component: OrBookingPanel,
  parameters: {
    layout: 'fullscreen',
    controls: { disabled: true },
  },
} as ComponentMeta<typeof OrBookingPanel>

const Template: ComponentStory<typeof OrBookingPanel> = (args) => {
  const [state, dispatch] = useFormState(args.state)
  const [notification, setNotification] = useState(false)

  return (
    <div className="lg:p-4">
      <OrBookingPanel
        {...args}
        state={state}
        onChange={(update) => dispatch(update)}
        onSubmit={(valid) => {
          console.log(`is form ready to be submitted: ${valid}`, state)
          if (valid && /inquiry/i.test(args.primaryLabel)) setNotification(true)
        }}
        notification={{
          visible: notification,
          dismiss: () => setNotification(false),
          type: 'positive',
          message:
            'Your inquiry has been received and a team member will be in contact within 5 business days. We appreciate your interest in our spaces and look forward to helping you.',
        }}
      />
    </div>
  )
}

export const Inquire = Template.bind({})
Inquire.args = {
  state: defaultInquireState,
  ...inquireForm(),
}

export const Desk = Template.bind({})
Desk.args = {
  state: defaultDeskState,
  ...deskForm({
    availableDesks: 25,
    total: { label: 'Total before taxes', fee: '$50.00' },
    reservation: { label: '$50 x 1 day x 1 desk', fee: '$50.00' },
    rate: '$99/day',
    capacity: '208',
    discounts: ['20% off for 5 days', '40% off for 25 days'],
  }),
}

export const Office = Template.bind({})
Office.args = {
  state: defaultOfficeState,
  ...officeForm({
    total: { label: 'Total before taxes', fee: '$99.00' },
    reservation: { label: '$99 x 1 day', fee: '$99.00' },
    rate: '$99/day',
    capacity: '208',
    discounts: ['20% off for 5+ days', '25% off for 20+ days'],
  }),
}

/** This one is separate from the stories file because of a bug in Storybook, which [this issue](https://github.com/storybookjs/storybook/issues/17025) kind of explains. Trying to fix this (a comment mentioned that it was fixed in a beta release) would mean upgrading the entire Nx repo, and update Storybook (via Nx) */
export const MeetingStudio: ComponentStory<typeof MeetingMock> = (args) => <MeetingMock {...args} />

export const MeetingGather = MeetingStudio.bind({})
MeetingGather.args = {
  gather: true,
}
