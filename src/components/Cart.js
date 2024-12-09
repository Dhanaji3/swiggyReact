import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
  const cartData = useSelector((state)=> state.cart.cartPayload)
  const resturantDetail = useSelector((state)=> state.cart.resturantDetail)
  console.log("cartData",cartData)
  console.log("resturantDetail",resturantDetail)
  return (
    <div className='bg-gray-200 min-w-full h-screen text-right'>
      ssss
    </div>
  )
}

export default Cart
