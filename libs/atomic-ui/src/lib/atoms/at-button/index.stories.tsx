import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AtButton } from '.'
import { AtButtonTypes, AtButtonDimensions } from '../../types'

export default {
  title: 'Atoms/Button',
  component: AtButton,
} as ComponentMeta<typeof AtButton>

const Template: ComponentStory<typeof AtButton> = (args) => <AtButton {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'BUTTON LABEL',
  type: AtButtonTypes.PRIMARY,
  isDisabled: false,
  size: AtButtonDimensions.MEDIUM,
  iconLeft: '/nav-arrow-left.svg',
  iconRight: '/nav-arrow-right.svg',
}

export const Secondary = Template.bind({})
Secondary.args = {
  title: 'BUTTON LABEL',
  type: AtButtonTypes.SECONDARY,
  isDisabled: false,
  size: AtButtonDimensions.MEDIUM,
  iconLeft: '/nav-arrow-left.svg',
  iconRight: '/nav-arrow-right.svg',
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  title: 'BUTTON LABEL',
  type: AtButtonTypes.TERTIARY,
  iconLeft: '/nav-arrow-left.svg',
  iconRight: '/nav-arrow-right.svg',
  isDisabled: false,
  size: AtButtonDimensions.MEDIUM,
}

export const Grayscale = Template.bind({})
Grayscale.args = {
  title: 'Button label',
  type: AtButtonTypes.GRAYSCALE,
  iconLeft: '/nav-arrow-left.svg',
  iconRight: '/nav-arrow-right.svg',
  isDisabled: false,
  size: AtButtonDimensions.SMALL,
}

export const LabelOnly = Template.bind({})
LabelOnly.args = {
  title: 'BUTTON LABEL',
  type: AtButtonTypes.PRIMARY,
  isDisabled: false,
  size: AtButtonDimensions.MEDIUM,
}
