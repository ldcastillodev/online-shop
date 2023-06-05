import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MlIllustratedCard } from './index'

export default {
  title: 'Molecules/Illustrated Card',
  component: MlIllustratedCard,
} as ComponentMeta<typeof MlIllustratedCard>

const Template: ComponentStory<typeof MlIllustratedCard> = (args) => <MlIllustratedCard {...args} />

export const Preview = Template.bind({})
Preview.args = {
  images: [
    { src: '/illust-1.svg', alt: 'Illustration 1' },
    { src: '/illust-2.svg', alt: 'Illustration 2' },
    { src: '/illust-3.svg', alt: 'Illustration 3' },
    { src: '/illust-1.svg', alt: 'Illustration 1' },
  ],
  title: 'Room Name',
  description:
    'Lorem ipsum dolor sit amet consectetur. Justo vitae pharetra in volutpat nunc. Eget urna cras ultrices at nec. Praesent facilisis.',
  price: '$100-200 per hour.',
  floor: 'Floors 23, 24, and 66.',
}
