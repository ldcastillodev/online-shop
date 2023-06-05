import { ComponentMeta, ComponentStory } from '@storybook/react'
import { OrFilterSection } from './index'
import { Medium as SpaceCard } from '../../molecules/ml-space-card/index.stories'
import { MlSpaceCardProps } from '../../molecules/ml-space-card'
import { useEffect, useState } from 'react'
import { initialFilterState } from './configurations'

export default {
  title: 'Organisms/Filter Section',
  component: OrFilterSection,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof OrFilterSection>

const Template: ComponentStory<typeof OrFilterSection> = (args) => {
  const [state, setState] = useState(args.state)

  useEffect(() => {
    const id = setTimeout(() => setState((s) => ({ ...s, loading: false })), 2000)
    return () => clearTimeout(id)
  }, [])

  return (
    <OrFilterSection
      {...args}
      state={state}
      onChange={(change) => {
        if ('type' in change && change.type !== state?.type) {
          // invalidate data (other types may have different values)
          setState({ type: change.type })
        } else setState((s) => ({ ...s, ...change }))
      }}
    />
  )
}

const cardProps = SpaceCard.args as MlSpaceCardProps

export const Preview = Template.bind({})
Preview.args = {
  title: 'Studio Spaces at The Spiral',
  state: initialFilterState,
  results: Array.from({ length: 12 }, () => cardProps),
}

export const NoResults = Template.bind({})
NoResults.args = {
  ...Preview.args,
  results: undefined,
}
