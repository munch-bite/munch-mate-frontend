import React, { useState } from 'react'
import NavBar from '../../components/navBar'
import ExploreMenu from '../../components/exploreMenu'
import Home from './home'

const Landing = () => {
  const [category, setCategory] = useState('All');
  return (
    <div className='w-[80%] m-auto'>
      <NavBar />

      <Home/>

      
      <ExploreMenu category={category} setCategory={setCategory} />
    </div>
  )
}

export default Landing