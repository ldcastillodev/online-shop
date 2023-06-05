import { ComponentMeta, ComponentStory } from '@storybook/react'
import { OrCheckoutSummary } from './index'

export default {
  title: 'Organisms/Checkout Summary',
  component: OrCheckoutSummary,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof OrCheckoutSummary>

const Template: ComponentStory<typeof OrCheckoutSummary> = (args) => <OrCheckoutSummary {...args} />

export const Preview = Template.bind({})
Preview.args = {
  room: {
    name: 'The Willow Meeting Room',
    space: 'The Spiral',
    image: {
      alt: 'The Willow Meeting Room',
      src: '/not-found-banner.png',
    },
  },
  subTotal: '$198.00',
  taxes: '$7.80',
  taxPercentage: '8.875%',
  total: '$228.57',
  reservation: {
    additionalServices: 'I would be interested in knowing more about your catering options. Also need drinks.',
    date: new Date(),
    time: '1:00 p.m. to 3:00 p.m. EST (2 hours)',
    modifyHref: '#',
  },
  fees: [{ label: 'The Willow Meeting Room', description: '$99/hour x 2 hours', fee: '$198.00' }],
}

export const Discount = Template.bind({})
Discount.args = {
  ...Preview.args,
  fees: [
    {
      label: 'The Willow Conference Room',
      description: '$99/hour x 4 hours',
      discount: 'Half-day rate: -20%',
      fee: '$396.00',
      discountedFee: '$319.80',
    },
    { label: 'Discount', discount: 'Discount code: -20%', fee: '-$39.60' },
  ],
  subTotal: '$158.40',
  taxes: '$17.04',
  taxPercentage: '8.875%',
  total: '$208.57',
}
