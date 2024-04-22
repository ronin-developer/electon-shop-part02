import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import CartItemComponent from "../components/CartItemComponent";
import country from "../constans/country";

function CartPage() {
  const { cart, totalPrice } = useSelector((state) => state.cartStore);

  // valid coupon code { ronindev }
  const [currentCoupon, setCurrentCoupon] = useState(null);

  // coupon
  const coupon = useRef();

  function handleCoupon(){
    setCurrentCoupon(coupon.current.value)

    // reset code coupon
    coupon.current.value = ""
  }

  return (
    <div className="px-5 lg:px-0">
        <div className="mt-[20px] lg:mt-[50px]">
          <div className="container mx-auto flex flex-col justify-between lg:flex-row gap-[10px]">
            {/* left side */}
            <div className="w-full lg:w-[70%]">
              <div className="grid grid-cols-4 bg-skyBlue h-[60px] place-items-center">
                <p>Product</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Subtotal</p>
              </div>

              {/* body content */}
              <div>
                {cart.length > 0 ? cart.map((item, index) => (
                  <CartItemComponent key={index} item={item} index={index} />
                )) : <p  className="text-center text-2xl font-bold mt-[50px]">Cart is empty</p> }
              </div>
            </div>

            {/* right side */}
            <div className="flex flex-col">
              <div className="bg-skyBlue">
              <h1 className="text-center text-2xl font-bold">Total Price</h1>
              <p className="text-3xl text-center">${currentCoupon === "ronindev" ?
              totalPrice /2 : totalPrice}</p>
              </div>

              {/* coupons */}
              <div className="flex flex-col gap-[10px] mt-10">
                <p className="text-[14px]">Insert coupon for 50%</p>
                <input
                  type="text"
                  placeholder="Insert coupon"
                  className="p-[10px] border rounded-lg"
                  ref={coupon}
                />
                <button 
                onClick={handleCoupon}
                className="bg-primaryBlue text-textWhite px-5 py-[10px] rounded-lg">
                  Apply
                </button>
              </div>

              {/* TODO: country selector/option */}

              <div>
                <select className="w-full px-[8px] py-[4px] border border-slate-500 rounded-full bg-textWhite mt-5">
                  {country.map((el, index) => {
                    return <option key={index} value="el.code">{el.name}</option>
                  })}
                </select>
              </div>

              <button className="bg-secondaryYelow text-textWhite px-5 py-[10px] rounded-lg mt-5">Checkout</button>
            </div>
          </div>
        </div>
    </div>
  );
}

export default CartPage;

