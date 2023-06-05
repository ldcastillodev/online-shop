import { AtIcon } from '../../atoms'

export interface NotFoundSpacesProps {
  title?: string
  subtitle?: string
  details?: {
    icon?: string
    label: string
  }[]
}

export const NotFoundSpaces = ({
  details,
  subtitle = 'Please try again with different keywords or filters, or contact our team for assistance.',
  title = "We're sorry, but we couldn't find any spaces that match your search.",
}: NotFoundSpacesProps) => (
  <div className="flex flex-col items-center lg:m-0 m-4">
    <p className="w-[19.5rem] lg:w-[29.25rem] font-heading font-medium leading-1.3 text-24 lg:text-32 text-neutrals-900 mt-12 lg:mt-24 mb-4 lg:mb-6 text-center">
      {title}
    </p>
    <p className="w-[19.125rem] lg:w-[23.625rem] leading-1.5 text-14 lg:text-16 text-neutrals-700 mb-16 text-center">
      {subtitle}
    </p>
    {details && (
      <div className="flex flex-col items-center gap-6 mb-12">
        <div aria-hidden className="bg-secondary-700 w-12 h-1" />
        <div className="flex flex-col items-center lg:justify-center lg:flex-row lg:gap-16">
          {details.map(({ icon, label }, i) => (
            <div key={i} className="flex items-center h-10 leading-1.5 text-neutrals-700 text-14 lg:text-16">
              {icon && <AtIcon src={icon} className="shrink-0 w-10 h-10 p-2" />}
              <p className="font-bold">{label}</p>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
)
