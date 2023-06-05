import { ComponentMeta, ComponentStory } from '@storybook/react'
import { OrPlpNotFindingBanner } from './index'
import { AtButtonDimensions, AtButtonTypes } from '../../types'

export default {
  title: 'Organisms/PLP Not Finding Banner',
  component: OrPlpNotFindingBanner,
} as ComponentMeta<typeof OrPlpNotFindingBanner>

const Template: ComponentStory<typeof OrPlpNotFindingBanner> = (args) => <OrPlpNotFindingBanner {...args} />

export const Preview = Template.bind({})
Preview.args = {
  title: 'Not finding what you like?',
  button: {
    type: AtButtonTypes.TERTIARY,
    size: AtButtonDimensions.MEDIUM,
    title: 'Contact us',
  },
  image: { src: '/not-found-banner.png', alt: 'Not found banner' },
}
