import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AtNavbarLink } from './index'

export default {
  title: 'Atoms/Navbar Link',
  component: AtNavbarLink,
} as ComponentMeta<typeof AtNavbarLink>

const Template: ComponentStory<typeof AtNavbarLink> = (args) => <AtNavbarLink {...args} />

export const Preview = Template.bind({})
Preview.args = {
  label: 'Link',
  href: '#',
}
