import { useContext } from "react";
import { ProductContext } from "../../Context/ProductContext";
import { ProductList } from "../Products/ProductList";

function Home() {
  const { manualFilterProducts } = useContext(ProductContext);

  return (
    <div className="mt-24">
      <div>
        <h1 className="text-xl text-center font-bold uppercase">Fragrance</h1>
        <ProductList products={manualFilterProducts("category", "fragrance")} />
      </div>
      <div>
        <h1 className="text-xl text-center font-bold uppercase">HP</h1>
        <ProductList products={manualFilterProducts("brand", "Apple")} />
      </div>
    </div>
  );
}
export { Home };
