import { ComponentMeta, ComponentStory } from '@storybook/react'
import { OrContentBlockH } from './content-block-h'

export default {
  title: 'Organisms/Content Block H',
  component: OrContentBlockH,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof OrContentBlockH>

const Template: ComponentStory<typeof OrContentBlockH> = (args) => (
  <div className="px-4 py-12 lg:py-24 lg:px-40">
    <OrContentBlockH {...args} />
  </div>
)

export const Preview = Template.bind({})
Preview.args = {
  title: 'Workspace Options',
  text: 'From open coworking spaces to private offices, Studio by Tishman Speyer provides flexible workspace solutions that adapt to your business needs.',
  content: [
    {
      images: [
        { src: '/illust-2.svg', alt: 'Illustration 2' },
        { src: '/illust-1.svg', alt: 'Illustration 1' },
        { src: '/illust-3.svg', alt: 'Illustration 3' },
        { src: '/illust-1.svg', alt: 'Illustration 1' },
      ],
      title: 'Room Name 1',
      description:
        'Lorem ipsum dolor sit amet consectetur. Justo vitae pharetra in volutpat nunc. Eget urna cras ultrices at nec. Praesent facilisis.',
      price: '$100-200 per hour.',
      floor: 'Floors 23, 24, and 66.',
    },
    {
      images: [
        { src: '/illust-2.svg', alt: 'Illustration 2' },
        { src: '/illust-1.svg', alt: 'Illustration 1' },
        { src: '/illust-3.svg', alt: 'Illustration 3' },
        { src: '/illust-1.svg', alt: 'Illustration 1' },
      ],
      title: 'Room Name 2',
      description:
        'Lorem ipsum dolor sit amet consectetur. Justo vitae pharetra in volutpat nunc. Eget urna cras ultrices at nec. Praesent facilisis.',
      price: '$100-200 per hour.',
      floor: 'Floors 23, 24, and 66.',
    },
    {
      images: [
        { src: '/illust-2.svg', alt: 'Illustration 2' },
        { src: '/illust-1.svg', alt: 'Illustration 1' },
        { src: '/illust-3.svg', alt: 'Illustration 3' },
        { src: '/illust-1.svg', alt: 'Illustration 1' },
      ],
      title: 'Room Name 3',
      description:
        'Lorem ipsum dolor sit amet consectetur. Justo vitae pharetra in volutpat nunc. Eget urna cras ultrices at nec. Praesent facilisis.',
      price: '$100-200 per hour.',
      floor: 'Floors 23, 24, and 66.',
    },
    {
      images: [
        { src: '/illust-2.svg', alt: 'Illustration 2' },
        { src: '/illust-1.svg', alt: 'Illustration 1' },
        { src: '/illust-3.svg', alt: 'Illustration 3' },
        { src: '/illust-1.svg', alt: 'Illustration 1' },
      ],
      title: 'Room Name 4',
      description:
        'Lorem ipsum dolor sit amet consectetur. Justo vitae pharetra in volutpat nunc. Eget urna cras ultrices at nec. Praesent facilisis.',
      price: '$100-200 per hour.',
      floor: 'Floors 23, 24, and 66.',
    },
    {
      images: [
        { src: '/illust-2.svg', alt: 'Illustration 2' },
        { src: '/illust-1.svg', alt: 'Illustration 1' },
        { src: '/illust-3.svg', alt: 'Illustration 3' },
        { src: '/illust-1.svg', alt: 'Illustration 1' },
      ],
      title: 'Room Name 5',
      description:
        'Lorem ipsum dolor sit amet consectetur. Justo vitae pharetra in volutpat nunc. Eget urna cras ultrices at nec. Praesent facilisis.',
      price: '$100-200 per hour.',
      floor: 'Floors 23, 24, and 66.',
    },
  ],
}
