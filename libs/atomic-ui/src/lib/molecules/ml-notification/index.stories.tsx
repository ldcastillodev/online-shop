import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MlNotification } from './index'
import { bodyContent } from '../../atoms/at-text-field/shared/mocks'
import { NavArrowRight } from 'iconoir-react'

export default {
  title: 'Molecules/Notification',
  component: MlNotification,
} as ComponentMeta<typeof MlNotification>

const Template: ComponentStory<typeof MlNotification> = ({
  title = 'Heading text',
  body = bodyContent,
  link = {
    actionTarget: '#',
    title: 'Link Text',
    IconRightRef: NavArrowRight,
  },
  ...args
}) => <MlNotification body={body} title={title} link={link} {...args} />

export const Informative = Template.bind({})
Informative.args = {
  type: 'informative',
}

export const Negative = Template.bind({})
Negative.args = {
  type: 'negative',
}

export const Positive = Template.bind({})
Positive.args = {
  type: 'positive',
}
