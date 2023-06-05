import { Detail, DetailProps, Form, FormProps } from './components'
import { Dialog } from '@headlessui/react'
import { AtButton } from '../../atoms'
import { AtButtonDimensions, AtButtonTypes } from '../../types'
import { useState } from 'react'
import { outline } from '../or-bottom-sheet'
import { Cancel } from 'iconoir-react'
import { MlSnackbar, MlSnackbarProps } from '../../molecules'

export interface OrBookingPanelProps extends FormProps {
  details: DetailProps
  notification?: Omit<MlSnackbarProps, 'className'>
}

export const OrBookingPanel = ({ details, notification, ...props }: OrBookingPanelProps) => {
  const [open, setOpen] = useState(false)

  const panel = (
    <div className="lg:w-[24.75rem] bg-neutrals-white lg:rounded-4 lg:shadow-level-2">
      <Detail {...details} />
      <Form {...props} />
    </div>
  )

  return (
    <>
      <div id="booking-panel" className="hidden lg:block h-fit">
        {panel}
      </div>
      {notification && <MlSnackbar className={open ? 'hidden' : 'z-[2]'} {...notification} />}
      {!open && (
        <div className="fixed w-full left-0 bottom-0 p-4 bg-neutrals-white lg:hidden">
          <AtButton
            type={AtButtonTypes.PRIMARY}
            size={AtButtonDimensions.LARGE}
            title="Check availability"
            className="w-full"
            onClick={() => setOpen(true)}
          />
        </div>
      )}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <Dialog.Panel className="inset-0 lg:hidden h-screen overflow-y-auto">
          <div className="pt-6 p-4 flex flex-row-reverse">
            <button aria-label="Close booking panel" className={outline} onClick={() => setOpen(false)}>
              <Cancel className="w-10 h-10 p-2" />
            </button>
          </div>
          {panel}
          {notification && <MlSnackbar className="z-[2]" {...notification} />}
        </Dialog.Panel>
      </Dialog>
    </>
  )
}
