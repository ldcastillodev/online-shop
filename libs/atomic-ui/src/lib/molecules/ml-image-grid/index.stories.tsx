import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MlImageGrid } from './index'

export default {
  title: 'Molecules/Image Grid',
  component: MlImageGrid,
} as ComponentMeta<typeof MlImageGrid>

const Template: ComponentStory<typeof MlImageGrid> = (args) => <MlImageGrid {...args} />

const defaultProps = {
  title: 'Title placeholder',
  images: [
    {
      src: '/bailey-zindel-NRQV-hBF10M-unsplash.jpg',
      alt: 'Alternative text 1',
      caption: 'Description 1',
    },
    {
      src: '/mohammad-alizade-62t_kKa2YlA-unsplash.jpg',
      alt: 'Alternative text 2',
      caption: 'Description 2',
    },
    {
      src: '/mohammad-alizade-CDu0x1Aiils-unsplash.jpg',
      alt: 'Alternative text 3',
      caption: 'Description 3',
    },
    {
      src: '/pine-watt-2Hzmz15wGik-unsplash.jpg',
      alt: 'Alternative text 4',
      caption: 'Description 4',
    },
  ],
  floorPlanImage: {
    src: '/avel-chuklanov-IB0VA6VdqBw-unsplash.jpg',
    alt: 'Alternative text 3',
    caption: 'Floor plan description',
  },
}

export const Small = Template.bind({})
Small.args = defaultProps

export const Large = Template.bind({})
Large.args = {
  ...defaultProps,
  large: true,
}
