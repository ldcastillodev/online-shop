import { ComponentMeta, ComponentStory } from '@storybook/react'
import { OrBottomSheet } from './index'
import { useState } from 'react'

export default {
  title: 'Organisms/Bottom Sheet',
  component: OrBottomSheet,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof OrBottomSheet>

const Template: ComponentStory<typeof OrBottomSheet> = (args) => {
  const [selected, setSelected] = useState(args.options?.[2])

  return (
    <div className="p-4">
      <p className="mb-4">Mobile only</p>
      <OrBottomSheet selected={selected} onSelect={(option) => setSelected(option)} options={args.options} />
    </div>
  )
}

export const Preview = Template.bind({})
Preview.args = {
  options: [
    { label: 'Price', description: '(lowest to highest)', value: 'price' },
    { label: 'Price', description: '(highest to lowest)', value: 'price-desc' },
    { label: 'Capacity', description: '(smallest to largest)', value: 'capacity-asc' },
    { label: 'Capacity', description: '(largest to smallest)', value: 'capacity-desc' },
  ],
}
