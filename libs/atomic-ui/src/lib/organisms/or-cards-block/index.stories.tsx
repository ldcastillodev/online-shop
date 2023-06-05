import { ComponentMeta, ComponentStory } from '@storybook/react'
import { OrCardsBlock } from './index'
import { MultipleImages as WorkspaceCard } from '../../molecules/ml-general-workspace-card/index.stories'
import { Small as SpaceCard } from '../../molecules/ml-space-card/index.stories'
import { MlGeneralWorkspaceCardProps } from '../../molecules'
import { MlSpaceCardProps } from '../../molecules/ml-space-card'

export default {
  title: 'Organisms/Cards Block',
  component: OrCardsBlock,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    type: {
      control: false,
    },
  },
} as ComponentMeta<typeof OrCardsBlock>

const Template: ComponentStory<typeof OrCardsBlock> = (args) => <OrCardsBlock {...args} />

const workspaceProps = WorkspaceCard.args as MlGeneralWorkspaceCardProps
const spaceProps = SpaceCard.args as MlSpaceCardProps

export const WorkspaceCards = Template.bind({})
WorkspaceCards.args = {
  title: 'Section title',
  type: 'workspace',
  cards: [workspaceProps, workspaceProps],
}

export const SpaceCards = Template.bind({})
SpaceCards.args = {
  title: 'Section title',
  type: 'space',
  cards: Array(4).fill({ label: 'Label', content: Array(6).fill(spaceProps) }),
}
