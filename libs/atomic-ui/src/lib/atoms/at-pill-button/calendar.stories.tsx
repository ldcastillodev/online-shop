import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'
import { DateRange } from 'react-day-picker'
import { AtPillCalendar } from './calendar'

export default {
  title: 'Atoms/Pill Button (Calendar)',
  component: AtPillCalendar,
} as ComponentMeta<typeof AtPillCalendar>

const Template: ComponentStory<typeof AtPillCalendar> = (args) => {
  const [value, setValue] = useState<Date | DateRange>()
  return <AtPillCalendar {...args} value={value} onChange={(date: Date | DateRange) => setValue(date)} />
}

export const Single = Template.bind({})
Single.args = {
  label: 'Label',
}

export const Range = Template.bind({})
Range.args = {
  label: 'Label',
  mode: 'range',
}
