import React from 'react'
import VendorOrderTile from '../../components/vendorOrderTile'

const Orders = () => {
  return (
    <div className="w-full flex flex-col pt-10  mx-2">
      <p className="text-center pb-5 text-[18px] text-gray-900 font-semibold">Orders Received</p>

      <VendorOrderTile/>
      <VendorOrderTile/>



    </div>
  )
}

export default Orders