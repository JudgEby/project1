import React, { useState } from 'react'
import style from './Select.module.css'

export type SelectType = {
  value: any
  items: ItemType[]
  onChange: (value: any) => void
}

export type ItemType = {
  title: string
  valueArr: string
}

export const Select = ({ value, items, onChange }: SelectType) => {
  const [collapsed, setCollapsed] = useState<boolean>(true)

  const getOptions = () => {
    if (!collapsed && items) {
      return (
        <>
          <div
            className={style.item}
            onClick={() => {
              onChange(null)
              setCollapsed(!collapsed)
            }}
          >
            none
          </div>
          {items.map((item, idx) => {
            return (
              <div
                className={style.item}
                key={idx}
                onClick={() => {
                  onChange(item.valueArr)
                  setCollapsed(!collapsed)
                }}
              >
                {item.title}
              </div>
            )
          })}
        </>
      )
    }
  }

  const selectedItem = () => {
    const titleObj = items.find((item) => item.valueArr === value)

    return titleObj ? titleObj.title : 'chose option'
  }

  return (
    <div className={style.select}>
      <div
        className={style.title}
        onBlur={() => !collapsed && setCollapsed(!collapsed)}
        onClick={() => setCollapsed(!collapsed)}
      >
        {selectedItem()}
      </div>

      {!collapsed && <div className={style.items}>{getOptions()}</div>}
    </div>
  )
}
