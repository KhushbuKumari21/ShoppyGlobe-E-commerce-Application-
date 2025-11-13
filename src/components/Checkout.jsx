import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

// Checkout page
const Checkout = () => {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Place order and redirect to home
  const handlePlaceOrder = () => {
    alert("Order placed successfully!");
    dispatch(clearCart());
    navigate("/");
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      {/* Dummy form */}
      <form>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="text" placeholder="Address" required />
      </form>

      <h3>Order Summary</h3>
      <ul>
        {items.map(i => (
          <li key={i.id}>{i.title} x {i.quantity} = ${i.price * i.quantity}</li>
        ))}
      </ul>
      <button onClick={handlePlaceOrder}>Place Order</button>
    </div>
  );
};

export default Checkout;
