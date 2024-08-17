import React, { useContext } from "react";
import { StoreContext } from "../../assets/context/storeContext";
import { CircleX } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, foodList, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className="cart w-[80%] m-auto mt-[100px]">
      <div className="cart-items">
        <div className="cart-title grid items-center text-gray-500 ">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {foodList.map((item, index) => {
          if (cartItems[item.id] > 0) {
            return (
              <div>
                <div className="cart-title cart-items-item grid items-center text-black">
                <img src={item.image} alt="" className="w-[50px]"/>
                <p>{item.name}</p>
                <p>GH₵{item.price}</p>
                <p>{cartItems[item.id]}</p>
                <p>GH₵{item.price*cartItems[item.id]}</p>
                <CircleX onClick={()=>removeFromCart(item.id)} className="cursor-pointer"/>
              </div>
              <hr className="h-[1px] bg-[#e2e2e2] border-none"/>
              </div>
             
            );
          }
        })}
      </div>
      <div className="cart-bottom mt-[80px] flex justify-between">
        <div className="cart-total flex-1 flex flex-col gap-[20px]">
          <h2>Cart Totals</h2>
          <div>
            <div className="total-details flex justify-between text-[#555]">
              <p>Subtotal</p>
              <p>GH₵{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="total-details flex justify-between text-[#555]">
              <p>Delivery Fee</p>
              <p>GH₵{getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="total-details flex justify-between text-[#555]">
              <b>Total</b>
              <b>GH₵{getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button className="border-none bg-[#EA7519] cursor-pointer text-white rounded-[4px]" onClick={()=>navigate('/place/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="promocode flex-1">
          <div>
            <p className="text-[#555]">If you have a promo code, Enter it here</p>
            <div className="promocode-input mt-[10px] flex justify-between items-center bg-[#eaeaea] rounded-[4px]">
              <input type="text" placeholder="promo code" className="bg-transparent border-none outline-none pl-[10px]"/>
              <button className="bg-black border-none text-white rounded-[4px]">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
