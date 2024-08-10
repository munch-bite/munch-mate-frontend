import React from 'react'
import SubNavBar from '../../components/subNavBar'
import SideBar from '../../components/sideBar'
import Add from './add'
import List from './list'
import Orders from './orders'
import { Outlet } from 'react-router-dom'

const VendorPage = () => {
  return (
    <div>
        <SubNavBar/>
        <hr className=' h-[1px] bg-[#fcfcfc] '/>
        <div className='app-content flex'>
            <SideBar/>
            <Outlet/>
            
        </div>
    </div>
  )
}

export default VendorPage