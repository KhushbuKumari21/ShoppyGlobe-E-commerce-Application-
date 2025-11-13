import { useState, useEffect } from "react";
import axios from "axios";

// Custom hook to fetch product list
const useFetchProducts = () => {
  const [products, setProducts] = useState([]); // Store products
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null);     // Error state

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products); // Set fetched products
      } catch (err) {
        setError("Failed to fetch products."); // Handle error
      } finally {
        setLoading(false); // Stop loading
      }
    };
    fetchProducts();
  }, []);

  return { products, loading, error };
};

export default useFetchProducts;
