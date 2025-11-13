import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Header from "./components/Header";

// Lazy load components for performance
const ProductList = lazy(() => import("./components/ProductList"));
const ProductDetail = lazy(() => import("./components/ProductDetail"));
const Cart = lazy(() => import("./components/Cart"));
const Checkout = lazy(() => import("./components/Checkout"));
const NotFound = lazy(() => import("./components/NotFound"));

function App() {
  return (
    <BrowserRouter>
      {/* Header navigation */}
      <Header />

      {/* Suspense fallback while components load */}
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
