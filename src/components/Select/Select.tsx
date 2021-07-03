import React, { KeyboardEvent, useState } from 'react'
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
  const [hoveredElement, setHoveredElement] = useState(value)

  const hoveredItem = items.find((item) => item.valueArr === hoveredElement)

  const getOptions = () => {
    if (!collapsed && items) {
      return (
        <>
          <div
            className={`${style.item} ${style.none}`}
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
                className={`${style.item} ${
                  hoveredItem === item ? style.highlighted : ''
                }`}
                key={idx}
                onMouseEnter={() => setHoveredElement(item.valueArr)}
                onMouseLeave={() => setHoveredElement(null)}
                onClick={() => {
                  onChange(item.valueArr)
                  setHoveredElement(item.valueArr)
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

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const step = e.key === 'ArrowUp' ? -1 : e.key === 'ArrowDown' ? 1 : null
    const selectedNow = items.findIndex((item) => item.valueArr === value)
    if (step) {
      const changeByStep = () => {
        onChange(items[selectedNow + step].valueArr)
        setHoveredElement(items[selectedNow + step].valueArr)
      }
      if (step === 1) {
        if (selectedNow === -1 || selectedNow === items.length - 1) {
          onChange(items[0].valueArr)
          setHoveredElement(items[0].valueArr)
        } else {
          changeByStep()
        }
      } else {
        if (selectedNow === -1 || selectedNow === 0) {
          onChange(items[items.length - 1].valueArr)
          setHoveredElement(items[items.length - 1].valueArr)
        } else {
          changeByStep()
        }
      }
    }

    if (e.key === 'Enter') {
      if (!collapsed) {
        onChange(items[selectedNow].valueArr)
        setHoveredElement(items[selectedNow].valueArr)
      }

      setCollapsed(!collapsed)
    }
  }

  return (
    <div className={style.select} onKeyDown={onKeyDown} tabIndex={0}>
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
