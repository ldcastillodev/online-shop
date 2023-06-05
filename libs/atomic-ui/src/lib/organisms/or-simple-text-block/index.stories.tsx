import { ComponentMeta, ComponentStory } from '@storybook/react'
import { OrSimpleTextBlock } from '.'

export default {
  title: 'Organisms/Simple Text Block',
  component: OrSimpleTextBlock,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof OrSimpleTextBlock>

const Template: ComponentStory<typeof OrSimpleTextBlock> = (args) => <OrSimpleTextBlock {...args} />

export const ContentBlock = Template.bind({})
ContentBlock.args = {
  mainTitle: 'Title',
  mainSubtitle:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in sollicitudin enim. Maecenas hendrerit, sem vel viverra sollicitudin, eros libero euismod nisl, quis convallis orci urna sit amet urna. Sed facilisis dolor sit amet commodo efficitur. Sed sed posuere massa.',
  contents: [
    {
      title: 'Small Title',
      subtitle: 'Lorem ipsum dolor sit amet consectetur. Dui platea turpis tellus imperdiet dictumst quis sit.',
    },
    {
      title: 'Small Title',
      subtitle: 'Lorem ipsum dolor sit amet consectetur. Dui platea turpis tellus imperdiet dictumst quis sit.',
    },
    {
      title: 'Small Title',
      subtitle: 'Lorem ipsum dolor sit amet consectetur. Dui platea turpis tellus imperdiet dictumst quis sit.',
    },
  ],
}
