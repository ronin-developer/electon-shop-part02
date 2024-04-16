import React, { useEffect } from "react";
import ProductService from "../services/productService";
import { useDispatch, useSelector } from "react-redux";
import { saveAllProductAction } from "../store/productSlice";
import CardProductComponent from "../components/CardProductComponent";

function HomePage() {
  const { allProducts } = useSelector((state) => state.productStore);
  const dispatch = useDispatch();

  useEffect(() => {
    ProductService.getAllproducts()
      .then((res) => dispatch(saveAllProductAction(res.data.products)))
      .catch((err) => console.log(err));
  });

  return (
    <main className="container mx-auto">
      {/* grid/list view*/}

      {/* our products */}
      <div className="flex flex-wrap items-center justify-center m-[50px] gap-8">
        {allProducts.map((product) => {
          return <CardProductComponent key={product.id} product={product} />;
        })}
      </div>
    </main>
  );
}

export default HomePage;
