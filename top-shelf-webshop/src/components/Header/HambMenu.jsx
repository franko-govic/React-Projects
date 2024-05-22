import {
  RiCrosshairLine,
  RiEqualizer2Line,
  RiHeartLine,
  RiHomeLine,
  RiShoppingBag2Line,
  RiStoreLine,
  RiUserLine,
} from "@remixicon/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UIContext } from "../../Context/UIContext";

const HambMenu = () => {
  const { UIState, toggleDropdown } = useContext(UIContext);

  return (
    <div
      className={`${
        UIState.dropdown ? "top-16 left-0 right-0 " : "hidden"
      } w-full bg-white absolute  shadow-2xl  transition-all duration-500  border-b border-grey flex flex-col gap-5  px-5 pb-7 `}
    >
      <div className="w-full py-5 flex flex-col gap-5 border-b border-gray-300">
        <Link to="/" className="flex gap-3">
          <RiHomeLine />
          <p>Home</p>
        </Link>
        <Link to="/" className="flex gap-3">
          <RiCrosshairLine />
          <p>New In</p>
        </Link>
        <Link to="/shop" className="flex gap-3">
          <RiStoreLine />
          <p>Shop</p>
        </Link>
        <Link to="/" className="flex gap-3">
          <RiEqualizer2Line />
          <p>Categories</p>
        </Link>
      </div>
      <div className="w-full flex flex-col gap-5">
        <Link to="/" className="flex gap-3">
          <RiUserLine />
          <p>Account</p>
        </Link>
        <Link to="/" className="flex gap-3">
          <RiHeartLine />
          <p>Wishlist</p>
        </Link>
        <Link to="/" className="flex gap-3">
          <RiShoppingBag2Line />
          <p>Cart</p>
        </Link>
      </div>
    </div>
  );
};

export { HambMenu };
