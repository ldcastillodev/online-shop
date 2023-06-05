import { ComponentMeta, ComponentStory } from '@storybook/react'
import { OrContentBlockA } from './content-block-a'
import { ArrowRight } from 'iconoir-react'

export default {
  title: 'Organisms/Content Block A',
  component: OrContentBlockA,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof OrContentBlockA>

const Template: ComponentStory<typeof OrContentBlockA> = (args) => (
  <div className="py-20 lg:py-32 bg-neutrals-300">
    <OrContentBlockA {...args} />
  </div>
)

export const Preview = Template.bind({})
Preview.args = {
  title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit manej',
  image: [
    {
      src: '/16b9.png',
      alt: 'Alternative text',
    },
  ],
  contents: [
    {
      title: 'Lorem ipsum dolor sit amet',
      body: 'Lorem ipsum dolor sit amet consectetur. Ornare maecenas lectus sociis in turpis. Fermentum arcu tellus ultrices imperdiet. Mattis cras quam lorem cursus sem malesuada nullam. Viverra arcu nibh aliquet eget diam ultricies cras ut lorem. Ipsum.',
      link: {
        title: 'Link text',
        actionTarget: '#',
        IconRightRef: ArrowRight,
      },
    },
    {
      title: 'Lorem ipsum dolor sit amet',
      body: 'Lorem ipsum dolor sit amet consectetur. Ornare maecenas lectus sociis in turpis. Fermentum arcu tellus ultrices imperdiet. Mattis cras quam lorem cursus sem malesuada nullam. Viverra arcu nibh aliquet eget diam ultricies cras ut lorem. Ipsum.',
      link: {
        title: 'Link text',
        actionTarget: '#',
        IconRightRef: ArrowRight,
      },
    },
  ],
}
