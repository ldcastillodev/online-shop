import { ComponentMeta, ComponentStory } from '@storybook/react'
import { OrNavbar } from './index'
import { AtButtonDimensions, AtButtonTypes } from '../../types'

export default {
  title: 'Organisms/Navbar',
  component: OrNavbar,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof OrNavbar>

const Template: ComponentStory<typeof OrNavbar> = (args) => <OrNavbar {...args} />

export const Simple = Template.bind({})
Simple.args = {
  logo: {
    src: 'logo.svg',
    alt: 'Studio by Tishman Speyer',
  },
}

export const Checkout = Template.bind({})
Checkout.args = {
  ...Simple.args,
  checkoutHref: '#',
}

export const Full = Template.bind({})
Full.args = {
  ...Simple.args,
  links: [
    { href: '#visitor-guide', label: "Visitor's Guide" },
    { href: '#locations', label: 'NYC Studio Locations' },
  ],
  buttons: [
    { title: 'Book a space', type: AtButtonTypes.SECONDARY, size: AtButtonDimensions.LARGE },
    { title: 'Contact us', type: AtButtonTypes.PRIMARY, size: AtButtonDimensions.LARGE },
  ],
}
