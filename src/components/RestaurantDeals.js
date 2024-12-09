import React from 'react'

const RestaurantDeals = ({deals}) => {
  return (
    <div className=''>
      <div className='text-2xl font-bold mt-10'>Deals for you</div>
      <div className='flex gap-4 overflow-x-auto my-4'>{
        deals?.length > 0 && deals?.map((deal, index)=>{
          return <div key={index} className='flex p-3 font-bold border rounded-2xl min-w-80 mb-4 gap-4'>
            <span><img src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/'+deal?.info?.offerLogo}/></span>
            <div>
              <div>{deal?.info?.header}</div>
              <div className='text-gray-400'>ENDS IN 11h : 45m : 03s</div>
            </div>
          </div>
        })    
        }</div>
    </div>
  )
}

export default RestaurantDeals
