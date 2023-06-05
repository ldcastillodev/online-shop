import { ComponentMeta, ComponentStory } from '@storybook/react'
import { OrSecondaryNavbarBdp } from './bdp'
import { AtButtonDimensions, AtButtonTypes } from '../../types'

export default {
  title: 'Organisms/Secondary Navbar (BDP)',
  component: OrSecondaryNavbarBdp,
} as ComponentMeta<typeof OrSecondaryNavbarBdp>

const Template: ComponentStory<typeof OrSecondaryNavbarBdp> = (args) => (
  <div className="flex justify-center">
    <div className="container flex flex-col gap-4">
      <div className="w-full h-[800px] bg-neutrals-200 rounded-8 flex justify-center items-center">Content</div>
      <OrSecondaryNavbarBdp {...args} />
      <div id="section-1" className="w-full h-[600px] bg-neutrals-200 rounded-8 flex justify-center items-center">
        Section 1
      </div>
      <div id="section-2" className="w-full h-[600px] bg-neutrals-200 rounded-8 flex justify-center items-center">
        Section 2
      </div>
      <div id="section-3" className="w-full h-[600px] bg-neutrals-200 rounded-8 flex justify-center items-center">
        Section 3
      </div>
      <div id="section-4" className="w-full h-[600px] bg-neutrals-200 rounded-8 flex justify-center items-center">
        Section 4
      </div>
    </div>
  </div>
)

export const Preview = Template.bind({})
Preview.args = {
  links: [
    { label: 'Section 1', href: '#section-1' },
    { label: 'Section 2', href: '#section-2' },
    { label: 'Section 3', href: '#section-3' },
    { label: 'Section 4', href: '#section-4' },
  ],
  button: {
    title: 'Book a tour',
    type: AtButtonTypes.SECONDARY,
    size: AtButtonDimensions.LARGE,
  },
}
