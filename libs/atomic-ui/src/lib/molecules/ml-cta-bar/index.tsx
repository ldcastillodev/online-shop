import { AtButton } from '../../atoms'
import { AtButtonBehaviors, AtButtonDimensions, AtButtonTypes } from '../../types'

export interface MlCtaBarProps {
  primaryLabel: string
  secondaryLabel?: string
  onSecondaryClick?: () => void
}

export const MlCtaBar = ({ onSecondaryClick, primaryLabel, secondaryLabel }: MlCtaBarProps) => (
  <div className="flex flex-col items-center p-4 lg:p-0 border-t-1 border-neutrals-300 lg:border-t-transparent">
    <AtButton
      typeButton={AtButtonBehaviors.SUBMIT}
      title={primaryLabel}
      className="px-4 w-full"
      type={AtButtonTypes.PRIMARY}
      size={AtButtonDimensions.LARGE}
    />
    {secondaryLabel && (
      <AtButton
        title={secondaryLabel}
        className="px-4 w-full mt-2"
        typeButton={AtButtonBehaviors.BUTTON}
        type={AtButtonTypes.SECONDARY}
        size={AtButtonDimensions.LARGE}
        onClick={onSecondaryClick}
      />
    )}
  </div>
)
