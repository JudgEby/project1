import React, { useState } from 'react'
import style from './Accordion.module.css'

type AccordionType = {
  titleValue: string
  collapsed: boolean
  toggleCollapsed: () => void
}

type AccordionTitleType = {
  title: string
  callback: () => void
}

const AccordionTitle = ({ title, callback }: AccordionTitleType) => {
  return <h3 onClick={callback}>{title}</h3>
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

const Accordion = ({
  titleValue,
  collapsed,
  toggleCollapsed,
}: AccordionType) => {
  return (
    <div>
      <div className={style.accordion}>
        <AccordionTitle title={titleValue} callback={toggleCollapsed} />
        {!collapsed && <AccordionBody />}
      </div>
    </div>
  )
}

export default Accordion
