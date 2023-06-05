import { PropsWithChildren } from 'react'
import { AtCheckbox, AtCheckboxProps } from '../../../atoms'

export const ConditionalField = ({ children, ...checkbox }: PropsWithChildren<AtCheckboxProps>) => (
  <div className="flex flex-col gap-2">
    <AtCheckbox {...checkbox} />
    {checkbox.isChecked && <div className="flex flex-col gap-4">{children}</div>}
  </div>
)
