import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import Rating from "react-rating";
import { ProductContext } from "../../Context/ProductContext";

function ProductPage() {
  const { id } = useParams();
  const { products } = useContext(ProductContext);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  console.log(product);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-row justify-center lg:flex-row gap-1 lg-w-full">
          <div className="flex flex-col gap-6">
            <img
              src={product.thumbnail}
              className="w-full h-full aspect-video object-cover object-center rounded sahdow-xl"
              alt={product.title}
            />
            <div className="flex flex-col  justify-center gap-5  h-24 ">
              {product.images.map((productImage, index) => (
                <img
                  key={index}
                  src={productImage}
                  alt={`Product Image ${index}`}
                  className="w-24 h-24 rounded-md cursor-pointer"
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p>{product.brand}</p>
            <p className="text-4xl">{product.title}</p>
            <p>{product.description}</p>
            <div className="flex gap-2">
              <Rating initialRating={product.rating} />
              <p>{product.rating}</p>
            </div>
            <p>${product.price}</p>
            <p>{product.stock > 0 ? "in stock" : "not avaliable"}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductPage;
