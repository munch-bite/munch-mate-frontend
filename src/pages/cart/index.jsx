import React, { useContext} from 'react'
import { StoreContext } from '../../assets/context/storeContext'

const Cart = () => {
  const{cartItems,foodList,removeFromCart} = useContext(StoreContext);
  return (
    <div className='cart w-[80%] m-auto'>
      <div className="cart-items">
        <div className="cart-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
      </div>

    </div>
  )
}

export default Cart