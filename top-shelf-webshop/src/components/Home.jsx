import { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import { ProductList } from "./Products/ProductList";

function Home() {
  const { products } = useContext(ProductContext);

  return (
    <div className="mt-24">
      <ProductList allProducts={products} />
    </div>
  );
}
export { Home };
