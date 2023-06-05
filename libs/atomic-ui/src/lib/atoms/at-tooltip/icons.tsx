import { CSSProperties, forwardRef, SVGAttributes } from 'react'

export const TooltipArrow = forwardRef<
  HTMLDivElement,
  {
    className?: string
    style?: CSSProperties
    svgClassName?: string
  }
>(({ className = '', style, svgClassName = '' }, ref) => (
  <div ref={ref} style={style} className={className}>
    <svg
      className={svgClassName}
      width="24"
      height="12"
      viewBox="0 0 24 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.4142 1.41421L24 12L0 12L10.5858 1.41421C11.3668 0.633165 12.6332 0.633165 13.4142 1.41421Z"
        fill="#444647"
      />
    </svg>
  </div>
))

export const CustomQuestionMark = (args: SVGAttributes<SVGElement>) => (
  <svg width="16" height="16" {...args} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5.01855 5.14871C5.01855 1.67761 10.4731 1.67764 10.4731 5.14872C10.4731 7.62805 7.99376 7.13212 7.99376 10.1073"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M8 13.0981L8.00727 13.09" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
