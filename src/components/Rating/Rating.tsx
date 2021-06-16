import React, { CSSProperties } from 'react'

type StarType = {
  selected: boolean
}

type RatingType = {
  value: 0 | 1 | 2 | 3 | 4 | 5
}

const Star = ({ selected }: StarType) => {
  const style: CSSProperties = {
    padding: '2px',
    marginRight: '10px',
    cursor: 'pointer',
    border: '1px solid blue',
    color: selected ? 'blue' : 'black',
    fontWeight: selected ? 'bold' : 'normal',
  }

  const star = selected ? <b>star</b> : 'star'
  return <span style={style}>{star} </span>
}
const Rating = ({ value = 0 }: RatingType) => {
  const stars = Array(5)
    .fill('')
    .map((elem, idx) => <Star key={idx} selected={idx < value} />)

  return <div>{stars}</div>
}

export default Rating
