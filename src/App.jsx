import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Cart from './pages/cart'
import Landing from './pages/landingPage'
import PlaceOrder from './pages/placeOrder'
import Footer from './components/footer'

function App() {
  const router = createBrowserRouter([
  {path :'/',
  element : <Landing/>},
  {
    path :'/cart',
    element : <Cart/> 
  },
  {
    path :'/place/order',
  element : <PlaceOrder/>
  }

  ])
  
  return (
   <>
   <RouterProvider router={router} />
   <Footer/>
   </>

  
     
    
  )
}

export default App
