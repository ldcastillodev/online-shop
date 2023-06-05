import { MlImages } from '../ml-images'
import { MlGeneralWorkspaceCardProps } from '../ml-general-workspace-card'
import { AtIcon, AtTag, AtTagProps } from '../../atoms'

export interface MlSpaceCardProps extends MlGeneralWorkspaceCardProps {
  space: string
  building: string
  details?: Record<'icon' | 'label', string>[]
  tag?: AtTagProps
  rate?: string
  size?: 'small' | 'medium'
}

export const MlSpaceCard = ({
  building,
  details,
  href,
  images,
  rate = 'Inquire for pricing',
  size = 'small',
  space,
  tag,
  title,
}: MlSpaceCardProps) => (
  <div
    className={`relative ${
      size === 'small' ? 'w-[17.88rem] h-[26.03rem]' : 'w-[22.31rem] h-[29.36rem]'
    } rounded-4 border-1 border-transparent hover:border-neutrals-400 active:border-neutrals-600 [&:has(a:focus-visible)]:border-neutrals-900 [&:has(a:focus-visible)]:rounded-0`}
  >
    {tag && <AtTag {...tag} className="absolute left-6 top-6 z-[2]" />}
    <a href={href} className="h-full p-2 lg:p-4 flex flex-col focus:outline-none">
      <div className="mb-2 lg:mb-4 grow" />
      <p className="font-heading font-medium text-24 leading-1.3 text-neutrals-900">{title}</p>
      <p className="font-bold text-14 leading-1.5 mt-1">
        {space} at {building}
      </p>
      <div className="h-20 my-2 text-neutrals-700 text-14 leading-1.5 font-bold">
        {details?.map(({ label, icon }, i) => (
          <div key={i} className="h-10 flex items-center">
            <AtIcon src={icon} />
            {label}
          </div>
        ))}
      </div>
      <p className="font-heading text-20 leading-1.3">{rate}</p>
    </a>
    <div
      className={`absolute top-2 left-2 lg:top-4 lg:left-4 aspect-[4/3] ${
        size === 'small' ? 'w-[94%] lg:w-[89%]' : 'w-[95.5%] lg:w-[91%]'
      }`}
    >
      <MlImages unsetMaxDimensions aspectRatio="4:3" images={images} href={href} />
    </div>
  </div>
)
