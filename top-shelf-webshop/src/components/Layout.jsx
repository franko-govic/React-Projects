import React from "react";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import { UserContext } from "../../../react-webshop-alt/src/Context/UserContext";
import { useState } from "react";
import { Footer } from "./Footer";
import { Toaster } from "react-hot-toast";

export default function Layout() {
  const [basket, setBasket] = useState({ items: [] });

  const value = { basket, setBasket };

  console.log("parent baskeet", basket);
  return (
    <div className={"page-wrapper"}>
      <UserContext.Provider value={value}>
        <Toaster />
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export { Layout };
