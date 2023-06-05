import { Switch } from '@headlessui/react'
import { AtTooltip, AtTooltipProps } from '../at-tooltip'

export interface AtToggleProps {
  label: string
  description?: string
  checked?: boolean
  onChange?: (checked: boolean) => void
  hint?: AtTooltipProps
}

export const AtToggle = ({ checked = false, description, label, onChange, hint }: AtToggleProps) => (
  <Switch.Group>
    <div className="flex gap-4 shrink-0">
      <Switch
        checked={checked}
        onChange={onChange}
        className={`inline-flex shrink-0 relative rounded-[20px] min-w-12 w-12 h-6 ${
          checked ? 'bg-primary-500' : 'bg-neutrals-300 hover:bg-neutrals-400'
        } transition-colors duration-200 ease-in-out`}
      >
        <span
          className={`inline-block absolute top-[0.1875rem] left-[0.1875rem] h-4.5 w-4.5 rounded-full pointer-events-none transform ${
            checked ? 'bg-neutrals-white translate-x-6' : 'bg-neutrals-800 translate-x-0'
          } transition duration-200 ease-in-out`}
        />
      </Switch>
      <div className="flex gap-2">
        <div className="flex flex-col">
          <Switch.Label className="text-neutrals-800 leading-1.5">{label}</Switch.Label>
          {description && (
            <Switch.Description className="text-neutrals-700 leading-1.5 text-14">{description}</Switch.Description>
          )}
        </div>
        {hint && <AtTooltip {...hint} />}
      </div>
    </div>
  </Switch.Group>
)
