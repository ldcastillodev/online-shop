import { MlIllustratedCardProps, MlIllustratedCard } from '../../molecules/ml-illustrated-card'

export interface OrContentBlockHProps {
  title: string
  text: string
  content: MlIllustratedCardProps[]
}

export const OrContentBlockH = ({ title, text, content }: OrContentBlockHProps) => {
  return (
    <section className="lg:max-w-screen-lg mx-auto">
      <div className="lg:flex">
        <div className="lg:w-5/12 lg:pr-10 lg:relative">
          <div className="lg:sticky lg:top-8">
            <div className="mb-8">
              <div className="h-1 w-12 bg-secondary-700" />
            </div>
            <div className="pr-16 mb-4 lg:mb-6 lg:pr-0">
              <h2 className="text-neutrals-900 font-medium text-32 font-heading">{title}</h2>
            </div>
            <div className="mb-8 lg:mb-0">
              <p className="text-neutrals-700 text-14 lg:text-16">{text}</p>
            </div>
          </div>
        </div>
        <div className="lg:w-7/12">
          <div className="flex flex-col lg:flex-row lg:flex-wrap">
            {content.map((item, index) => (
              <div className="mb-4 w-full lg:w-5/12 lg:mr-8">
                <MlIllustratedCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
