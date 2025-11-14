import { Link, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSearchQuery } from "../redux/cartSlice";
import "./Header.css"; // Import CSS

const Header = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const searchQuery = useSelector((state) => state.cart.searchQuery);

  return (
    <>
      <header className="header">
        <h1>
          <Link to="/">ShoppyGlobe</Link>
        </h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart ({cartItems.length})</Link>
        </nav>
        {/* Search input */}
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        />
      </header>

      <main className="main-content">
        <Outlet />
      </main>
    </>
  );
};

export default Header;
