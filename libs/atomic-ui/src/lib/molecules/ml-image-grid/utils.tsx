import { ImgHTMLAttributes, PropsWithChildren } from 'react'
import { ViewGrid } from 'iconoir-react'

export const ImageOverlay = ({
  onClick,
  children,
  className = '',
}: PropsWithChildren<{
  onClick?: () => void
  className?: string
}>) => (
  <button onClick={onClick} className={`rounded-4 relative ${className}`}>
    {children}
    <div className="rounded-4 text-neutrals-white absolute w-full h-full top-0 left-0 flex flex-col justify-center items-center bg-[rgba(0,0,0,0.48)]">
      <div className="w-10 h-10">
        <ViewGrid />
      </div>
      View all photos
    </div>
  </button>
)
export const SecondaryImage = ({ className = '', ...props }: ImgHTMLAttributes<HTMLImageElement>) => (
  <img {...props} className={`${className} rounded-4 max-w-full`} />
)

export const imageSize = (large = false) =>
  large
    ? {
        main: {
          width: 626,
          height: 352,
        },
        secondary: {
          width: 224,
          height: 168,
        },
      }
    : {
        main: {
          width: 451,
          height: 338,
        },
        secondary: {
          width: 213,
          height: 161,
        },
      }

export const imageClass = (large = false) =>
  large
    ? {
        mainClasses: 'w-[39.125rem] h-[22rem]',
        secondaryClasses: 'w-[14rem] h-[10.5rem]',
      }
    : {
        mainClasses: 'w-[28.1875rem] h-[21.125rem]',
        secondaryClasses: 'w-[13.3125rem] h-[10.0625rem]',
      }
