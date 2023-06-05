import { ComponentMeta, ComponentStory } from '@storybook/react'
import { OrContentBlockE } from './content-block-e'

export default {
  title: 'Organisms/Content Block E',
  component: OrContentBlockE,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof OrContentBlockE>

const Template: ComponentStory<typeof OrContentBlockE> = (args) => (
  <div className="py-12 lg:py-24">
    <OrContentBlockE {...args} />
  </div>
)

export const Preview = Template.bind({})
Preview.args = {
  title: 'House Rules',
  subTitle: 'Please follow these guidelines when using our spaces:',
  informative: [
    {
      label:
        'Please come no earlier than 15 minutes before the booking time. Guest may wait in the lounge area before the time of booking. Please ensure all belongings are collected and the room is tidied before leaving, and ensure all cables are put back in their original positions. Please be mindful of the next group who will use the room.',
      icon: '/conference-room.svg',
      title: 'Meeting',
    },
    {
      label:
        'A hot desk booking guarantees a spot for you in our coworking single desk area. Please be advised that desks are first come first serve -- that is, a specific desk is not reserved for you at the time of booking. Please be mindful of taking up more than 1 desk with your personal belongings. There are lockers available for use. Please contact the front desk for information on how to access the lockers. Please respect the space and those around you by keeping noise levels to a minimum.',
      icon: '/desk.svg',
      title: 'Desks',
    },
    {
      label:
        'Please come no earlier than 15 minutes before the booking time. Guest may wait in the lounge area before the time of booking. Please contact [email here] to arrange any additional room set-up time.',
      icon: '/event-space.svg',
      title: 'Event Space',
    },
  ],
  image: [
    {
      src: '/1b1.png',
      alt: 'Alternative text',
    },
  ],
}
