import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MlDirections } from './index'

export default {
  title: 'Molecules/Directions',
  component: MlDirections,
} as ComponentMeta<typeof MlDirections>

const Template: ComponentStory<typeof MlDirections> = (args) => <MlDirections {...args} />

export const Preview = Template.bind({})
Preview.args = {
  directions: [
    {
      label: 'Direction Description 1',
    },
    {
      label: 'Direction Description 2',
    },
    {
      label: 'Direction Description 3',
    },
    {
      label: 'Direction Description 4',
    },
    {
      label: 'Direction Description 5',
    },
    {
      label: 'Direction Description 6',
    },
  ],
}
