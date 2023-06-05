import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AtDropdown, DropdownOption } from '.'
import { errorContent, hintContent } from '../at-text-field/shared/mocks'
import { useState } from 'react'

export default {
  title: 'Atoms/Dropdown',
  component: AtDropdown,
} as ComponentMeta<typeof AtDropdown>

const Template: ComponentStory<typeof AtDropdown> = (args) => {
  const [value, setValue] = useState<DropdownOption>(args.value ?? { value: '', label: '' })
  return <AtDropdown {...args} value={value} onChange={setValue} />
}

export const Default = Template.bind({})
Default.args = {
  label: 'Label',
  name: 'label',
  placeholder: 'Placeholder',
  helperText: hintContent,
  errorText: errorContent,
  options: Array(12)
    .fill({})
    .map((_, index) => ({ label: `Option ${index + 1}`, value: `value ${index + 1}` })),
}

export const WithDefaultValue = Template.bind({})
WithDefaultValue.args = {
  ...Default.args,
  value: {
    label: 'Option 1',
    value: 'value 1',
  },
}
