import React, { useEffect } from "react";
import ProductService from "../services/productService";
import { useDispatch } from "react-redux";
import { saveAllProductAction } from "../store/productSlice";

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    ProductService.getAllproducts()
      .then((res) => dispatch(saveAllProductAction(res.data.products)))
      .catch((err) => console.log(err));
  });

  return <div>HomePage</div>;
}

export default HomePage;
