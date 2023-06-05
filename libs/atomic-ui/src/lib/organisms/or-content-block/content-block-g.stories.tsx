import { ComponentMeta, ComponentStory } from '@storybook/react'
import { OrContentBlockG } from './content-block-g'

export default {
  title: 'Organisms/Content Block G',
  component: OrContentBlockG,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof OrContentBlockG>

const Template: ComponentStory<typeof OrContentBlockG> = (args) => (
  <div className="py-12 px-5 lg:py-24 lg:px-40">
    <OrContentBlockG {...args} />
  </div>
)

export const Preview = Template.bind({})
Preview.args = {
  title: 'Amenities and Services',
  subTitle: 'All guests have access to the following amenities as part of their visit to Studio:',
  informative: [
    {
      label:
        'Our shared kitchen comes with a microwave, cutlery, water, and glassware. All guests are expected to help maintain a clean environment and ensure all used glassware, cutlery, and dishes are placed in the dishwasher after use.',
      icon: '/presentation.svg',
      title: 'Shared Kitchen',
    },
    {
      label:
        'Our shared kitchen comes with a microwave, cutlery, water, and glassware. All guests are expected to help maintain a clean environment and ensure all used glassware, cutlery, and dishes are placed in the dishwasher after use.',
      icon: '/presentation.svg',
      title: 'Amenity Here',
    },
    {
      label:
        'Our shared kitchen comes with a microwave, cutlery, water, and glassware. All guests are expected to help maintain a clean environment and ensure all used glassware, cutlery, and dishes are placed in the dishwasher after use.',
      icon: '/presentation.svg',
      title: 'Amenity Here',
    },
    {
      label:
        'Our shared kitchen comes with a microwave, cutlery, water, and glassware. All guests are expected to help maintain a clean environment and ensure all used glassware, cutlery, and dishes are placed in the dishwasher after use.',
      icon: '/presentation.svg',
      title: 'Amenity Here',
    },
    {
      label:
        'Our shared kitchen comes with a microwave, cutlery, water, and glassware. All guests are expected to help maintain a clean environment and ensure all used glassware, cutlery, and dishes are placed in the dishwasher after use.',
      icon: '/presentation.svg',
      title: 'Amenity Here',
    },
    {
      label:
        'Our shared kitchen comes with a microwave, cutlery, water, and glassware. All guests are expected to help maintain a clean environment and ensure all used glassware, cutlery, and dishes are placed in the dishwasher after use.',
      icon: '/presentation.svg',
      title: 'Amenity Here',
    },
  ],
  image: [
    {
      src: '/16b9.png',
      alt: 'Alternative text',
    },
  ],
}
