import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AtLink, AtLinkType, AtLinkTarget } from '.'

export default {
  title: 'Atoms/Link',
  component: AtLink,
} as ComponentMeta<typeof AtLink>

const Template: ComponentStory<typeof AtLink> = (args) => <AtLink {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Link text',
  type: AtLinkType.DEFAULT,
  actionTarget: '#',
  isDisabled: false,
  target: AtLinkTarget.SELF,
}

export const withIcon = Template.bind({})
withIcon.args = {
  ...Default.args,
  iconLeft: '/nav-arrow-left.svg',
  iconRight: '/nav-arrow-right.svg',
  type: AtLinkType.INLINE,
}
export const Secondary = Template.bind({})
Secondary.args = {
  ...Default.args,
  iconLeft: '/nav-arrow-left.svg',
  iconRight: '/nav-arrow-right.svg',
  type: AtLinkType.SECONDARY,
}

export const DarkMode = Template.bind({})
DarkMode.args = {
  ...Default.args,
  darkMode: true,
}
