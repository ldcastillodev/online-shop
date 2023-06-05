import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AspectRatio, MlImages } from './'

export default {
  title: 'Molecules/Images',
  component: MlImages,
} as ComponentMeta<typeof MlImages>

const image = (ratio: AspectRatio) => ({
  src: `/${ratio.replace(':', 'b')}.png`,
  alt: 'Placeholder image',
})

const exampleCarouselProps = (ratio: AspectRatio) => ({
  images: Array(8).fill(image(ratio)),
  aspectRatio: ratio,
})

const Template: ComponentStory<typeof MlImages> = (args) => <MlImages {...args} />

export const Widescreen = Template.bind({})
Widescreen.args = exampleCarouselProps('16:9')

export const Square = Template.bind({})
Square.args = exampleCarouselProps('1:1')

export const TwoByOne = Template.bind({})
TwoByOne.args = exampleCarouselProps('2:1')

export const ThreeByTwo = Template.bind({})
ThreeByTwo.args = exampleCarouselProps('3:2')

export const FourByThree = Template.bind({})
FourByThree.args = exampleCarouselProps('4:3')

export const SingleImage: ComponentStory<typeof MlImages> = ({ aspectRatio = '16:9' }) => (
  <MlImages aspectRatio={aspectRatio} images={[image(aspectRatio)]} />
)
