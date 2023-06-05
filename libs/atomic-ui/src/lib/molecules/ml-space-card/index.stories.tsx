import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MlSpaceCard } from './index'
import { MlSpaceCardSkeleton } from './skeleton'

export default {
  title: 'Molecules/Space Card',
  component: MlSpaceCard,
} as ComponentMeta<typeof MlSpaceCard>

const Template: ComponentStory<typeof MlSpaceCard> = (args) => <MlSpaceCard {...args} />

export const Small = Template.bind({})
Small.args = {
  title: 'Room Name',
  href: '#',
  space: 'Space Type',
  building: 'Building Name',
  details: [
    { icon: '/group.svg', label: '6 people' },
    { icon: '/presentation.svg', label: 'Room information' },
  ],
  images: Array.from({ length: 8 }, (_, i) => ({
    src: '/16b9.png',
    alt: `Alternative text ${i}`,
    caption: `Room ${i}`,
  })),
}

export const SingleImage = Template.bind({})
SingleImage.args = {
  ...Small.args,
  images: [
    {
      src: '/16b9.png',
      alt: 'Alternative text',
      caption: 'Room',
    },
  ],
}

export const WithTag = Template.bind({})
WithTag.args = {
  ...Small.args,
  tag: {
    icon: true,
    label: 'On-Demand',
  },
}

export const Medium = Template.bind({})
Medium.args = {
  ...Small.args,
  size: 'medium',
}

export const Skeleton: ComponentStory<typeof MlSpaceCardSkeleton> = (args) => <MlSpaceCardSkeleton {...args} />
