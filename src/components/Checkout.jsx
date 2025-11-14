import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import "./Checkout.css"; // Import CSS
import { useState } from "react";

// Checkout page
const Checkout = () => {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  // Place order and redirect to home
  const handlePlaceOrder = () => {
    if (!name || !email || !address) {
      alert("Please fill all fields before placing order!");
      return;
    }
    alert("Order placed successfully!");
    dispatch(clearCart());
    navigate("/");
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      {/* Dummy form */}

      <form>
        <input 
          type="text" 
          placeholder="Name" 
          required 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input 
          type="email" 
          placeholder="Email" 
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input 
          type="text" 
          placeholder="Address" 
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
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
