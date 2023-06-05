import { AspectRatio } from './'

export const buttonPositioning =
  'absolute top-1/2 -translate-y-1/2 z-[2] hidden lg:block opacity-[0] group-hover:opacity-[1] group-focus-within:opacity-[1]'

export const aspectRatioClass: Record<AspectRatio, string> = {
  '16:9': 'aspect-video',
  '1:1': 'aspect-square',
  '2:1': 'aspect-[2/1]',
  '3:2': 'aspect-[3/2]',
  '4:3': 'aspect-[4/3]',
  custom: '',
}
