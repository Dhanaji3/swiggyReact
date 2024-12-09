import React from 'react'
import { BASEIMGURL} from '../utils/constant'

const Food = ({info}) => {
   const imageId = info?.card?.card?.imageGridCards?.info
  return (
    <div className='flex overflow-auto '> {
      imageId?.map((img)=>{
        return <div className='p-2 w-full'>
           <img className='w-36 h-44 max-w-none cursor-pointer' src={BASEIMGURL + img.imageId} alt="pic" />
          </div>
      })
      }</div>
  )
} 

export default Food