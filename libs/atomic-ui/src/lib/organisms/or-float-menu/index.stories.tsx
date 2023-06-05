import { ComponentMeta, ComponentStory } from '@storybook/react'
import { OrFloatMenu } from './index'
import { Preview as bottomSheet } from '../or-bottom-sheet/index.stories'
import { useState } from 'react'
import { SortOption } from '../or-bottom-sheet'

export default {
  title: 'Organisms/Float Menu',
  component: OrFloatMenu,
} as ComponentMeta<typeof OrFloatMenu>

const Template: ComponentStory<typeof OrFloatMenu> = (args) => {
  const [option, setOption] = useState<SortOption>(args.options?.[2])

  return (
    <div className="flex justify-between items-center w-full max-w-screen-md">
      Desktop only
      <OrFloatMenu {...args} selected={option} onSelect={setOption} />
    </div>
  )
}

export const Preview = Template.bind({})
Preview.args = {
  options: bottomSheet.args?.options,
}
