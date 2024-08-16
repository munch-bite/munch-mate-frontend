import React, { useContext } from 'react'
import { StoreContext } from '../assets/context/storeContext'
import FoodItem from './foodItem'

const FoodDisplay = ({category}) => {
    const {foodList}= useContext(StoreContext)
  return (
    <div className='foodDisplay mt-[30px]'>
        <h2 className=' font-semibold'>Top dishes near you</h2>
        <div className='foodDisplayList'>
            {foodList.map((item, index)=>{
              if (category==="All" || category===item.category){
                return <FoodItem key={index} id={item.id} name={item.name} description={item.description} price={item.price} image={item.image} vendor={item.vendor}/>
              }
            })}
        </div>

    </div>
  )
}

export default FoodDisplay