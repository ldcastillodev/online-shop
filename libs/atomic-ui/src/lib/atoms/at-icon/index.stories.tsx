import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AtIcon } from './index'

export default {
  title: 'Atoms/Icon',
  component: AtIcon,
} as ComponentMeta<typeof AtIcon>

const Template: ComponentStory<typeof AtIcon> = (args) => <AtIcon {...args} />

export const Preview = Template.bind({})
Preview.args = {
  src: '/view-grid.svg',
}
