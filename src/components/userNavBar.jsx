import React, { useContext, useState } from 'react'
import { images } from '../assets/images'
import { Link } from 'react-router-dom';
import {  ShoppingBasket, User2 } from 'lucide-react';
import { StoreContext } from '../assets/context/storeContext';

const UserNavbar = () => {
  const [menu, setMenu] = useState("Home");
  const {getTotalCartAmount, useTotalCartAmount} = useContext(StoreContext)
  return (
    <div>
     <div className='padding flex justify-between items-center w-[80%] m-auto '>
      <Link to='/'>
        <img src={images.Logo} alt="Logo" className='logo h-8 w-[150px]' />
      </Link>
      <ul className='padding-menu flex list-none gap-[20px] text-green-950 text-[18px] cursor-pointer'>
      <Link to='menu'><li onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</li></Link>
      <Link to='user/orders'><li onClick={() => setMenu("Orders")} className={menu === "Orders" ? "active" : ""}>Orders</li></Link>
         <li onClick={() => setMenu("Contact-Us")} className={menu === "Contact-Us" ? "active" : ""}><a href='#footer'>Contact-Us</a></li>
      </ul>
      <ul className='padding-search relative flex gap-10'>
          <Link to='/cart'>
            <li><ShoppingBasket className='img' /></li>
          </Link>
          <li className={getTotalCartAmount()===0?"":"dot absolute min-w-[10px] min-h-[10px] bg-[#EA7519] rounded-full top-[-8px] right-[3rem]"}></li>
          <li> <User2 className='cursor-pointer'/></li>
        </ul>


       
     
    
    </div>



    </div>
  )
}

export default UserNavbar