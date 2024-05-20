import React, { useContext, useState } from "react";
import { CartSidebar } from "../Cart/CartSidebar";
import { CartContext } from "../../Context/CartContext";
import {
  RiCloseLine,
  RiHeartLine,
  RiMenuLine,
  RiShoppingBag2Line,
  RiUserLine,
} from "@remixicon/react";
import { Link } from "react-router-dom";
import { HambMenu } from "./HambMenu";

function Header() {
  const [cartSidebarOpen, setCartSidebarOpen] = useState(false);
  const [hambMenuOpen, setHambMenuOpen] = useState(false);

  const { itemAmount } = useContext(CartContext);
  return (
    <div className="fixed top-0 left-0 right-0  bg-white py-5 px-7 flex justify-between items-center z-20">
      <div
        className="flex justify-start items-center flex-1 cursor-pointer w-10 h-10 md:hidden "
        onClick={() => setHambMenuOpen(!hambMenuOpen)}
      >
        {hambMenuOpen ? <RiCloseLine /> : <RiMenuLine />}
      </div>
      <div className="hidden md:flex justify-start items-center md:gap-5 md:flex-1">
        <Link to="/">Home</Link>
        <Link to="/">New</Link>
        <Link to="/">Shop</Link>
        <Link to="/">Categories</Link>
      </div>
      <Link to="/">
        <span className="text-2xl font-bold">TOP SHELF</span>
      </Link>
      <div className="flex justify-end items-center gap-2 flex-1">
        <div className="cursor-pointer w-10 h-10 border border-gray-400 rounded-full hidden md:flex md:justify-center md:items-center">
          <RiUserLine />
        </div>
        <div className="cursor-pointer w-10 h-10 border border-gray-400 rounded-full hidden md:flex md:justify-center md:items-center">
          <RiHeartLine />
        </div>
        <div
          onClick={() => setCartSidebarOpen(!cartSidebarOpen)}
          className="cursor-pointer w-10 h-10 border border-gray-400 rounded-full flex justify-center items-center  relative"
        >
          <RiShoppingBag2Line />
          <div className="bg-red-500 absolute right-0 bottom-0 w-4 h-4 flex justify-center items-center  rounded-full text-xs font-bold text-white">
            {itemAmount}
          </div>
        </div>
      </div>
      <HambMenu hambMenuOpen={hambMenuOpen} setHambMenuOpen={setHambMenuOpen} />
      <CartSidebar
        cartSidebarOpen={cartSidebarOpen}
        setCartSidebarOpen={setCartSidebarOpen}
      />
    </div>
  );
}

export { Header };
