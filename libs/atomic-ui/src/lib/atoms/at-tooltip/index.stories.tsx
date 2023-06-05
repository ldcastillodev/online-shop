import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AtTooltip } from './index'

export default {
  title: 'Atoms/Tooltip',
  component: AtTooltip,
} as ComponentMeta<typeof AtTooltip>

const Template: ComponentStory<typeof AtTooltip> = (args) => (
  <div className="fixed top-1/2 left-1/2">
    <AtTooltip {...args} />
  </div>
)

export const Preview = Template.bind({})

Preview.args = {
  content: 'Tooltip information',
}
