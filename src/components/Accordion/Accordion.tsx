import React from 'react'

type AccordionType = {
  titleValue: string
  collapsed?: boolean
}

type AccordionTitleType = {
  title: string
}

const AccordionTitle = ({ title }: AccordionTitleType) => {
  return <h3>{title}</h3>
}

const AccordionBody = () => {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )
}

const Accordion = ({ titleValue, collapsed = true }: AccordionType) => {
  return (
    <div>
      <AccordionTitle title={titleValue} />
      {!collapsed && <AccordionBody />}
    </div>
  )
}

export default Accordion
