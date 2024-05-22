import React from "react";
import { ProductContext } from "../../Context/ProductContext";
import { ProductList } from "../Products/ProductList";
import { useContext } from "react";
import { RiEqualizer2Line, RiExpandUpDownLine } from "@remixicon/react";

function Shop() {
  const { manualFilterProducts } = useContext(ProductContext);

  return (
    <div className="mt-24 ">
      <div className="w-full flex items-center gap-5 my-10 p-5 text-gray-300">
        <div className="flex-1 py-3 flex gap-2 justify-center items-center text-white bg-red-400 cursor-pointer">
          <RiEqualizer2Line />
          <p>FILTER</p>
        </div>
        <div className="flex-1 py-3 flex gap-2 justify-center items-center text-white bg-red-400 cursor-pointer">
          <RiExpandUpDownLine />
          <p>SORT BY</p>
        </div>
      </div>
      <ProductList products={manualFilterProducts("category", "fragrances")} />
    </div>
  );
}

export { Shop };
