import ProductItem from "./ProductItem";
import useFetchProducts from "../hooks/useFetchProducts";
import { useSelector } from "react-redux";

// List of products component
const ProductList = () => {
  const { products, loading, error } = useFetchProducts();
  const searchQuery = useSelector(state => state.cart.searchQuery);

  // Filter products based on search query
  const filteredProducts = products.filter(p =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="product-list">
      {filteredProducts.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
