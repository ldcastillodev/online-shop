import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MlCtaBar } from './index'

export default {
  title: 'Molecules/Cta Bar',
  component: MlCtaBar,
} as ComponentMeta<typeof MlCtaBar>

const Template: ComponentStory<typeof MlCtaBar> = (args) => <MlCtaBar {...args} />

export const Preview = Template.bind({})
Preview.args = {
  primaryLabel: 'Label',
  secondaryLabel: 'Label',
}
