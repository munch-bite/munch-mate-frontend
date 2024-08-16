import React from 'react'
import breakfast from "../assets/images/lasagna.jpeg"
import {XCircle } from 'lucide-react'

const FoodTile = () => {
  return (
    <div className='flex flex-col gap-y-3 w-[20%] rounded-lg shadow shadow-slate-400 relative'>
        <img src={breakfast} alt="" className='w-fit '/>
        <XCircle className='text-red-700 size-5 absolute top-1 left-40 bg-white rounded-full '/>
        <div className='p-3 flex flex-col justify-center items-center gap-y-3'>
        <span>name</span>
        <span>desciption</span>
        <span>GH₵ 30</span>
        </div>
    </div>
  )
}

export default FoodTile