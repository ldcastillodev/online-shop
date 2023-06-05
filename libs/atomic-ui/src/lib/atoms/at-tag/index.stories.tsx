import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AtTag } from './index'

export default {
  title: 'Atoms/Tag',
  component: AtTag,
} as ComponentMeta<typeof AtTag>

const Template: ComponentStory<typeof AtTag> = (args) => <AtTag {...args} />

export const Preview = Template.bind({})
Preview.args = {
  label: 'Label',
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  label: 'Label',
  icon: true,
}
