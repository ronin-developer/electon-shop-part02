import axios from "axios";

class ProductService {
  static getAllCategory = () => axios.get("/products/categories");
  static getAllproducts = () => axios.get("/products");
  static getSingleProduct = (productId) => axios.get(`/products/${productId}`);
}

export default ProductService;
