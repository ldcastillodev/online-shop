import { ComponentMeta, ComponentStory } from '@storybook/react'
import { OrMapTile } from './index'

export default {
  title: 'Organisms/Map Tile',
  component: OrMapTile,
} as ComponentMeta<typeof OrMapTile>

const Template: ComponentStory<typeof OrMapTile> = (args) => (
  <OrMapTile {...args} apiKey={process.env.STORYBOOK_GOOGLE_MAPS_API_KEY ?? ''} />
)

export const Preview = Template.bind({})
Preview.args = {
  address: 'Bryant Park, New York, NY, USA',
  details: Array.from({ length: 6 }, (_) => ({
    icon: '/view-grid.svg',
    label: 'Lorem ipsum dolor sit amet consectetur sed aliquam amet lacus dignissim porttitor',
  })),
}
