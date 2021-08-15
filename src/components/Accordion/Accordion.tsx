import React from 'react'
import style from './Accordion.module.css'

export type AccordionType = {
  titleValue: string
  collapsed: boolean
  toggleCollapsed: () => void
  items: ItemType[]
  onAccordionItemClickHandler: (value: any) => void
}

type ItemType = {
  title: string
  value: any
}

type AccordionTitleType = {
  title: string
  callback: () => void
}

const AccordionTitle = ({ title, callback }: AccordionTitleType) => {
  return (
    <h3 className={style.title} onClick={callback}>
      {title}
    </h3>
  )
}

type AccordionBodyType = {
  items: ItemType[]
  onAccordionItemClickHandler: (value: any) => void
}

const AccordionBody = ({
  items,
  onAccordionItemClickHandler,
}: AccordionBodyType) => {
  const list = items.map((item, index) => (
    <li
      className={style.item}
      key={index}
      onClick={() => {
        onAccordionItemClickHandler(item.value)
      }}
    >
      {item.title}
    </li>
  ))

  return <ul>{list}</ul>
}

const Accordion = ({
  titleValue,
  collapsed,
  toggleCollapsed,
  items,
  onAccordionItemClickHandler,
}: AccordionType) => {
  return (
    <div>
      <div className={style.accordion}>
        <AccordionTitle title={titleValue} callback={toggleCollapsed} />
        {!collapsed && (
          <AccordionBody
            onAccordionItemClickHandler={onAccordionItemClickHandler}
            items={items}
          />
        )}
      </div>
    </div>
  )
}

export default Accordion
