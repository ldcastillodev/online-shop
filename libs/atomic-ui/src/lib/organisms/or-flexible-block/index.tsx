import { AtTabs, Tab } from '../../atoms'
import { MlDirections, MlDirectionsProps } from '../../molecules'
import { ImageBody, ImageBodyProps, Section, SectionBody, TextBody, TextBodyProps } from './index.components'
import { OrMapTile, OrMapTileProps } from '../or-map-tile'

export type FlexibleBlockContent = { description?: string } & (
  | ({ type: 'directions' } & ImageBodyProps & MlDirectionsProps)
  | ({ type: 'text' } & ImageBodyProps & TextBodyProps)
  | ({ type: 'map' } & OrMapTileProps)
)

export interface OrFlexibleBlockProps {
  title: string
  tabs: (Omit<Tab, 'content'> & {
    content: FlexibleBlockContent
  })[]
}

const parseContent = (tabs: OrFlexibleBlockProps['tabs']): Tab[] =>
  tabs.map(({ content, ...tab }) => {
    if (content.type === 'map')
      return {
        ...tab,
        content: (
          <SectionBody description={content.description}>
            <OrMapTile {...content} />
          </SectionBody>
        ),
      }

    return {
      ...tab,
      content: (
        <SectionBody description={content.description}>
          <ImageBody
            aspectRatio={content.aspectRatio}
            images={content.images}
            shortDescription={content.shortDescription}
          />
          {content.type === 'directions' ? (
            <MlDirections directions={content.directions} />
          ) : (
            <TextBody body={content.body} title={content.title} details={content.details} />
          )}
        </SectionBody>
      ),
    }
  })

export const OrFlexibleBlock = ({ tabs, title }: OrFlexibleBlockProps) => (
  <Section title={title}>
    <AtTabs tabs={parseContent(tabs)} />
  </Section>
)
