import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ProductProvider from "./Context/ProductContext";
import CartProvider from "./Context/CartContext.jsx";
import UIProvider from "./Context/UIContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UIProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductProvider>
    </CartProvider>
  </UIProvider>
);
