import React, { useState } from 'react'
import { images } from '../assets/images'
import { Search, ShoppingBasket } from 'lucide-react'

const NavBar = () => {
    const [menu, setMenu] = useState("Home")
  return (

    <div className=' padding flex justify-between items-center'>
        <img src={images.Logo} alt="" className='w-[10 rem] h-8 w-[150px]'/>
        <ul className='flex list-none gap-[20px] text-green-950 text-[18px] cursor-pointer'>
            <li  onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</li>
            <li onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</li>
            <li onClick={()=>setMenu("Contact-Us")} className={menu=="Contact-Us"?"active":""}>Contact-Us</li>
        </ul>
        <div className='flex items-center gap-[40px]'>
            <Search/>
            <div className='relative'>
                <ShoppingBasket/>
                <div className='absolute min-w-[10px] min-h-[10px] bg-[#EA7519] rounded-full top-[-8px] right-[-8px] '></div>
                </div>
                <button className='bg-transparent text-[16px] text-green-950 border-[1px] border-solid  p-2 border-r[50px] cursor-pointer  rounded-full hover:bg-[#EA7519] transition-[0.5s]'>sign in</button>
           
        </div>
    </div>
  )
}

export default NavBar