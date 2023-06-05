import { ReactSVG } from 'react-svg'
import DOMPurify from 'dompurify'
import { Calendar } from 'iconoir-react'
import { SVGAttributes } from 'react'

const resetColors = (element: SVGSVGElement) => {
  if (element.getAttribute('color')) element.setAttribute('color', 'currentColor')

  const children = element.querySelectorAll('[stroke]')

  children.forEach((el) => {
    el.setAttribute('stroke', 'currentColor')
  })
}

export const AtIcon = ({ src = '', className = 'w-10 h-10 p-2' }) => (
  <ReactSVG
    src={src}
    className={className}
    evalScripts="never"
    beforeInjection={(svg) => {
      svg.removeAttribute('width')
      svg.removeAttribute('height')

      resetColors(svg)
      DOMPurify.sanitize(svg, { IN_PLACE: true, USE_PROFILES: { svg: true, svgFilters: true } })
    }}
  />
)

/** Helper for direct (static) references */
export type IconRef = typeof Calendar | ((props: SVGAttributes<SVGElement>) => JSX.Element)
