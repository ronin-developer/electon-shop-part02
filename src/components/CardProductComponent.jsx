import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";

function CardProductComponent({ product }) {
  return (
    <div className="w-[300px] h-full border border-primaryBlue rounded-lg flex flex-col items-center gap-[15px] cursor-pointer">
      <div className="relative w-full">
        <img
          src={product.thumbnail}
          alt="product.title"
          className="h-[150px] w-full rounded-t-lg object-cover"
        />
        <div className="absolute inset-0 bg-textBlack opacity-50 rounded-t-lg hover:opacity-0 transition-all duration-200 cursor-pointer" />
      </div>

      <h2 className="font-extrabold text-xl text-primaryBlue">
        {product.title}
      </h2>
      <span className="text-secondaryYelow">${product.price}</span>

      <Rating
        name="half-rating"
        defaultValue={product.rating}
        precision={0.5}
        readOnly
      />

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
