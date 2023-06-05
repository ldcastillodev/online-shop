import { ComponentMeta, ComponentStory } from '@storybook/react'
import { OrContentBlockF } from './content-block-f'

export default {
  title: 'Organisms/Content Block F',
  component: OrContentBlockF,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof OrContentBlockF>

const Template: ComponentStory<typeof OrContentBlockF> = (args) => (
  <div className="py-12">
    <OrContentBlockF {...args} />
  </div>
)

export const Preview = Template.bind({})
Preview.args = {
  title: 'Safety and Security',
  body: [
    {
      _key: '1eed916b6899',
      _type: 'block',
      children: [
        {
          _key: '55341e3a2e89',
          _type: 'span',
          marks: [],
          text: 'At Studio by Tishman Speyer, safety and security are top priorities. We take every precaution to ensure that our members and their belongings are safe and secure at all times.',
        },
      ],
      markDefs: [],
      style: 'normal',
    },
    {
      _key: 'c209beb98803',
      _type: 'block',
      children: [
        {
          _key: 'fb1f064fec5d',
          _type: 'span',
          marks: [],
          text: 'All guests must be registered in advance of their visit. Guest information is kept confidential and is not used to send any marketing emails and will not be shared with a 3rd party.',
        },
      ],
      markDefs: [],
      style: 'normal',
    },
    {
      _key: '6b4b601830f1',
      _type: 'block',
      children: [
        {
          _key: '70ea1fba908d',
          _type: 'span',
          marks: [],
          text: 'Upon entering The Spiral, all guests will be required to pass through security gates. Guests may use the QR code sent via email',
        },
      ],
      markDefs: [],
      style: 'normal',
    },
    {
      _key: '49d4d7864d21',
      _type: 'block',
      children: [
        {
          _key: '86f935bf92e5',
          _type: 'span',
          marks: [],
          text: 'The Spiral is equipped with 24/7 surveillance cameras, access control systems, and fire safety equipment to protect against any emergencies. Our staff are trained to handle any security concerns and are always available to assist with any issues. We also have clear emergency procedures in place and conduct regular safety drills to ensure that our members are well-prepared in the event of an emergency. We take great pride in providing a safe and secure environment for our members to work and thrive in.',
        },
      ],
      markDefs: [],
      style: 'normal',
    },
  ],
  imageOne: {
    src: '/bailey-zindel-NRQV-hBF10M-unsplash.jpg',
    alt: 'Alternative text',
  },
  imageTwo: {
    src: '/mohammad-alizade-62t_kKa2YlA-unsplash.jpg',
    alt: 'Alternative text',
  },
}
