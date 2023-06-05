import { Image } from '../ml-images'
import { useMemo, useState } from 'react'
import Lightbox, { Slide } from 'yet-another-react-lightbox'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import Captions from 'yet-another-react-lightbox/plugins/captions'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/captions.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import { imageClass, ImageOverlay, imageSize, SecondaryImage } from './utils'
import { Cancel, Collapse, Expand, NavArrowLeft, NavArrowRight, Planimetry, ZoomIn, ZoomOut } from 'iconoir-react'
import { AtButton } from '../../atoms'
import { AtButtonDimensions, AtButtonTypes } from '../../types'
import { MlImages } from '../ml-images'

export interface MlImageGridProps {
  title?: string
  images: Image[]
  floorPlanImage?: Image
  /** Maximum amount of **secondary images** to render in the main grid, if there are more images than this value then the last image will show an overlay with a *"View all photos"* message. **Defaults to 2 secondary images** */
  maxVisible?: number
  /** Use the bigger variant of this component. See [Figma definition](https://www.figma.com/file/Awrp0dmi82JWFCXt6HGpk0/%F0%9F%A7%A9-TS-Studio---UI-Components?node-id=1136%3A12203&t=yG9ojpsB183GjtSP-1) for more details */
  large?: boolean
}

export const MlImageGrid = ({ title, images, floorPlanImage, large = false, maxVisible = 2 }: MlImageGridProps) => {
  const [open, setOpen] = useState(false)
  const [focusedImage, setFocusedImage] = useState(0)
  const slides = useMemo<Slide[]>(
    () =>
      (floorPlanImage ? [...images, floorPlanImage] : images).map(({ src, alt, caption }) => ({
        title,
        src,
        alt,
        description: caption,
      })),
    [title, images, floorPlanImage]
  )

  const focusImage = (image: number) => () => {
    setFocusedImage(image)
    setOpen(true)
  }

  const secondaryAmount = Math.min(maxVisible, slides.length - 1)
  const exceedsMaxVisible = slides.length - 1 > maxVisible

  const { main, secondary } = imageSize(large)
  const { mainClasses, secondaryClasses } = imageClass(large)

  return (
    <>
      <div className="w-full lg:w-max">
        <div className="lg:grid hidden grid-rows-2 grid-flow-col gap-4">
          <img
            src={slides[0].src}
            alt={slides[0].alt}
            className={`col-span-2 row-span-2 object-cover rounded-4 cursor-pointer ${mainClasses}`}
            {...main}
            onClick={focusImage(0)}
          />
          {slides.length > 1 &&
            !!maxVisible &&
            slides.slice(1, secondaryAmount + 1).map(({ src, alt }, i) => {
              if (exceedsMaxVisible && i === secondaryAmount - 1) {
                return (
                  <ImageOverlay key={i + 1} onClick={focusImage(i + 1)} className={secondaryClasses}>
                    <SecondaryImage src={src} alt={alt} {...secondary} className={`object-cover ${secondaryClasses}`} />
                  </ImageOverlay>
                )
              }

              return (
                <SecondaryImage
                  key={i + 1}
                  src={src}
                  alt={alt}
                  onClick={focusImage(i + 1)}
                  {...secondary}
                  className={`object-cover cursor-pointer ${secondaryClasses}`}
                />
              )
            })}
        </div>
        <div className="lg:hidden">
          <MlImages
            unsetMaxDimensions
            aspectRatio="4:3"
            images={images}
            onClick={(i) => {
              focusImage(i)()
            }}
          />
        </div>
        {floorPlanImage && (
          <div className="flex lg:flex-row-reverse pl-4 lg:pl-0 mt-4 lg:mt-2">
            <AtButton
              type={AtButtonTypes.GRAYSCALE}
              size={AtButtonDimensions.SMALL}
              title="View Floor Plan"
              IconLeftRef={Planimetry}
              onClick={focusImage(slides.length - 1)}
            />
          </div>
        )}
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={focusedImage}
        plugins={[Zoom, Captions, Thumbnails, Fullscreen]}
        slides={slides}
        captions={{
          descriptionTextAlign: 'center',
        }}
        render={{
          iconEnterFullscreen: () => <Expand strokeWidth={2} />,
          iconExitFullscreen: () => <Collapse strokeWidth={2} />,
          iconZoomOut: () => <ZoomOut strokeWidth={2} />,
          iconZoomIn: () => <ZoomIn strokeWidth={2} />,
          iconClose: () => <Cancel strokeWidth={2} />,
          iconNext: () => <NavArrowRight strokeWidth={2} />,
          iconPrev: () => <NavArrowLeft strokeWidth={2} />,
        }}
      />
    </>
  )
}
