import { AtButtonTypes, AtButtonDimensions } from '../../types'

export const AtButtonStyles: Record<
  AtButtonTypes,
  { base: string; hover?: string; active?: string; focus?: string; disabled?: string }
> = {
  primary: {
    base: 'text-neutrals-white bg-primary-500',
    hover: 'hover:bg-primary-700',
    active: 'active:bg-primary-900',
    focus: 'focus-visible:bg-primary-700',
    disabled: 'text-neutrals-white bg-neutrals-500',
  },
  secondary: {
    base: 'text-primary-500 border-solid border-1 border-primary',
    hover: 'hover:text-primary-700',
    active: 'active:text-primary-900',
    focus: 'focus-visible:text-primary-700',
    disabled: 'text-neutrals-500 border-solid border-1 border-neutrals-500',
  },
  grayscale: {
    base: 'text-neutrals-800',
    hover: 'hover:text-neutrals-700',
    active: 'active:text-neutrals-600',
    focus: 'focus-visible:text-neutrals-700',
    disabled: 'text-neutrals-500',
  },
  tertiary: {
    base: 'text-primary-500',
    hover: 'hover:text-primary-700',
    active: 'active:text-primary-900',
    focus: 'focus-visible:text-primary-700',
    disabled: 'text-neutrals-500',
  },
}

export const AtButtonSizeWithText: Record<AtButtonDimensions, string> = {
  [AtButtonDimensions.LARGE]: 'h-14 px-4',
  [AtButtonDimensions.MEDIUM]: 'h-12 px-2',
  [AtButtonDimensions.SMALL]: 'h-10 px-2',
}

export const AtButtonSizeWithoutText: Record<AtButtonDimensions, string> = {
  [AtButtonDimensions.LARGE]: 'h-14',
  [AtButtonDimensions.MEDIUM]: 'h-12',
  [AtButtonDimensions.SMALL]: 'h-10',
}
