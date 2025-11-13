import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  items: [],        // Cart items
  searchQuery: "",  // Product search query
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add product to cart
    addToCart: (state, action) => {
      const item = state.items.find(i => i.id === action.payload.id);
      if (item) {
        item.quantity += 1; // Increase quantity if already in cart
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); // Add new item
      }
    },
    // Remove product from cart
    removeFromCart: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload);
    },
    // Increase quantity
    increaseQuantity: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) item.quantity += 1;
    },
    // Decrease quantity (minimum 1)
    decreaseQuantity: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
    // Clear cart
    clearCart: (state) => {
      state.items = [];
    },
    // Update search query
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

// Export actions
export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  setSearchQuery,
} = cartSlice.actions;

// Export reducer
export default cartSlice.reducer;
