import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AtToggle } from './index'
import { useState } from 'react'

export default {
  title: 'Atoms/Toggle',
  component: AtToggle,
} as ComponentMeta<typeof AtToggle>

const Template: ComponentStory<typeof AtToggle> = (args) => {
  const [checked, setChecked] = useState(false)

  return <AtToggle {...args} checked={checked} onChange={(value) => setChecked(value)} />
}

export const Preview = Template.bind({})
Preview.args = {
  label: 'Toggle with one line',
  description: 'Description',
}

export const WithHint = Template.bind({})
WithHint.args = {
  ...Preview.args,
  hint: {
    content: 'Content',
  },
}
