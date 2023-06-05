import { ComponentMeta, ComponentStory } from '@storybook/react'
import { OrProductDescriptionBlock } from './index'

export default {
  title: 'Organisms/Product Description Block',
  component: OrProductDescriptionBlock,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof OrProductDescriptionBlock>

const Template: ComponentStory<typeof OrProductDescriptionBlock> = (args) => (
  <div className="lg:p-4">
    <OrProductDescriptionBlock {...args} />
  </div>
)

export const Preview = Template.bind({})
Preview.args = {
  title: 'Section title',
  subTitle: 'Capacity: 112-208',
  eyebrowLink: {
    title: 'label',
    actionTarget: '#',
  },
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
  body: 'Lorem ipsum dolor sit amet consectetur. Et gravida lectus aliquam feugiat. Scelerisque dolor tincidunt purus diam sollicitudin blandit quis est sed. Morbi convallis nec nam aliquet. Lorem justo libero enim dui leo lorem condimentum sed congue. At gravida dictumst integer nulla eget. Nec congue pretium velit facilisis id lorem sollicitudin mollis. Malesuada velit lorem massa pulvinar donec sed in quis. Suspendisse gravida cras et risus diam laoreet.',
  informative: [
    {
      label:
        'Lorem justo libero enim dui leo lorem condimentum sed congue. At gravida dictumst integer nulla eget. Nec congue pretium velit facilisis id lorem',
      icon: '/check.svg',
      title: 'Title',
    },
    {
      label:
        'Lorem justo libero enim dui leo lorem condimentum sed congue. At gravida dictumst integer nulla eget. Nec congue pretium velit facilisis id lorem',
      icon: '/check.svg',
      title: 'Title',
    },
    {
      label:
        'Lorem justo libero enim dui leo lorem condimentum sed congue. At gravida dictumst integer nulla eget. Nec congue pretium velit facilisis id lorem',
      icon: '/check.svg',
      title: 'Title',
    },
  ],
}
