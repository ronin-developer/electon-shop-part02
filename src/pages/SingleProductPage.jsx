import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductService from "../services/productService";
import { Rating } from "@mui/material";
// loader
import LoaderComponent from "../components/LoaderComponent";
// icon
import { FcCheckmark } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";

function SingleProductPage() {
  const [singleProduct, setSingleProduct] = useState({});
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // 1. id
  const { productId } = useParams();

  useEffect(() => {
    // 2. request(sevice)
    ProductService.getSingleProduct(productId)
      .then((res) => {
        setSingleProduct(res.data);
        setIsLoading(true);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleCurrentImage(index) {
    setCurrentImage(index);
  }

  return (
    <div className="px-[10px] my-5">
      {isLoading ? (
        <div className="container mx-auto mt-10 flex items-start gap-5 flex-col md:flex-row">
          {/* left side */}
          <div>
            <div className="w-full md:w-50%">
              <img
                src={singleProduct.images[currentImage]}
                alt=""
                className=" h-[400px] rounded-lg"
              />
            </div>
            <div className="flex items-center gap-5 flex-wrap">
              {singleProduct.images.map((imgSrc, index) => {
                return (
                  <img
                    src={imgSrc}
                    alt=""
                    key={index}
                    className="w-[100px] h-[100px] object-cover border-2 border-primaryBlue rounded-lg mt-5"
                    onClick={() => handleCurrentImage(index)}
                  />
                );
              })}
            </div>
          </div>
          {/* right side */}
          <div className="flex flex-col gap-[10px]">
            <h2 className="font-extrabold text-2xl text-primaryBlue mb-2">
              {singleProduct.title}
            </h2>
            <span className="text-textLightBlue text-[20px]">
              ${singleProduct.price}
            </span>
            <p className="flex items-center">
              <span className="text-textBlack text-[20px]">Reviews:</span>
              <Rating
                name="half-rating"
                defaultValue={singleProduct.rating}
                precision={0.5}
                readOnly
              />
            </p>
            <p className="flex items-center gap-[10px] text-[20px]">
              Avibility:
              {singleProduct.stock ? (
                <span className="flex items-center gap-1 text-lightGreen">
                  {" "}
                  <FcCheckmark /> In stock
                </span>
              ) : (
                <span className="flex items-center gap-1 text-mainRed ">
                  {" "}
                  <RxCross2 />
                  Out of stock
                </span>
              )}
            </p>
            <p className="text-[20px] text-textBlack">
              Hurry up! only{" "}
              <span className="font-bold">{singleProduct.stock}</span> products
              left in stock!
            </p>
            <p className="text-[20px] text-textBlack">
              Total price:{" "}
              <span className="text-textLightBlue">${singleProduct.price}</span>
            </p>
          </div>
        </div>
      ) : (
        <LoaderComponent />
      )}
    </div>
  );
}

export default SingleProductPage;
