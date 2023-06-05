import { ComponentMeta, ComponentStory } from '@storybook/react'
import { OrSecondaryNavbarPdp } from './pdp'
import { OrBookingPanel } from '../or-booking-panel'
import { inquireForm } from '../or-booking-panel/configurations'
import { useFormState } from '../or-booking-panel/components'

export default {
  title: 'Organisms/Secondary Navbar (PDP)',
  component: OrSecondaryNavbarPdp,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof OrSecondaryNavbarPdp>

const form = inquireForm()

const Template: ComponentStory<typeof OrSecondaryNavbarPdp> = (args) => {
  const [state, dispatch] = useFormState({
    firstName: { value: '' },
    lastName: { value: '' },
    email: { value: '' },
    phone: { value: '' },
    description: { value: '' },
    marketing: { value: false },
  })

  return (
    <div className="p-4 flex flex-col gap-4">
      <OrSecondaryNavbarPdp {...args} />
      <div className="w-full h-[1200px] bg-neutrals-200 rounded-8 flex lg:max-w-screen-lg mx-auto">
        <div className="grow flex justify-center items-center">Content</div>
        <OrBookingPanel
          {...form}
          state={state}
          onChange={(update) => dispatch(update)}
          onSubmit={(valid) => console.log(`Form is valid: ${valid}`)}
        />
      </div>
      <div className="w-full h-[800px] bg-neutrals-200 rounded-8 flex justify-center items-center lg:max-w-screen-lg mx-auto">
        Content
      </div>
      <div className="w-full h-[800px] bg-neutrals-200 rounded-8 flex justify-center items-center lg:max-w-screen-lg mx-auto">
        Content
      </div>
    </div>
  )
}

export const Rate = Template.bind({})
Rate.args = {
  rate: '$99/hour',
  space: 'The Willow Conference Room',
  building: {
    title: 'The Spiral',
  },
  workspaceType: {
    title: 'Conference Room',
  },
}

export const SelectTime = Template.bind({})
SelectTime.args = {
  ...Rate.args,
  range: false,
  date: new Date(),
  price: '$297',
}

export const BookNowSingle = Template.bind({})
BookNowSingle.args = {
  ...SelectTime.args,
  time: '1:00 p.m. (3 hours)',
}

export const BookNowRange = Template.bind({})
BookNowRange.args = {
  ...SelectTime.args,
  range: true,
  date: {
    from: new Date(),
    to: new Date(),
  },
  discountedPrice: '$200',
}
