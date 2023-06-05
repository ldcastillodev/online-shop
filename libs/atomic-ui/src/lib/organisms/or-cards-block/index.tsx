import { MlGeneralWorkspaceCard, MlGeneralWorkspaceCardProps } from '../../molecules'
import { MlSpaceCardProps } from '../../molecules/ml-space-card'
import { AtTabs, Tab } from '../../atoms'
import { Section } from '../or-flexible-block/index.components'
import { CardsCarousel } from './carousel'

export type OrCardsBlockProps = { title: string } & (
  | { type: 'space'; cards: (Omit<Tab, 'content'> & { content: MlSpaceCardProps[] })[] }
  | { type: 'workspace'; cards: MlGeneralWorkspaceCardProps[] }
)

export const OrCardsBlock = ({ title, type, cards }: OrCardsBlockProps) => {
  if (type === 'workspace') {
    return (
      <Section title={title}>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-7.5">
          {cards.map((card, i) => (
            <MlGeneralWorkspaceCard key={i} {...card} />
          ))}
        </div>
      </Section>
    )
  }

  return (
    <Section title={title}>
      <AtTabs
        hasButtons
        tabs={cards.map(({ content, ...tab }) => ({
          ...tab,
          content: <CardsCarousel cards={content} />,
        }))}
      />
    </Section>
  )
}
