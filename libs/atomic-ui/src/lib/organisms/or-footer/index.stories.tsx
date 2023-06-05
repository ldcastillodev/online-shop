import { ComponentMeta, ComponentStory } from '@storybook/react'
import { OrFooter } from './index'
import { ArrowTr, Facebook, Instagram, LinkedIn } from 'iconoir-react'

export default {
  title: 'Organisms/Footer',
  component: OrFooter,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof OrFooter>

const Template: ComponentStory<typeof OrFooter> = (args) => <OrFooter {...args} />

export const Preview = Template.bind({})
Preview.args = {
  copyright: '(C) 2023 Tishman Speyer. All Rights Reserved.',
  logo: {
    src: '/logo-white.svg',
    alt: 'Studio by Tishman Speyer',
  },
  links: [
    {
      title: 'Book a Space at The Spiral',
      actionTarget: '#',
    },
    {
      title: "Visitor's Guide",
      actionTarget: '#',
    },
    {
      title: 'Tishman Speyer',
      actionTarget: '#',
      IconRightRef: ArrowTr,
    },
    {
      title: 'NYC Studio Locations',
      actionTarget: '#',
    },
    {
      title: 'Book a Tour',
      actionTarget: '#',
    },
    {
      title: 'Contact Us',
      actionTarget: '#',
    },
  ],
  socialLinks: [
    {
      actionTarget: '#instagram',
      IconLeftRef: Instagram,
      ariaLabel: 'Instagram',
    },
    {
      actionTarget: '#facebook',
      IconLeftRef: Facebook,
      ariaLabel: 'Facebook',
    },
    {
      actionTarget: '#linkedin',
      IconLeftRef: LinkedIn,
      ariaLabel: 'LinkedIn',
    },
  ],
  secondaryLinks: [
    {
      title: 'Terms of Use',
      actionTarget: '#terms',
    },
    {
      title: 'Privacy Policy',
      actionTarget: '#privacy-policy',
    },
    {
      title: 'Sitemap',
      actionTarget: '#sitemap',
    },
  ],
  contact: [
    {
      _key: 'd01bd522d41e',
      _type: 'block',
      children: [
        {
          _key: '515bd8fd3420',
          _type: 'span',
          marks: ['strong'],
          text: 'CONTACT',
        },
      ],
      markDefs: [],
      style: 'normal',
    },
    {
      _key: '1eed916b6899',
      _type: 'block',
      children: [
        {
          _key: '55341e3a2e89',
          _type: 'span',
          marks: [],
          text: '',
        },
      ],
      markDefs: [],
      style: 'normal',
    },
    {
      _key: '0d4eb58cf883',
      _type: 'block',
      children: [
        {
          _key: '033ae375a671',
          _type: 'span',
          marks: ['strong'],
          text: 'General Inquiries',
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
          text: 'info@youstudio.com',
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
          text: '212-523-0850',
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
          text: '',
        },
      ],
      markDefs: [],
      style: 'normal',
    },
    {
      _key: 'a59b261e363d',
      _type: 'block',
      children: [
        {
          _key: '874c6391208f',
          _type: 'span',
          marks: ['strong'],
          text: 'Brokers',
        },
      ],
      markDefs: [],
      style: 'normal',
    },
    {
      _key: '03a203b91799',
      _type: 'block',
      children: [
        {
          _key: '52cd9cc3f9fd0',
          _type: 'span',
          marks: ['455f76463e83'],
          text: 'brokers@yourstudio.com',
        },
      ],
      markDefs: [
        {
          _type: 'link',
          _key: '455f76463e83',
          href: 'mailto:brokers@yourstudio.com',
        },
      ],
      style: 'normal',
    },
  ],
}
