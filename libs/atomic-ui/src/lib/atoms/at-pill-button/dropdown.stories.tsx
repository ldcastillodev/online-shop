import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AtPillDropdown } from './dropdown'
import { useState } from 'react'
import { DropdownOption, timeDurationMap } from '../at-dropdown'

export default {
  title: 'Atoms/Pill Button (Dropdown)',
  component: AtPillDropdown,
} as ComponentMeta<typeof AtPillDropdown>

const Template: ComponentStory<typeof AtPillDropdown> = (args) => {
  const [value, setValue] = useState<DropdownOption>({ value: '', label: '' })
  return <AtPillDropdown {...args} value={value} onChange={setValue} />
}

export const Preview = Template.bind({})
Preview.args = {
  label: 'Label',
  options: Array(16).fill({}).map(timeDurationMap),
}
