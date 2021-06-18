import React, { CSSProperties } from 'react'

type RatingType = {
  value: number
  changeRatingHandler: (num: ValueType) => void
}

type StarType = {
  selected: boolean
  changeRatingHandler: () => void
}

type ValueType = number

const Star = ({ selected, changeRatingHandler }: StarType) => {
  const style: CSSProperties = {
    padding: '2px',
    marginRight: '10px',
    cursor: 'pointer',
    border: '1px solid blue',
    color: selected ? 'blue' : 'black',
    fontWeight: selected ? 'bold' : 'normal',
  }

  return (
    <span style={style} onClick={changeRatingHandler}>
      star
    </span>
  )
}

const Rating = ({ value, changeRatingHandler }: RatingType) => {
  const stars = Array(5)
    .fill('')
    .map((elem, idx) => {
      return (
        <Star
          key={idx}
          selected={idx < value}
          changeRatingHandler={() => changeRatingHandler(idx + 1)}
        />
      )
    })

  return <div>{stars}</div>
}

export default Rating
