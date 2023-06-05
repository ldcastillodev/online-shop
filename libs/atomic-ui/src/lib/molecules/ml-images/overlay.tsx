export const Overlay = ({ className = '' }) => (
  <svg
    width="254"
    height="96"
    viewBox="0 0 254 96"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g filter="url(#filter0_f_1483_1919)">
      <path
        d="M64 88C64 74.7452 74.7452 64 88 64H166C179.255 64 190 74.7452 190 88V96H64V88Z"
        fill="black"
        fillOpacity="0.08"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_1483_1919"
        x="0"
        y="0"
        width="254"
        height="160"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="32" result="effect1_foregroundBlur_1483_1919" />
      </filter>
    </defs>
  </svg>
)
