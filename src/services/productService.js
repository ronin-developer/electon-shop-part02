import axios from "axios";

class ProductService {
  static getAllCategory = () => axios.get("/products/categories");
  static getAllProducts = () => axios.get("/products");
  static getAllProductsByCategory = (currentCategory) =>
    axios.get(`/products/category/${currentCategory}`);
  static getSingleProduct = (productId) => axios.get(`/products/${productId}`);
}

export default ProductService;
