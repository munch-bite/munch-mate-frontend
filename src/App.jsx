import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Cart from './pages/cart'
import Landing from './pages/landingPage'
import PlaceOrder from './pages/placeOrder'
import Footer from './components/footer'
import NavBar from './components/navBar'
import { useState } from 'react'
import LoginPop from './components/loginPop'

function App() {
  const [showLogin, setShowLogin] = useState(false)
  const router = createBrowserRouter([
  {path :'/',
  element : <Landing/>},
  {
    path :'cart',
    element : <Cart/> 
  },
  {
    path :'place/order',
  element : <PlaceOrder/>
  }

  ])
  
  return (
   <>
   {showLogin?<LoginPop setShowLogin={setShowLogin}/>:<></>}
   <NavBar setShowLogin={setShowLogin}/>
   <RouterProvider router={router} />
   <Footer/>
   </>

  
     
    
  )
}

export default App
