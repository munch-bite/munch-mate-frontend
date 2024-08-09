import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Cart from './pages/cart'
import Landing from './pages/landingPage'
import PlaceOrder from './pages/placeOrder'
import LoginPop from './components/loginPop'
import RootLayout from './layout/rootLayout'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout/>,
      children: [
        {
         index: true,
          element:<Landing/>
        },
        {
          path: "cart",
          element:<Cart/>  
        },
        {
          path: "place/order",
          element: <PlaceOrder/>
        }
        
      ]

    }

  ])
  
  return (
   <>
   <RouterProvider router={router} />
   </>

  
     
    
  )
}

export default App
