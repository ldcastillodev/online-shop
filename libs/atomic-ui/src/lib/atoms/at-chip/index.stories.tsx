import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AtChip } from './index'

export default {
  title: 'Atoms/Chip',
  component: AtChip,
} as ComponentMeta<typeof AtChip>

const Template: ComponentStory<typeof AtChip> = (args) => <AtChip {...args} />

export const Preview = Template.bind({})
Preview.args = {
  label: 'Label',
}
