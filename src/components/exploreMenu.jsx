import React from 'react'
import { menuList } from '../assets/images'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='flex flex-col gap-[20px]' id='exploreMenu'>
<h1 className='font-medium'>Explore our Menu</h1>
<p className='max-w-[60%]'>Choose from a diverse menu featuring local and continental dishes</p>
<div className='flex justify-between items-center gap-[30px] text-center  overflow-x-scroll exploreMenu'>
{menuList.map((item, index)=>{
return (
    <div onClick={()=> setCategory(prev=>prev===item.menuName? 'All':item.menuName)} key={index} className="menu">
        <img src={item.menuImage} alt="food display" className={ category===item.menuName? "active": ""}/>
        <p className='mt-[10px] cursor-pointer  exploreP'>{item.menuName}</p>
        </div>
)
})}
</div>
<hr className='h-[2px] hr border-none hr bg-gray-100 '/>
    </div>
  )
}

export default ExploreMenu