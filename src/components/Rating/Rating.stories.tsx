import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'
import Rating, { RatingType } from './Rating'

export default {
  title: 'Rating',
  component: Rating,
} as Meta

export const Primary: Story<RatingType> = (args) => {
  const [ratingValue, setRatingValue] = useState<number>(0)
  return (
    <Rating
      {...args}
      value={ratingValue}
      changeRatingHandler={setRatingValue}
    />
  )
}
