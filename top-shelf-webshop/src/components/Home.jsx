import { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";

function Home() {
  const { products } = useContext(ProductContext);
  console.log("products from home comp -->", products);

  const filteredProducts = products.filter((item) => {
    return item.category === "smartphones" || item.category === "laptops";
  });

  console.log("filtered", filteredProducts);

  return (
    <div>
      {products.map((item, index) => {
        return <p key={index}>{item.category}</p>;
      })}
    </div>
  );
}
export { Home };
