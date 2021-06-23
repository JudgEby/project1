import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'
import Accordion, { AccordionType } from './Accordion'

export default {
  title: 'Accordion',
  component: Accordion,
} as Meta

export const Primary: Story<AccordionType> = (args) => {
  const [collapsed, setCollapsed] = useState<boolean>(true)
  return (
    <Accordion
      {...args}
      titleValue={'Accordion'}
      collapsed={collapsed}
      toggleCollapsed={() => setCollapsed(!collapsed)}
    />
  )
}
