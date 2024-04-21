import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import {
  RiEyeLine,
  RiHeartFill,
  RiHeartLine,
  RiShoppingCartLine,
} from "@remixicon/react";
import { useState } from "react";

function SingleProduct({ productContent }) {
  function addToCartHandler(event) {
    event.preventDefault();
    toast("Added to cart");
  }

  const [wishlistState, setWishlistState] = useState(false);

  function wishlistHandler() {
    setWishlistState(!wishlistState);
  }

  return (
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 cursor-pointer hover:shadow-xl ">
      {productContent ? (
        <>
          <div className="relative group">
            <img
              src={productContent.thumbnail}
              alt={productContent.title}
              className="h-80 w-72 object-center object-cover rounded-t-xl"
            />
            <div className="flex gap-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white py-2 px-2 rounded shadow-md invisible group-hover:visible">
              <div className="flex justify-between gap-3">
                <button
                  className="hover:scale-125"
                  onClick={(event) => addToCartHandler(event)}
                >
                  <RiShoppingCartLine />
                </button>
              </div>

              <div className="flex justify-between gap-3">
                <button
                  className="hover:scale-125"
                  onClick={() => wishlistHandler()}
                >
                  {wishlistState ? <RiHeartFill /> : <RiHeartLine />}
                </button>
              </div>
              <div className="flex justify-between gap-3">
                <button className="hover:scale-125">
                  <Link to={"/product/" + productContent.id}>
                    <RiEyeLine />
                  </Link>
                </button>
              </div>
            </div>
          </div>

          <div className="px-4 py-3 w-72">
            <span className="text-gray-400 mr-3 uppercase text-xs">
              {productContent.brand}
            </span>

            <p className="text-lg font-bold text-black truncate block capitalize">
              {productContent.title}
            </p>
            <div className="flex items-center">
              <p className="text-lg font-semibold text-black cursor-auto my-3">
                ${productContent.price}
              </p>
              <del>
                <p className="text-sm text-gray-600 cursor-auto ml-2">
                  $
                  {productContent.price -
                    Math.round(productContent.discountPercentage)}
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
