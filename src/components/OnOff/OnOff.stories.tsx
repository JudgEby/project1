import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'
import OnOff, { OnOffType } from './OnOff'

export default {
  title: 'OnOff',
  component: OnOff,
} as Meta

const Template: Story<OnOffType> = (args) => <OnOff {...args} />

export const On = Template.bind({})
On.args = {
  isOn: true,
  setIsOn: () => {},
}

export const Primary: Story<OnOffType> = (args) => {
  const [isOn, setIsOn] = useState<boolean>(true)
  return <OnOff {...args} isOn={isOn} setIsOn={setIsOn} />
}
