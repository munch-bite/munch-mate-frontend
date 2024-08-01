import React from 'react'
import NavBar from '../../components/navBar'
import { images } from '../../assets/images'

const Landing = () => {
  return (
    <div>
      <NavBar />

      <div className='h-[34vw] mx-auto my-[30px] header relative flex'>

        <div className='header-contents absoute flex fex-col items-start gap-[1.5vw] max-w-[50%] b-[10%] left-[6vw]'>
          <h2>Order your favourite food here</h2>
          <p>Choose from a diverse menu featuring a delectable many of dishes crafted with </p>
          <button>View Menu</button>

        </div>

        <img src={images.HomeImg} alt="eader image" />
      </div>
    </div>
  )
}

export default Landing