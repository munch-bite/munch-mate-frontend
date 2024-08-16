import { Outlet } from 'react-router-dom'
import UserNavbar from '../../components/userNavBar'
import Footer from '../../components/footer'

const UserPage = () => {
  return (
    <div>
         <UserNavbar/>
        <hr className=' h-[1px] bg-[#fcfcfc] '/>
        <div className=''>
            <Outlet/>
            <Footer/>
            
        </div>
    </div>
  )
}

export default UserPage