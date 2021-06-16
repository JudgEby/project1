import React, { useState } from 'react'
import style from './UncontrolledAccordion.module.css'

type AccordionType = {
  titleValue: string
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

const UncontrolledAccordion = ({ titleValue }: AccordionType) => {
  const [collapsed, setCollapsed] = useState<boolean>(true)
  return (
    <div>
      <div className={style.accordion}>
        <AccordionTitle
          title={titleValue}
          callback={() => setCollapsed(!collapsed)}
        />
        {!collapsed && <AccordionBody />}
      </div>
    </div>
  )
}

export default UncontrolledAccordion
