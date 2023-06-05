import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AtTabs } from './index'

export default {
  title: 'Atoms/Tabs',
  component: AtTabs,
} as ComponentMeta<typeof AtTabs>

const Template: ComponentStory<typeof AtTabs> = (args) => <AtTabs {...args} />

export const Preview = Template.bind({})
Preview.args = {
  tabs: [
    { label: 'Tab 1', content: 'Content 1' },
    { label: 'Tab 2', icon: '/view-grid.svg', content: 'Content 2' },
    { label: 'Tab 3', content: 'Content 3', icon: '/presentation.svg', counter: 3, disabled: true },
    { label: 'Tab 4', counter: 4, icon: '/view-grid.svg', content: 'Content 4' },
  ],
}
