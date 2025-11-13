import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import "./Cart.css";


// Cart page
const Cart = () => {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        items.map(item => <CartItem key={item.id} item={item} />)
      )}
      {items.length > 0 && (
        <>
          <p>Total: ${items.reduce((a, c) => a + c.price * c.quantity, 0)}</p>
          <button onClick={handleCheckout}>Proceed to Checkout</button>
          <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </>
      )}
    </div>
  );
};

export default Cart;
