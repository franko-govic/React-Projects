import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import Rating from "react-rating";

function ProductPage() {
  const urlParams = useParams();
  console.log("urlparams =>", urlParams);
  const [product, setProduct] = useState({});
  const URLProductID = urlParams.id;

  useEffect(() => {
    fetch("https://dummyjson.com/products/" + URLProductID)
      .then((res) => res.json())
      .then((json) => {
        console.log("Product", json);
        setProduct(json);
      });
  }, []);

  console.log("URL params Detailed product view =>", urlParams);

  const { basket, setBasket } = useContext(UserContext);

  function addToBasketHandler() {
    const item = {
      name: "Mouse 112j",
      id: 231,
    };
    setBasket({
      ...basket,
      items: [...basket.items, item],
    });
    console.log("basket content", basket);
  }

  return (
    <div className="flex justify-center">
      <div>
        <img src={product.thumbnail} alt="" />
      </div>
      <div>
        <span>{product.title}</span>
        <p>{product.brand}</p>
        <Rating initialRating={product.rating} readonly />
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export { ProductPage };
