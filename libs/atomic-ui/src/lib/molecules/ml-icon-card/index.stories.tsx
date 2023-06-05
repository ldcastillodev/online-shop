import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MlIconCard } from './index'
import { useState } from 'react'

export default {
  title: 'Molecules/Icon Card',
  component: MlIconCard,
} as ComponentMeta<typeof MlIconCard>

const Template: ComponentStory<typeof MlIconCard> = ({ selected, ...args }) => {
  const [current, setCurrent] = useState(selected)
  return <MlIconCard selected={current} onClick={() => setCurrent((b) => !b)} {...args} />
}

export const Preview = Template.bind({})
Preview.args = {
  label: 'Label',
  icon: '/the-spiral.svg',
}

export const MultipleExample: ComponentStory<typeof MlIconCard> = (args) => {
  const [current, setCurrent] = useState('')
  return (
    <div className="flex gap-10">
      <MlIconCard
        selected={current === 'Spiral'}
        onClick={(v) => setCurrent(v)}
        {...args}
        icon="/the-spiral.svg"
        label="Spiral"
      />
      <MlIconCard
        selected={current === 'Grid'}
        onClick={(v) => setCurrent(v)}
        {...args}
        icon="/view-grid.svg"
        label="Grid"
      />
    </div>
  )
}
