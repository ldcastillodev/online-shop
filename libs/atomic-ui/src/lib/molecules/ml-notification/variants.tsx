import { NotificationType } from './'
import { CheckCircle, WarningCircle, WarningTriangle } from 'iconoir-react'
import { IconRef } from '../../atoms'

export const variants: Record<NotificationType, { Icon: IconRef; textColor: string; bgColor: string }> = {
  informative: {
    Icon: WarningTriangle,
    bgColor: 'bg-feedback-informative-100',
    textColor: 'text-feedback-informative-300',
  },
  negative: {
    Icon: WarningCircle,
    bgColor: 'bg-feedback-negative-100',
    textColor: 'text-feedback-negative-300',
  },
  positive: {
    Icon: CheckCircle,
    bgColor: 'bg-feedback-positive-100',
    textColor: 'text-feedback-positive-300',
  },
}
