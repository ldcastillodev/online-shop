import { ComponentMeta, ComponentStory } from '@storybook/react'
import { OrContentBlockC } from './content-block-c'

export default {
  title: 'Organisms/Content Block C',
  component: OrContentBlockC,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof OrContentBlockC>

const Template: ComponentStory<typeof OrContentBlockC> = (args) => (
  <div className="py-12 lg:py-24">
    <OrContentBlockC {...args} />
  </div>
)

export const Preview = Template.bind({})
Preview.args = {
  mainText: 'Meet our Manager',
  title: 'Full Manager Name',
  subTitle: 'Job Title',
  body: 'Lorem ipsum dolor sit amet consectetur. Amet id adipiscing blandit molestie ut elementum at. Viverra velit iaculis vestibulum morbi pulvinar non diam. Orci dictumst sed suspendisse nisi.',
  signature: 'We are looking forward to meeting you',
  image: {
    src: '/1b1.png',
    alt: 'Alternative text',
  },
  mainTextTwo: 'Book a Tour',
  titleTwo: 'Lorem ipsum dolor sit amet consectur adipiscing elit amed',
  bodyTwo:
    'Lorem ipsum dolor sit amet consectetur. Amet id adipiscing blandit molestie ut elementum at. Viverra velit iaculis vestibulum morbi pulvinar non diam. Orci dictumst sed suspendisse nisi consequat morbi quam nulla.',
  imageTwo: {
    src: '/mohammad-alizade-62t_kKa2YlA-unsplash.jpg',
    alt: 'Alternative text',
  },
  buttonText: 'book a tour',
}
