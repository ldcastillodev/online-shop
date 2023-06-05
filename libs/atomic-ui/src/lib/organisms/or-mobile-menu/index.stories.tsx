import { ComponentMeta, ComponentStory } from '@storybook/react'
import { OrMobileMenu } from './index'
import { Full as NavbarProps } from '../or-navbar/index.stories'

export default {
  title: 'Organisms/Mobile Menu',
  component: OrMobileMenu,
} as ComponentMeta<typeof OrMobileMenu>

const Template: ComponentStory<typeof OrMobileMenu> = (args) => (
  <>
    <p>Mobile only</p>
    <OrMobileMenu {...args} open={true} onClose={() => undefined} />
  </>
)

const { logo, links, buttons } = NavbarProps.args ?? {}

export const Preview = Template.bind({})
Preview.args = { logo, links, buttons }
