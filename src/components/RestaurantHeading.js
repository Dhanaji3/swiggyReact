import React from 'react'

const RestaurantsHeading = ({heading}) => {
  const {text} = heading
  return (
    <div className='font-bold text-2xl mt-5'>{text}</div>
  )
}

export default RestaurantsHeading