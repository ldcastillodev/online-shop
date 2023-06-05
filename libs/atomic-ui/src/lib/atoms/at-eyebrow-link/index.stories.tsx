import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AtEyebrowLink, AtEyebrowLinkTarget } from '.'

export default {
  title: 'Atoms/Eyebrow Link',
  component: AtEyebrowLink,
} as ComponentMeta<typeof AtEyebrowLink>

const Template: ComponentStory<typeof AtEyebrowLink> = (args) => <AtEyebrowLink {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Eyebrow link - this is a test for long text',
  actionTarget: '#',
  isDisabled: false,
  target: AtEyebrowLinkTarget.SELF,
}

export const LongTextWithLink = Template.bind({})
LongTextWithLink.args = {
  ...Default.args,
  title:
    'Return of the Jedi (also known as Star Wars: Episode VI – Return of the Jedi) is a 1983 American epic space opera film directed by Richard Marquand.',
  actionTarget: 'https://en.wikipedia.org/wiki/Return_of_the_Jedi',
}
