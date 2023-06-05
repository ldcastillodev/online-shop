export const baseFieldClasses = (hasError = false) =>
  `outline-none w-full placeholder:text-neutrals-600 text-neutrals-800 border-1 rounded-8 ${
    hasError
      ? 'border-feedback-negative-300'
      : 'border-neutrals-600 focus:border-neutrals-800 hover:border-neutrals-800'
  }`

export const labelClasses = 'font-bold leading-1.5 text-neutrals-800'

export const fieldContainerClasses = 'flex flex-col gap-1'
