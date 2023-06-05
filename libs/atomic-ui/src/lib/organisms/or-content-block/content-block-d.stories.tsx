import { ComponentMeta, ComponentStory } from '@storybook/react'
import { OrContentBlockD } from './content-block-d'

export default {
  title: 'Organisms/Content Block D',
  component: OrContentBlockD,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof OrContentBlockD>

const Template: ComponentStory<typeof OrContentBlockD> = (args) => (
  <div className="py-8 lg:py-30">
    <OrContentBlockD {...args} />
  </div>
)

export const Preview = Template.bind({})
Preview.args = {
  title: 'Lorem ipsum',
  content:
    'Lorem ipsum dolor sit amet consectetur. Neque adipiscing fames mi sit lectus laoreet. Vel eget cursus aenean porttitor sed. Feugiat pulvinar sit amet cras viverra ornare nascetur purus tellus. Lectus curabitur volutpat vulputate facilisis ultrices in tellus. Scelerisque mi proin eu lacinia ut interdum. Egestas molestie lectus duis sed nunc ullamcorper. Purus neque etiam at lobortis egestas leo morbi consequat. Tortor fermentum turpis ut morbi nec. Duis ut massa eget vitae. Quam euismod mi tincidunt risus aliquet sodales sit. Nunc a eu dui ullamcorper. Dolor et sit odio fringilla est sem sed. Lacinia mi aliquet magna consequat. Sed euismod turpis sed tortor quam. Nisi in rutrum eget sed sapien.',
  image: [
    {
      src: '/4b3.png',
      alt: 'Alternative text',
    },
  ],
}
