import { OffsetsFunction } from '@popperjs/core/lib/modifiers/offset'

export const offset: OffsetsFunction = ({ placement }) => {
  const offsetPosition = (): number => {
    switch (placement) {
      default:
      case 'auto':
      case 'top':
      case 'bottom':
      case 'right':
      case 'left':
        return 0
      case 'top-start':
      case 'bottom-start':
        return -32
      case 'top-end':
      case 'bottom-end':
        return 32
      case 'right-end':
      case 'left-end':
        return 10
      case 'right-start':
      case 'left-start':
        return -10
    }
  }
  return [offsetPosition(), 20]
}
