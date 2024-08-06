import React, { useContext } from 'react'
import Rating from './rating'
import {MinusCircle, Plus, PlusCircle} from 'lucide-react'
import { StoreContext } from '../assets/context/storeContext';

const FoodItem = ({id,name,price,description,image}) => {
    const {cartItems, addToCart, removeFromCart}= useContext(StoreContext);
  return (
    <div className='foodItem w-[100%] m-auto rounded-[15px] '>
        <div className='foodItemContainer relative'>
            <img src={image} alt=""  className='foodItemImg w-[100%]'/>
            {!cartItems[id]
             ?<Plus className='absolute w-[35px] bottom-[15px] right-[15px] cursor-pointer text-white rounded-[50%]' onClick={()=>addToCart(id)}/>
             : <div className='foodItemCounter absolute bottom-[15px] right-[15px] flex items-center gap-[8px] p-[6px] rounded-[50px] bg-white '>
                <MinusCircle className='text-red-500 w-[30px]' onClick={()=>removeFromCart(id)}/>
                <p>{cartItems[id]}</p>
                <PlusCircle className='text-green-500 w-[30px]' onClick={()=>addToCart(id)}/>

             </div>
            }
        </div>
        <div className='foodItemInfo p-[20px]'>
            <div className='foodItemRating flex justify-between items-center mb-[10px]'>
                <p className='text-[20px] font-medium'>{name}</p>
                <Rating className="w-[70px]"/>

            </div>
            <p className="foodItemDesc text-gray-500 text-[17px]">{description}</p>
            <p className="foodItemPrice text-[22px] text-[#EA7519] font-medium">${price}</p>
        </div>

    </div>
  )
}

export default FoodItem