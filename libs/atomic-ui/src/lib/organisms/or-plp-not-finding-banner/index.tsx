import { Image } from '../../molecules'
import { AtButton, AtButtonProps } from '../../atoms'

export interface OrPlpNotFindingBannerProps {
  image: Image
  title: string
  button: AtButtonProps
}

export const OrPlpNotFindingBanner = ({ image: { alt, src }, title, button }: OrPlpNotFindingBannerProps) => (
  <div className="w-fit bg-neutrals-white flex flex-col lg:flex-row-reverse border-1 border-neutrals-300 rounded-4">
    <img
      alt={alt}
      src={src}
      className="w-[19.75rem] aspect-[3/2] object-cover rounded-t-4 lg:rounded-t-0 lg:rounded-tr-4 lg:rounded-br-4"
    />
    <div className="p-6 lg:pl-16 lg:pr-24 lg:py-0 lg:my-auto">
      <div className="w-[16.75rem] lg:w-[12.75rem]">
        <p className="mb-2 font-heading font-medium text-24 lg:text-32 leading-1.3 text-neutrals-900 w-9/12 lg:w-full line-clamp-2 lg:line-clamp-3">
          {title}
        </p>
        {button && <AtButton {...button} className="self-baseline !px-0" />}
      </div>
    </div>
  </div>
)
