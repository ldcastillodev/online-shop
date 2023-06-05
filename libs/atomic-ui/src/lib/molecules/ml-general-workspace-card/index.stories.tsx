import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MlGeneralWorkspaceCard } from './index'

export default {
  title: 'Molecules/General Workspace Card',
  component: MlGeneralWorkspaceCard,
} as ComponentMeta<typeof MlGeneralWorkspaceCard>

const Template: ComponentStory<typeof MlGeneralWorkspaceCard> = (args) => <MlGeneralWorkspaceCard {...args} />

export const MultipleImages = Template.bind({})
MultipleImages.args = {
  href: '#',
  title: 'Workspace Room',
  images: Array.from({ length: 8 }, (_, i) => ({
    src: '/16b9.png',
    alt: `Alternative text ${i}`,
    caption: `Room ${i}`,
  })),
}

export const SingleImage = Template.bind({})
SingleImage.args = {
  href: '#',
  title: 'Workspace Room',
  images: [
    {
      src: '/16b9.png',
      alt: 'Alternative text',
      caption: 'Room',
    },
  ],
}
