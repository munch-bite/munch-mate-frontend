import React, { useContext, useState } from 'react';
import { images } from '../assets/images';
import { Search, ShoppingBasket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../assets/context/storeContext';

const NavBar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");
  const {getTotalCartAmount, useTotalCartAmount} = useContext(StoreContext)

  return (
    <div className='padding flex justify-between items-center w-[80%] m-auto'>
      <Link to='/'>
        <img src={images.Logo} alt="Logo" className='logo h-8 w-[150px]' />
      </Link>
      <ul className='padding-menu flex list-none gap-[20px] text-green-950 text-[18px] cursor-pointer'>
      <Link to='/'><li onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</li></Link>
        <li onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}><a href="#exploreMenu"> Menu</a></li>
         <li onClick={() => setMenu("Contact-Us")} className={menu === "Contact-Us" ? "active" : ""}><a href='#footer'>Contact-Us</a></li>
      </ul>
      <div className='padding-right flex items-center gap-[40px]'>
        <Search className='img' />
        <div className='padding-search relative'>
          <Link to='/cart'>
            <ShoppingBasket className='img' />
          </Link>
          <div className={getTotalCartAmount()===0?"":"dot absolute min-w-[10px] min-h-[10px] bg-[#EA7519] rounded-full top-[-8px] right-[-8px]"}></div>
        </div>
        <button onClick={() => setShowLogin(true)} className='bg-transparent text-[16px] text-green-950 border-[1px] border-solid p-2 border-r[50px] cursor-pointer rounded-full hover:bg-[#EA7519] transition-[0.5s]'>sign in</button>
      </div>
    </div>
  );
}

export default NavBar;
