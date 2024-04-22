import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";

function CardProductComponent({ product, activeView }) {
  return (
    <div
      className={
        activeView === "listView"
          ? "w-full flex items-center justify-between border-primaryBlue border-b pb-[15px]"
          : "w-[300px] h-full border border-primaryBlue rounded-lg flex flex-col items-center gap-[15px] cursor-pointer"
      }
    >
      {/* product image */}
      <div
        className={
          activeView === "listView"
            ? "relative w-[100px] h-[100px]"
            : "relative w-full"
        }
      >
        <img
          src={product.thumbnail}
          alt={product.title}
          className={
            activeView === "listView"
              ? "w-[100px] h-[100px] object-cover"
              : "w-full h-[200px] object-cover"
          }
        />
        {/* overlay */}
        <div className="absolute inset-0 bg-textBlack opacity-50 rounded-t-lg hover:opacity-0 transition-all duration-200 cursor-pointer" />
      </div>

      <h2 className="font-extrabold text-xl text-primaryBlue">
        {product.title}
      </h2>
      <span className="text-secondaryYelow">${product.price}</span>
      {/* rating stars */}
      <div className="hidden lg:block">
        <Rating
          name="half-rating"
          defaultValue={product.rating}
          precision={0.5}
          readOnly
        />
      </div>
      <Link
        to={`/singleProduct/${product.id}`}
        className="bg-primaryBlue text-textWhite px-4 py-2 mb-2 rounded-lg hover:bg-secondaryYelow transition-all duration-200"
      >
        View Detail
      </Link>
    </div>
  );
}

export default CardProductComponent;
