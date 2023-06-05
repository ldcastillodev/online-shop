import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AtTextArea } from './index'
import { errorContent, hintContent } from '../at-text-field/shared/mocks'
import { useState } from 'react'

export default {
  title: 'Atoms/Text Area',
  component: AtTextArea,
} as ComponentMeta<typeof AtTextArea>

const Template: ComponentStory<typeof AtTextArea> = (args) => {
  const [value, setValue] = useState('')
  return <AtTextArea {...args} value={value} onChange={(value) => setValue(value)} />
}

export const Default = Template.bind({})
Default.args = {
  label: 'Label',
  name: 'label',
  placeholder: 'Placeholder',
  helperText: hintContent,
  errorText: errorContent,
  maxLength: 120,
}
