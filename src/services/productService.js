import axios from "axios";

class ProductService {
  static getAllCategory = () => axios.get("/products/categories");
  static getAllproducts = () => axios.get('/products')
}

export default ProductService;
