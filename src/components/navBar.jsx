import React, { useState } from 'react';
import { images } from '../assets/images';
import { Search, ShoppingBasket } from 'lucide-react';
import { Link } from 'react-router-dom';

const NavBar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");

  return (
    <div className='padding flex justify-between items-center w-[80%] m-auto'>
      <a href='/'>
        <img src={images.Logo} alt="Logo" className='logo h-8 w-[150px]' />
      </a>
      <ul className='padding-menu flex list-none gap-[20px] text-green-950 text-[18px] cursor-pointer'>
        <li onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</li>
        <li onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</li>
        <li onClick={() => setMenu("Contact-Us")} className={menu === "Contact-Us" ? "active" : ""}>Contact-Us</li>
      </ul>
      <div className='padding-right flex items-center gap-[40px]'>
        <Search className='img' />
        <div className='padding-search relative'>
          <a href='/cart'>
            <ShoppingBasket className='img' />
          </a>
          <div className='dot absolute min-w-[10px] min-h-[10px] bg-[#EA7519] rounded-full top-[-8px] right-[-8px]'></div>
        </div>
        <button onClick={() => setShowLogin(true)} className='bg-transparent text-[16px] text-green-950 border-[1px] border-solid p-2 border-r[50px] cursor-pointer rounded-full hover:bg-[#EA7519] transition-[0.5s]'>sign in</button>
      </div>
    </div>
  );
}

export default NavBar;
