import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AtCheckbox } from './index'

export default {
  title: 'Atoms/Checkbox',
  component: AtCheckbox,
} as ComponentMeta<typeof AtCheckbox>

const Template: ComponentStory<typeof AtCheckbox> = (args) => <AtCheckbox {...args} />

export const Preview = Template.bind({})
Preview.args = {
  label: 'Checkbox with one line',
  description: 'Description',
}

export const WithHint = Template.bind({})
WithHint.args = {
  ...Preview.args,
  hint: {
    label: 'Help',
    content: 'Example content',
  },
}
