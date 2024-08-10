import React, { useContext } from 'react'
import { StoreContext } from '../../assets/context/storeContext'

const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext)
  return (
   <form className='w-[80%] m-auto flex items-start justify-between gap-[150px] mt-[100px]'>
    <div className='place-order-left w-[100%]'>
      <p className='title text-[30px] font-semibold mb-[50px]'>Delivery Information</p>
      <div className='flex gap-[10px]'>
       <input type="text" placeholder='First name'/>
       <input type="text" placeholder='Last name'/>
      </div>
      <input type="email" placeholder='Email address'/>
      <input type="text" placeholder='Street'/>
      <div className='flex gap-[10px]'>
       <input type="text" placeholder='City'/>
       <input type="text" placeholder='State'/>
      </div>
      <div className='flex gap-[10px]'>
       <input type="text" placeholder='Zip code'/>
       <input type="text" placeholder='Country'/>
      </div>
      <input type="text" placeholder='Phone' />
    </div>
    <div className='place-order-right w-[100%]'>
    <div className="cart-total flex-1 flex flex-col gap-[20px]">
          <h2 className='font-semibold'>Cart Totals</h2>
          <div>
          <div className="total-details flex justify-between text-[#555]">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="total-details flex justify-between text-[#555]">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="total-details flex justify-between text-[#555]">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button className="border-none bg-[#EA7519] cursor-pointer text-white rounded-[4px] mt-[30px]">PROCEED TO PAYMENT</button>
        </div>
    </div>
   </form>
  )
}

export default PlaceOrder