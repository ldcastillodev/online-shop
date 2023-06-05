import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MlMap } from './index'

export default {
  title: 'Molecules/Map',
  component: MlMap,
} as ComponentMeta<typeof MlMap>

const Template: ComponentStory<typeof MlMap> = (args) => (
  <MlMap {...args} apiKey={process.env.STORYBOOK_GOOGLE_MAPS_API_KEY ?? ''} />
)

export const Preview = Template.bind({})
Preview.args = {
  zoom: 15,
  position: {
    lat: 40.75208922403227,
    lng: -73.98218294948134,
  },
}
