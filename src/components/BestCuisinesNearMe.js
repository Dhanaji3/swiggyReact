import React from 'react'

const BestCuisinesNearMe = ({brands}) => {
  const {text, link} = brands
  return (
    <div className='grid grid-cols-4 gap-8'>
      {
        brands && brands?.map((brand)=>{
          const {text, link } = brand
          return (
            <div className='border-2 p-4 text-center rounded-2xl text-sm font-bold text-gray-700 cursor-pointer'>
              {text}
            </div>
          )
        })
      }
    </div>
  )
}

export default BestCuisinesNearMe