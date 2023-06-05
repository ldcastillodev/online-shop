import { sectionBorders } from '../or-flexible-block/index.components'

export interface SimpleText {
  title: string
  subtitle: string
}

export interface OrSimpleTextBlockProps {
  mainTitle: string
  mainSubtitle: string
  contents: [SimpleText, SimpleText?, SimpleText?]
}

export const OrSimpleTextBlock = ({ mainTitle, mainSubtitle, contents }: OrSimpleTextBlockProps) => (
  <section className={sectionBorders}>
    <div className="flex flex-col items-start lg:w-[44.3rem]">
      <h2 className="text-neutrals-900 font-bold mb-4 lg:mb-6 text-32 font-heading leading-1.3">{mainTitle}</h2>
      <p className="text-neutrals-700 text-14 lg:text-16 leading-1.5">{mainSubtitle}</p>
    </div>
    <div className="flex flex-col lg:flex-row lg:justify-between items-start mt-10 w-full">
      {contents.slice(0, 3).map((content, index) => (
        <div key={index} className={`flex flex-col items-start ${index === contents.length - 1 ? '' : 'lg:mr-8'}`}>
          <h3 className="text-neutrals-800 font-bold mb-2 text-16 leading-1.3">{content?.title}</h3>
          <p className="text-neutrals-700 mb-6 text-14 leading-1.5">{content?.subtitle}</p>
          <div className={`${index === contents.length - 1 ? '' : 'mb-12'}`}>
            <div className="h-0.5 w-12 bg-secondary-700" />
          </div>
        </div>
      ))}
    </div>
  </section>
)
