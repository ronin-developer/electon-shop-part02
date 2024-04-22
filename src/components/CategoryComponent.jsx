import React, { useEffect, useState } from "react";
import ProductService from "../services/productService";
import { useDispatch } from "react-redux";
import { setNewCategory } from "../store/productSlice";

function CategoryComponent() {
  const [category, setCategory] = useState([]);
  const [isActive, setIsActive] = useState(false);

  const dispatch = useDispatch();

  // 2. useEffect
  useEffect(() => {
    ProductService.getAllCategory()
      .then((res) => setCategory(res.data))
      .catch((err) => console.log(err));
  }, []);

  function handleCategoryActive() {
    setIsActive(!isActive);
  }
  return (
    <div className="bg-textWhite mx-auto py-5">
      <div className="container mx-auto flex items-center gap-5 flex-col lg:flex-row h-full">
        <button
          onClick={handleCategoryActive}
          className="bg-primaryBlue text-textWhite px-3 py-[6px] rounded-md cursor-pointer hover:bg-secondaryYelow tranisition-all duration-300"
        >
          {isActive ? "Hide" : "Show"} Category
        </button>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-3 gap-[10px] place-items-center">
          {isActive ? (
            <>
              <li
                onClick={() => {
                  dispatch(setNewCategory("allProducts"));
                  setIsActive(false);
                }}
                className="bg-primaryBlue text-textWhite px-4 py-2 w-[250px] text-center rounded-md cursor-pointer hover:bg-secondaryYelow transition-all"
              >
                All products
              </li>
              {category.map((cat, index) => {
                return (
                  <li
                    onClick={() => {
                      dispatch(setNewCategory(cat));
                      setIsActive(false);
                    }}
                    className="bg-primaryBlue text-textWhite px-4 py-2 w-[250px] text-center rounded-md cursor-pointer hover:bg-secondaryYelow transition-all"
                    key={index}
                  >
                    {cat}
                  </li>
                );
              })}
            </>
          ) : null}
        </ul>
      </div>
    </div>
  );
}

export default CategoryComponent;
