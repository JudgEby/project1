import React, { CSSProperties, useState } from 'react'

type StarType = {
  selected: boolean
  callback: () => void
}

type ValueType = number

const Star = ({ selected, callback }: StarType) => {
  const style: CSSProperties = {
    padding: '2px',
    marginRight: '10px',
    cursor: 'pointer',
    border: '1px solid blue',
    color: selected ? 'blue' : 'black',
    fontWeight: selected ? 'bold' : 'normal',
  }

  return (
    <span style={style} onClick={callback}>
      star
    </span>
  )
}

const UncontrolledRating = () => {
  const [value, setValue] = useState<ValueType>(0)

  const starClickHandler = (value: ValueType) => {
    setValue(value)
  }

  const stars = Array(5)
    .fill('')
    .map((elem, idx) => {
      return (
        <Star
          key={idx}
          selected={idx < value}
          callback={() => starClickHandler(idx + 1)}
        />
      )
    })

  return <div>{stars}</div>
}

export default UncontrolledRating
