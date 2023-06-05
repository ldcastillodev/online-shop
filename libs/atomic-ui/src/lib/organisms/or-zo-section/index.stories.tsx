import { ComponentMeta, ComponentStory } from '@storybook/react'
import { OrZoSection } from '.'

export default {
  title: 'Organisms/Zo Section',
  component: OrZoSection,
} as ComponentMeta<typeof OrZoSection>

const Template: ComponentStory<typeof OrZoSection> = (args) => (
  <div className="bg-zocolors-background w-full h-full absolute top-0 right-0 left-0 bottom-0">
    <div className="px-4 py-8">
      <OrZoSection {...args} />
    </div>
  </div>
)

export const ContentBlock = Template.bind({})
ContentBlock.args = {
  logo: {
    src: 'logo-zo.svg',
    alt: 'Zo by Tishman Speyer',
  },
  title: 'Meet every new day with ZO Make every day excellent',
  subTitle:
    'ZO is Tishman Speyer’s global amenities network, providing members with access to our world-class spaces, services, and experiences.',
  label: 'See more',
  backgroundImage: {
    src: '/zoimage.png',
    alt: 'Zo by Tishman Speyer',
  },
}
