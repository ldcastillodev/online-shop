import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AtDatePicker } from './index'
import { useState } from 'react'
import { DateRange } from 'react-day-picker'
import { errorContent, hintContent } from '../at-text-field/shared/mocks'

export default {
  title: 'Atoms/Date Picker',
  component: AtDatePicker,
} as ComponentMeta<typeof AtDatePicker>

const Template: ComponentStory<typeof AtDatePicker> = (args) => {
  const [value, setValue] = useState<Date | DateRange>()
  return <AtDatePicker {...args} value={value} onChange={(date: Date | DateRange) => setValue(date)} />
}

export const Single = Template.bind({})
Single.args = {
  label: 'Label',
  name: 'date',
  mode: 'single',
  helperText: hintContent,
  errorText: errorContent,
}

export const Range = Template.bind({})
Range.args = {
  label: 'Label',
  name: 'date',
  mode: 'range',
  helperText: hintContent,
  errorText: errorContent,
}
