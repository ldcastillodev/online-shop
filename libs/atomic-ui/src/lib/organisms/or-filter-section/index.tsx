import { MlSpaceCardProps } from '../../molecules/ml-space-card'
import { Filter, FilterProps } from './filter'
import { AtButton } from '../../atoms'
import { AtButtonDimensions, AtButtonTypes } from '../../types'
import { NavArrowRight } from 'iconoir-react'
import { NotFoundSpaces, NotFoundSpacesProps } from './not-found-spaces'
import { CardsCarousel } from '../or-cards-block/carousel'

export interface OrFilterSectionProps extends Omit<FilterProps, 'withButtonSpace'> {
  title: string
  results?: MlSpaceCardProps[]
  buttonLabel?: string
  buttonAction?: () => void
  notFoundBlock?: NotFoundSpacesProps
}

export const OrFilterSection = ({
  buttonAction,
  buttonLabel = 'View all spaces at the Spiral',
  onChange,
  results,
  spaceLabel,
  state,
  title,
  notFoundBlock,
}: OrFilterSectionProps) => (
  <section className="py-12 lg:py-20 lg:px-[10.4375rem] lg:max-w-screen-lg lg:mx-auto">
    <h2 className="px-4 lg:px-0 mb-4 lg:mb-6 font-heading font-medium text-32 leading-1.3 text-neutrals-900">
      {title}
    </h2>
    <Filter spaceLabel={spaceLabel} state={state} onChange={onChange} withButtonSpace />
    {results || state?.loading ? (
      <CardsCarousel
        cards={results}
        loading={state?.loading}
        size="small"
        buttonPositioning="right-3 -top-14"
        slideClassName="py-4 px-4 lg:first:pl-0"
        spaceBetween={0}
      />
    ) : (
      <NotFoundSpaces {...notFoundBlock} />
    )}
    <div className="pl-4 lg:pl-0">
      <AtButton
        type={AtButtonTypes.TERTIARY}
        size={AtButtonDimensions.LARGE}
        IconRightRef={NavArrowRight}
        iconRightClasses="hidden lg:block"
        className="pl-0 lg:pl-4"
        title={buttonLabel}
        onClick={buttonAction}
      />
    </div>
  </section>
)
