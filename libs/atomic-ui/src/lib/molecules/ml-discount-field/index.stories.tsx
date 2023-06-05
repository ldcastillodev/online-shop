import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MlDiscountField } from '.'
import { errorContent } from '../../atoms/at-text-field/shared/mocks'

export default {
  title: 'Molecules/Discount Field',
  component: MlDiscountField,
} as ComponentMeta<typeof MlDiscountField>

const Template: ComponentStory<typeof MlDiscountField> = (args) => <MlDiscountField {...args} />

export const Default = Template.bind({})
Default.args = {
  name: 'label',
  placeholder: 'Enter discount code',
  errorText: errorContent,
  title: 'Apply code',
  couponValue: 'XKTJRLE20',
}
