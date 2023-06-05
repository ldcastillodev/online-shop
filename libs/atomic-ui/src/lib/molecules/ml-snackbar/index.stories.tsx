import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MlSnackbar } from './index'
import { useState } from 'react'
import { AtButton } from '../../atoms'
import { AtButtonDimensions, AtButtonTypes } from '../../types'

export default {
  title: 'Molecules/Snackbar',
  component: MlSnackbar,
} as ComponentMeta<typeof MlSnackbar>

const Template: ComponentStory<typeof MlSnackbar> = ({
  message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  ...args
}) => {
  const [visible, setVisible] = useState(false)

  return (
    <div>
      <AtButton
        type={AtButtonTypes.PRIMARY}
        size={AtButtonDimensions.LARGE}
        title="Trigger"
        onClick={() => setVisible(true)}
      />
      <MlSnackbar message={message} {...args} visible={visible} dismiss={() => setVisible(false)} />
    </div>
  )
}

export const Positive = Template.bind({})
Positive.args = {
  type: 'positive',
}

export const Negative = Template.bind({})
Negative.args = {
  type: 'negative',
}

export const Informative = Template.bind({})
Informative.args = {
  type: 'informative',
}
