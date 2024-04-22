import React, { useEffect, useState } from "react";
import ProductService from "../services/productService";
import { useDispatch, useSelector } from "react-redux";
import { saveAllProductsAction } from "../store/productSlice";
import CardProductComponent from "../components/CardProductComponent";

// icons
import { FaList } from 'react-icons/fa'
import { IoGridOutline } from "react-icons/io5";

function HomePage() {

  const [activeView, setActiveView] = useState('listView');


  const { allProducts, currentCategory } = useSelector(
    (state) => state.productStore
  );
  // TODO: add loader for products and categories
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentCategory === "allProducts") {
      ProductService.getAllProducts(currentCategory)
        .then((res) => dispatch(saveAllProductsAction(res.data.products)))
        .catch((err) => console.log(err));
    } else {
      ProductService.getAllProductsByCategory(currentCategory)
        .then((res) => dispatch(saveAllProductsAction(res.data.products)))
        .catch((err) => console.log(err));
    }
  }, [currentCategory]);

  return (
    <main className="container mx-auto">
      {/* grid/list view*/}

      <div className="flex justify-end mt-5 mr-5 gap-[10px]">
        <button onClick={() => setActiveView('listView')} className={activeView === 'listView' ? 'bg-primaryBlue p-[5px] rounded-[10px] text-textWhite' : 'p-[5px]'} >{''}<FaList size={30} /></button>
        <button onClick={() => setActiveView('gridView')} className={activeView === 'gridView' ? 'bg-primaryBlue p-[5px] rounded-[10px] text-textWhite' : 'p-[5px]'}>{''}<IoGridOutline size={30} /></button>
      </div>

      {/* our products */}
      {/* wrapper div */}
      <div className={activeView === 'listView' ? 'grid grid-cols-1 gap-[20px] mt-[20px]' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 place-items-center gap-[20px] mt-[20px]'}>
        {allProducts.map((product) => {
          return <CardProductComponent key={product.id} product={product} />;
        })}
      </div>
    </main>
  );
}

export default HomePage;
