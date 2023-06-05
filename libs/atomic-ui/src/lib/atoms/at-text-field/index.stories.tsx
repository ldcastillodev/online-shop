import { AtTextField } from './index'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'
import { errorContent, hintContent } from './shared/mocks'
import { notNumber, phoneFormatter } from './shared/utils'

export default {
  title: 'Atoms/Text Field',
  component: AtTextField,
} as ComponentMeta<typeof AtTextField>

const Template: ComponentStory<typeof AtTextField> = (args) => {
  const [value, setValue] = useState('')

  return <AtTextField {...args} value={value} onChange={(value) => setValue(value)} clear={() => setValue('')} />
}

export const Default = Template.bind({})
Default.args = {
  label: 'Label',
  name: 'label',
  placeholder: 'Placeholder',
  helperText: hintContent,
  errorText: errorContent,
  maxLength: 20,
}

export const Phone = Template.bind({})
Phone.args = {
  label: 'Phone number',
  name: 'phone',
  placeholder: '(000) 000-0000',
  pattern: '^\\(\\d{3}\\) \\d{3}-\\d{4}$',
  maxLength: 14,
  skipChange: notNumber,
  formatter: phoneFormatter,
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  ...Default.args,
  icon: '/view-grid.svg',
}
