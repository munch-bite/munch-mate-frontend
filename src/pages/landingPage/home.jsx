import React from 'react'
import { images } from '../../assets/images'
const Home = () => {
  return (
    <div className='h-[34vw] mx-auto my-[30px] header flex gap-10 p-10 bg-[#F4ECE1] justify-center rounded-[1rem]'>

        <div className=' gap-[1.5vw] max-w-[50%] pt-20 '>
          <h2 className='font-bold text-4xl antialiased text-gray-900'>Order your favourite <span className='text-[#EA7519]'>food here</span></h2>
          <p className='antialiased text-xl text-gray-500 pt-10 '>Choose from a diverse menu ranging from local dishes and fast foods </p>
          <button className='bg-gray-800 shadow-lg shadow-gray-850 text-[#F4ECE1] text-xl rounded-[5rem] h-14 p-4 flex justify-center items-center mt-10'>View Menu</button>

        </div>

        <img src={images.HomeImg} alt="home image" />
      </div>
  )
}

export default Home