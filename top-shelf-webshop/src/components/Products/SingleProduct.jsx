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
      <div className="relative">
        <img
          src={productContent.thumbnail}
          alt={productContent.title}
          className="h-80 w-72 object-center object-cover rounded-t-xl"
        />
        <div className="flex flex-col gap-2 absolute top-10 right-0 bg-white py-2 px-2 rounded-l-md shadow-md">
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
        <Rating initialRating={productContent.rating} readonly />

        <div className="flex items-center">
          <p class="text-lg font-semibold text-black cursor-auto my-3">
            ${productContent.price}
          </p>
          <del>
            <p class="text-sm text-gray-600 cursor-auto ml-2">
              $
              {productContent.price -
                Math.round(productContent.discountPercentage)}
            </p>
          </del>
        </div>
      </div>
    </div>
  );
}

export { SingleProduct };
