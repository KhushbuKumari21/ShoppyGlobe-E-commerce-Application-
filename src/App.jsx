import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";

// Lazy load components
const ProductList = lazy(() => import("./components/ProductList"));
const ProductDetail = lazy(() => import("./components/ProductDetail"));
const Cart = lazy(() => import("./components/Cart"));
const Checkout = lazy(() => import("./components/Checkout"));
const NotFound = lazy(() => import("./components/NotFound"));

// Loader functions for data fetching
const fetchProducts = async () => {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
};

const fetchProductById = async ({ params }) => {
  const res = await fetch(`https://dummyjson.com/products/${params.id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
};

// Define routes with loaders
const router = createBrowserRouter([
  {
    element: <Header />, // Header stays on all pages
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <ProductList />
          </Suspense>
        ),
        loader: fetchProducts,
      },
      {
        path: "/product/:id",
        element: (
          <Suspense fallback={<p>Loading product...</p>}>
            <ProductDetail />
          </Suspense>
        ),
        loader: fetchProductById,
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<p>Loading cart...</p>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/checkout",
        element: (
          <Suspense fallback={<p>Loading checkout...</p>}>
            <Checkout />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
