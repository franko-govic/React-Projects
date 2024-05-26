import { useContext } from "react";
import { ProductContext } from "../../Context/ProductContext";
import { ProductList } from "../Products/ProductList";
import { CategoriesSection } from "./CategoriesSection";

function Home() {
  const { manualFilterProducts } = useContext(ProductContext);

  return (
    <div className="mt-24 flex flex-col gap-10">
      <CategoriesSection />
      <div>
        <h1 className="text-xl text-center font-bold uppercase">Fragrance</h1>
        <ProductList
          products={manualFilterProducts("category", "fragrances")}
        />
      </div>
      <div>
        <h1 className="text-xl text-center font-bold uppercase">Apple</h1>
        <ProductList products={manualFilterProducts("category", "laptops")} />
      </div>
    </div>
  );
}
export { Home };
