import { ProductList } from "./Products/ProductList.jsx";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

function Home() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        console.log("data =>", data);
        setProductList(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <video className="aspect-video" autoPlay muted loop>
        <source
          src="https://cdn.pixabay.com/video/2017/03/26/8501-210166782_large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <ProductList products={productList} />
    </div>
  );
}
export { Home };
