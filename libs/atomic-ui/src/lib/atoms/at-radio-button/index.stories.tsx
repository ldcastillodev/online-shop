import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AtRadioButton } from './index'

export default {
  title: 'Atoms/Radio Button',
  component: AtRadioButton,
} as ComponentMeta<typeof AtRadioButton>

const Template: ComponentStory<typeof AtRadioButton> = (args) => <AtRadioButton {...args} />

export const Preview = Template.bind({})
Preview.args = {
  radioButtons: [
    {
      label: 'Check 1 this is a test to see if the text is wrapping correctly',
      description: 'this is a check 1',
    },
    {
      label: 'Check 2',
      description: 'this is a check 2',
    },
    {
      label: 'Check 3 with short text',
      description: 'this is a check 3',
    },
    {
      label: 'Check 4 with some options like readonly',
      description: 'this is a check 4',
    },
    {
      label: 'Check 5',
      description: 'this is a normal check 5',
    },
  ],
}
