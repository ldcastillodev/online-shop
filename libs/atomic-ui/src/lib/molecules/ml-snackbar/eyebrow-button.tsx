import { Highlight } from '../../atoms/at-tabs/shared/highlight'

export const EyebrowButton = (props: { onClick: () => void; buttonLabel: string | undefined }) => (
  <button
    className="uppercase relative text-primary-500 hover:text-primary-700 focus:text-primary-700 active:text-primary-900 disabled:text-neutrals-500 font-bold text-12 leading-1 5 focus:outline-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-neutrals-900 focus-visible:outline-offset-4 group"
    onClick={props.onClick}
  >
    {props.buttonLabel}
    <Highlight className="absolute bottom-0 h-[1px]" />
  </button>
)
