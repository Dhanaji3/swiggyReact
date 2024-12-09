import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { removeFromCart, isPopupOpen } from '../store/CartSlice'

const CustomisablePopup = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state?.cart?.cartPayload);
  const isPopup = useSelector((state)=> state.cart.isPopup)
  console.log("cart---",cart)
  const selected = cart[cart?.length - 1]
  console.log('selected', selected)
  const groups = selected?.variantsV2?.variantGroups
  const addOns = selected?.addons
  const removeItem=()=>{
    dispatch(isPopupOpen(false))
    dispatch(removeFromCart(selected))
  }
  return (
   <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>
    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
       
        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl">
          <div className="bg-gray-100 px-3 pb-3 pt-3 sm:p-3 sm:pb-3">
              <div className="mt-3 text-center sm:mt-0 sm:text-left">
                <h3 className="text-lg font-bold text-gray-900" id="modal-title">Customise as per your taste
                </h3>
                {
                 groups && groups?.map((group) => {
                    const {name, variations} = group
                    return(
                      <>
                    <div className='font-bold text-sm my-4 border-t-2 pt-4'>{name}</div>
                      <div className='bg-white rounded-xl p-4'>
                   {variations && variations?.map((v)=>{
                   return( <div className='flex justify-between w-full mb-2 font-semibold text-gray-600 '>
                      {v.name}
                      <input className="checked:border-indigo-500 w-4" type="radio" name={name} checked />
                    </div> )
                    }) }    
                </div>
                  </>
                  )    
                  })
                }
                {
                   addOns.map((item) => {
                    const {groupName, choices} = item
                    return(
                      <>
                    <div className='font-bold text-base my-4 border-t-2 pt-4'>{groupName}</div>
                      <div className='bg-white rounded-xl p-4'>
                   { choices && choices.map((v)=>{
                   return( <div className='flex justify-between w-full mb-2 font-semibold text-gray-600'>
                      {v?.name}
                      <div className='flex gap-4'>
                      {v?.price && <div>+₹{v?.price/100}</div>}
                      <input className="checked:border-indigo-500 w-4" type="checkbox" name="status"  />
                      </div>
                    </div> )
                    }) }    
                </div>
                  </>
                  )
                   
                  })
                }
              </div>
           
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:flex  sm:px-6">
          <button className="inline-flex w-full justify-center rounded-md bg-gray-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-grey-700 sm:ml-3 sm:w-auto" onClick={(e)=>removeItem()}>Cancel</button>
            <button type="button" className="inline-flex w-full justify-center rounded-md bg-green-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 sm:ml-3 sm:w-auto">Continue</button>
          </div>
        </div>
      </div>
    </div>
  </div>
 
  )
}

export default CustomisablePopup

 