import { AtHoverTooltip } from './index'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Atoms/Hover Tooltip',
  component: AtHoverTooltip,
} as ComponentMeta<typeof AtHoverTooltip>

const Template: ComponentStory<typeof AtHoverTooltip> = (args) => (
  <AtHoverTooltip {...args}>
    <div className="w-80 h-80 border-1 flex justify-center items-center">Content</div>
  </AtHoverTooltip>
)

export const Preview = Template.bind({})
Preview.args = {
  content: 'Hover Tooltip Information',
}
