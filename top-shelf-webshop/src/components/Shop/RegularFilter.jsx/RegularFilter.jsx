import React, { useContext } from "react";
import RegFilTop from "./RegFilTop";
import RegFilLeft from "./RegFilLeft";
import { ProductContext } from "../../../Context/ProductContext";
import { ProductList } from "../../Products/ProductList";

function RegularFilter() {
  const { manualFilterProducts } = useContext(ProductContext);
  return (
    <div className="hidden w-full bg-blue-200  h-full md:flex flex-col ">
      <RegFilTop />
      <div className="flex">
        <RegFilLeft />
        <ProductList products={manualFilterProducts("category", "laptops")} />
      </div>
    </div>
  );
}

export { RegularFilter };
