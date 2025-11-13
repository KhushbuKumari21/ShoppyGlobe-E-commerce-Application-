import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// Header component with navigation and cart count
const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <header className="header">
      <h1><Link to="/">ShoppyGlobe</Link></h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cartItems.length})</Link>
      </nav>
    </header>
  );
};

export default Header;
