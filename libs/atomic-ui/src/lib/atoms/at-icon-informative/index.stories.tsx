import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AtIconInformative } from '.'

export default {
  title: 'Atoms/Icon Informative',
  component: AtIconInformative,
} as ComponentMeta<typeof AtIconInformative>

const Template: ComponentStory<typeof AtIconInformative> = (args) => <AtIconInformative {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Title',
  label: 'Lorem ipsum dolor sit amet ',
  icon: '/view-grid.svg',
}

export const DefaultWithoutTitle = Template.bind({})
DefaultWithoutTitle.args = {
  label: 'Lorem ipsum dolor sit amet ',
  icon: '/view-grid.svg',
}
