import React, { useState } from 'react'
import ExploreMenu from '../../components/exploreMenu'
import Home from './home'
import FoodDisplay from '../../components/foodDisplay'


const Landing = () => {
  

  const [category, setCategory] = useState('All');
  return (
    <div className='w-[80%] m-auto'>
      
      <Home/>
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
     
    </div>
  )
}

export default Landing