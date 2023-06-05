import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AtAnchorLinks } from './index'

export default {
  title: 'Atoms/Anchor Links',
  component: AtAnchorLinks,
} as ComponentMeta<typeof AtAnchorLinks>

const Template: ComponentStory<typeof AtAnchorLinks> = (args) => <AtAnchorLinks {...args} />

export const Preview = Template.bind({})
Preview.args = {
  links: [
    {
      label: 'Link 1',
      href: '#section-1',
    },
    {
      label: 'Link 2',
      href: '#section-2',
    },
    {
      label: 'Link 3',
      href: '#section-3',
    },
    {
      label: 'Link 4',
      href: '#section-4',
    },
    {
      label: 'Link 5',
      href: '#section-5',
    },
    {
      label: 'Link 6',
      href: '#section-6',
    },
    {
      label: 'Link 7',
      href: '#section-7',
    },
  ],
}
