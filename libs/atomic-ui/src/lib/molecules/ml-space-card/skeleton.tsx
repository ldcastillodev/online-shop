import { MlSpaceCardProps } from './index'

export const MlSpaceCardSkeleton = ({ size = 'small' }: Pick<MlSpaceCardProps, 'size'>) => (
  <div
    aria-hidden
    className={`animate-pulse-fast ${size === 'small' ? 'w-[15.875rem]' : 'w-[21.375rem] lg:w-[20.375rem]'}`}
  >
    <div className="mb-4 bg-neutrals-300 opacity-4 rounded-4 aspect-[4/3]" />
    <div className={`mb-2 bg-neutrals-300 opacity-[0.6] h-8 ${size === 'small' ? 'mr-2.5' : 'w-full'}`} />
    <div className={`mb-4 bg-neutrals-300 opacity-[0.4] h-5 ${size === 'small' ? 'mr-[3.75rem]' : 'mr-[5.3125rem]'}`} />
    <div className={`mb-2 bg-neutrals-300 opacity-[0.3] h-10 ${size === 'small' ? 'mr-9' : 'mr-12'}`} />
    <div className={`mb-4 bg-neutrals-300 opacity-[0.2] h-10 ${size === 'small' ? 'mr-9' : 'mr-12'}`} />
    <div className={`bg-neutrals-300 opacity-[0.1] h-7 ${size === 'small' ? 'w-[6.25rem]' : 'w-32'}`} />
  </div>
)
