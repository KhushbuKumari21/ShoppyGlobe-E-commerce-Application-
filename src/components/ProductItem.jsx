import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes

// Component for single product
const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="product-item">
      {/* Navigate to product detail */}
      <Link to={`/product/${product.id}`}>
        <img src={product.thumbnail} alt={product.title} loading="lazy" />
        <h3>{product.title}</h3>
      </Link>
      <p>${product.price}</p>
      {/* Add to cart button */}
      <button onClick={() => dispatch(addToCart(product))}>
        Add to Cart
      </button>
    </div>
  );
};

// PropTypes ensures the parent passes the correct props
ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductItem;
