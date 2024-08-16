import { Dot } from 'lucide-react'
import React from 'react'
import breakfast from "../assets/images/lasagna.jpeg"

const UserOrdersTile = () => {
  return (
    <div className='flex flex-col bg-gray-100 rounded-lg m-10 pt-5 shadow shadow-orange-50 mb-3'>
        <div className="hidden sm:grid grid-cols-5 font-medium px-4 sm:px-20 text-[17px] text-gray-900">
        <span>Item</span>
        <span>Vendor</span>
        <span>Delivery details</span>
        <span>Price</span>
        <span className="flex"> <Dot className="size-10 text-[#EA7519] animate-pulse mt-[-0.5rem] "/> Status</span>
      </div>
      <hr className="hidden sm:block h-[0.5px] bg-gray-100" />

      <div className="flex flex-col sm:grid sm:grid-cols-5 items-center py-4 px-4 sm:px-20 text-[15px] space-y-4 sm:space-y-0 text-gray-800">
        <div className='flex flex-col gap-2'><img src={breakfast} alt="Lasagna" className="w-[100px] h-[60px] object-cover col-span-1" /><span className="w-[150px] ">Mango Smoothie </span></div>
        <span className="w-[150px] ">Food Boutique </span>
        <span className="w-full sm:w-auto sm:flex-1 text-center sm:text-left col-span-1">Pokuase SDA <br /> Accra</span>
        <span className="w-full sm:w-auto sm:flex-1 text-center sm:text-left col-span-1">GH₵ 20</span>
       <span className='text-[#EA7519]'>Preparing order</span>
      </div>
    </div>
    
  )
}

export default UserOrdersTile