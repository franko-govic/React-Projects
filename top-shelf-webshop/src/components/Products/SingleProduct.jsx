import { Link } from "react-router-dom";
import {
  RiEyeLine,
  RiHeartFill,
  RiHeartLine,
  RiShoppingBag2Line,
} from "@remixicon/react";
import { useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";

function SingleProduct({ productContent }) {
  const [wishlistState, setWishlistState] = useState(false);

  function wishlistHandler() {
    setWishlistState(!wishlistState);
  }

  const { id, title, brand, price, thumbnail, discountPercentage } =
    productContent;

  const { addToCart } = useContext(CartContext);

  return (
    <div className="w-full  bg-white shadow-sm  duration-500 hover:shadow-xl  bg-gray-100 border">
      {productContent ? (
        <>
          <div className="relative group">
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-center object-cover"
            />
            <div className="absolute top-3 right-3 flex flex-col justify-center items-center gap-y-2 opacity-0 group-hover:opacity-100 ">
              <button
                onClick={() => addToCart(productContent, id)}
                className="hover:scale-105 active:scale-95"
              >
                <div className="p-2 bg-white flex justify-center items-center text-black rounded-full">
                  <RiShoppingBag2Line />
                </div>
              </button>
              <button
                onClick={() => wishlistHandler()}
                className="hover:scale-105 active:scale-95"
              >
                <div className="p-2  bg-black flex justify-center items-center text-white rounded-full">
                  {wishlistState ? <RiHeartFill /> : <RiHeartLine />}
                </div>
              </button>
              <Link
                to={"/product/" + id}
                className="p-2 bg-black flex justify-center items-center text-white rounded-full hover:scale-105 active:scale-95"
              >
                <button>
                  <RiEyeLine />
                </button>
              </Link>
            </div>
          </div>

          <div className="px-4 py-3">
            <span className="text-gray-400 mr-3 uppercase text-xs">
              {brand}
            </span>
            <Link to={"/product/" + id}>
              <p className="text-lg font-bold text-black truncate block capitalize">
                {title}
              </p>
            </Link>

            <div className="flex items-center">
              <p className="text-lg font-semibold text-black cursor-auto ">
                ${price}
              </p>
              <del>
                <p className="text-sm text-gray-600 cursor-auto ml-2">
                  ${(price / (1 - discountPercentage / 100)).toFixed(2)}
                </p>
              </del>
            </div>
          </div>
        </>
      ) : (
        <p>loading</p>
      )}
    </div>
  );
}

export { SingleProduct };
