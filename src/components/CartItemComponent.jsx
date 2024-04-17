import React from "react";
// delete item in cart
import { deleteItemCartAction } from "../store/cartSlice";
// icons
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";

function CartItemComponent({ item }) {
  const dispatch = useDispatch();

  function removeItemHandler() {
    dispatch(deleteItemCartAction(item));
  }

  return (
    <div className="grid grid-cols-4 place-items-center mt-5 relative border-b-4 border-skyBlue pb-[10px]">
      <div className="flex gap-[10px] items-center">
        {/* image */}
        <img
          src={item.thumbnail}
          alt={item.title}
          className="hidden md:flex w-[100px] h-[100px] object-cover rounded-xl"
        />

        {/* property of product */}
        <div>
          <h2>{item.title}</h2>
          <p>{item.category}</p>
          <p>{item.stock}</p>
        </div>
      </div>
      <div>
        <p>${item.price}</p>
      </div>
      <div className="flex items-center">
        <button className="px-[8px] py[4px] bg-tertiaryGrey text-[18px]">
          +
        </button>
        <span className="px-[8px] py[4px] bg-tertiaryGrey text-[18px]">
          {item.count}
        </span>
        <button className="px-[8px] py[4px] bg-tertiaryGrey text-[18px]">
          -
        </button>
      </div>
      <div>
        {/* cartTotal */}
        {item.cartTotal}
      </div>
      {/* remove */}

      <RxCross2
        color="red"
        className="absolute right-0 top-0 size-6"
        onClick={removeItemHandler}
      />
    </div>
  );
}

export default CartItemComponent;
