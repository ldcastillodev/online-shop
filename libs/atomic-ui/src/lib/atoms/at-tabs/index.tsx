import { Fragment, ReactNode } from 'react'
import { Tab } from '@headlessui/react'
import { Highlight } from './shared/highlight'
import { textColorTransition } from './shared/classes'
import { AtIcon } from '../at-icon'

export interface Tab {
  icon?: string
  label: string
  counter?: number
  content?: ReactNode
  disabled?: boolean
}

export interface AtTabsProps {
  onChange?: (index: number) => void
  /** Make the component controlled, leave it undefined if there's no need for this */
  selectedTab?: number
  tabs: Tab[]
  /** Flag to limit maximum width of tab list, to give space for buttons to be placed at end of list */
  hasButtons?: boolean
  tabListClassName?: string
  tabButtonClassName?: string
}

export const AtTabs = ({
  tabs,
  onChange,
  selectedTab,
  hasButtons = false,
  tabListClassName = '',
  tabButtonClassName = '',
}: AtTabsProps) => (
  <Tab.Group onChange={onChange} selectedIndex={selectedTab} manual>
    <div className="overflow-x-auto grow overscroll-y-none py-2 pl-2">
      <Tab.List
        className={`${tabListClassName} lg:overflow flex gap-6 items-center border-b-1 border-neutrals-300 h-[calc(theme(spacing.12)-0.0625rem)] ${
          hasButtons ? 'lg:w-[calc(100%-8rem)]' : ''
        }`}
      >
        {tabs.map(({ counter, disabled, icon, label }, index) => (
          <Tab key={index} as={Fragment}>
            {({ selected }) => (
              <button
                disabled={disabled}
                className={`${tabButtonClassName} ${textColorTransition} group relative focus:outline-none ui-focus-visible:outline ui-focus-visible:outline-1 ui-focus-visible:outline-offset-4 ui-focus-visible:outline-neutrals-900 inline-flex shrink-0 h-12 items-center justify-center ${
                  selected
                    ? 'text-secondary-700'
                    : disabled
                    ? 'text-neutrals-500'
                    : 'text-neutrals-700 hover:text-neutrals-800 focus:text-neutrals-800'
                }`}
              >
                {icon && <AtIcon src={icon} className="w-10 h-10 p-2 mr-1" />}
                <span className="leading-1.5">{label}</span>
                {counter && (
                  <span
                    className={`ml-3 rounded-full inline-flex shrink-0 w-6 h-6 text-12 leading-1.5 font-medium justify-center items-center ${
                      disabled ? 'bg-neutrals-100 text-neutrals-600' : 'bg-secondary-100 text-secondary-700'
                    }`}
                  >
                    {counter}
                  </span>
                )}
                <Highlight selected={selected} disabled={disabled} className="absolute bottom-[0]" />
              </button>
            )}
          </Tab>
        ))}
      </Tab.List>
    </div>
    <Tab.Panels>
      {tabs.map(({ content }, index) => (
        <Tab.Panel tabIndex={-1} key={index}>
          {content}
        </Tab.Panel>
      ))}
    </Tab.Panels>
  </Tab.Group>
)
