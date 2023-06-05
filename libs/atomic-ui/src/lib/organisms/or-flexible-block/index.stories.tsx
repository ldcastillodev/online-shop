import { ComponentMeta, ComponentStory } from '@storybook/react'
import { OrFlexibleBlock } from './index'

export default {
  title: 'Organisms/Flexible Block',
  component: OrFlexibleBlock,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof OrFlexibleBlock>

const Template: ComponentStory<typeof OrFlexibleBlock> = (args) => <OrFlexibleBlock {...args} />

export const Preview = Template.bind({})
Preview.args = {
  title: 'Section title',
  tabs: [
    {
      label: 'Map',
      content: {
        type: 'map',
        apiKey: process.env.STORYBOOK_GOOGLE_MAPS_API_KEY ?? '',
        address: 'Chrysler Building',
        details: Array.from({ length: 3 }, (_) => ({ label: 'Lorem ipsum dolor sit amet', icon: '/view-grid.svg' })),
      },
    },
    {
      label: 'Text',
      content: {
        type: 'text',
        description: 'Description',
        shortDescription: 'Short description',
        aspectRatio: '16:9',
        title: 'Title',
        images: Array.from({ length: 6 }, () => ({ src: '/16b9.png', alt: 'Alternative text' })),
        body: 'Lorem ipsum dolor sit amet consectetur. Viverra sed dictumst orci pulvinar purus mauris. Quam mauris quam magna tristique. Amet eget nulla vitae turpis euismod sollicitudin et.',
        details: Array.from({ length: 3 }, (_) => ({ label: 'Lorem ipsum dolor sit amet', icon: '/view-grid.svg' })),
      },
    },
    {
      label: 'Informative Icons',
      content: {
        type: 'text',
        description: 'Description',
        shortDescription: 'Short description',
        aspectRatio: '16:9',
        images: Array.from({ length: 6 }, () => ({ src: '/16b9.png', alt: 'Alternative text' })),
        details: Array.from({ length: 3 }, (_) => ({ label: 'Lorem ipsum dolor sit amet', icon: '/view-grid.svg' })),
      },
    },
    {
      label: 'Informative Icons with title',
      content: {
        type: 'text',
        description: 'Description',
        shortDescription: 'Short description',
        aspectRatio: '16:9',
        images: Array.from({ length: 6 }, () => ({ src: '/16b9.png', alt: 'Alternative text' })),
        details: Array.from({ length: 3 }, (_) => ({
          label: 'Lorem ipsum dolor sit amet',
          icon: '/view-grid.svg',
          title: 'Title',
        })),
      },
    },
    {
      label: 'Directions',
      content: {
        type: 'directions',
        images: Array.from({ length: 6 }, () => ({ src: '/16b9.png', alt: 'Alternative text' })),
        aspectRatio: '16:9',
        directions: Array.from({ length: 6 }, (_, i) => ({ label: `Position ${i}` })),
      },
    },
  ],
}
