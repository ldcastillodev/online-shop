import { ComponentMeta, ComponentStory } from '@storybook/react'
import { OrContentBlockB } from './content-block-b'

export default {
  title: 'Organisms/Content Block B',
  component: OrContentBlockB,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof OrContentBlockB>

const Template: ComponentStory<typeof OrContentBlockB> = (args) => (
  <div className="py-2 lg:py-32">
    <OrContentBlockB {...args} />
  </div>
)

export const Preview = Template.bind({})
Preview.args = {
  title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit manej',
  paragraphOne:
    'Lorem ipsum dolor sit amet consectetur. Ornare maecenas lectus sociis in turpis. Fermentum arcu tellus ultrices imperdiet. Mattis cras quam lorem cursus sem malesuada nullam.',
  paragraphTwo:
    'Lorem ipsum dolor sit amet consectetur. Ornare maecenas lectus sociis in turpis. Fermentum arcu tellus ultrices imperdiet. Mattis cras quam lorem cursus sem malesuada nullam. Viverra arcu nibh aliquet eget diam ultricies cras ut lorem. Ipsum Lorem ipsum dolor sit amet consectetur.',
  paragraphThree:
    'Ornare maecenas lectus sociis in turpis. Fermentum arcu tellus ultrices imperdiet. Mattis cras quam lorem cursus sem malesuada nullam. Viverra arcu nibh aliquet eget diam ultricies cras ut lorem. Ipsum Lorem ipsum dolor sit amet consectetur. Ornare maecenas lectus sociis in turpis. Fermentum arcu tellus ultrices imperdiet.',
  paragraphFour:
    'Lorem ipsum dolor sit amet consectetur. Ornare maecenas lectus sociis in turpis. Fermentum arcu tellus ultrices imperdiet. Mattis cras quam lorem cursus sem malesuada nullam u nibh aliquet eget diam ultricies.',
  imageOne: {
    src: '/bailey-zindel-NRQV-hBF10M-unsplash.jpg',
    alt: 'Alternative text',
  },
  ImageTwo: {
    src: '/mohammad-alizade-62t_kKa2YlA-unsplash.jpg',
    alt: 'Alternative text',
  },
}
