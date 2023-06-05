import { NotificationType } from '../ml-notification'
import { variants } from '../ml-notification/variants'
import { EyebrowButton } from './eyebrow-button'
import { Transition } from '@headlessui/react'

const transition = 'transition-transform duration-500 ease-custom'
const hiddenBar = 'translate-y-[calc(100%+1.5rem)]'

export interface MlSnackbarProps {
  message: string
  buttonLabel?: string
  type: NotificationType
  visible: boolean
  dismiss: () => void
  className?: string
}

export const MlSnackbar = ({
  message,
  buttonLabel = 'Dismiss',
  dismiss,
  type,
  visible,
  className = '',
}: MlSnackbarProps) => {
  const { bgColor, textColor } = variants[type]

  return (
    <Transition
      show={visible}
      className={`fixed left-1/2 -translate-x-1/2 bottom-6 ${className}`}
      enter={transition}
      leave={transition}
      enterFrom={hiddenBar}
      leaveTo={hiddenBar}
    >
      <div className={`${bgColor} rounded-4 flex gap-4 items-center py-4 px-6 max-w-full w-[21.4375rem] lg:w-[50rem]`}>
        <p className={`${textColor} grow leading-1.5`}>{message}</p>
        <EyebrowButton onClick={dismiss} buttonLabel={buttonLabel} />
      </div>
    </Transition>
  )
}
