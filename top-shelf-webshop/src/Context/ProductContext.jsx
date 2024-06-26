import React, { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products?limit=0");
        const data = await response.json();
        setProducts(data.products);
        console.log("All data ==>", data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const manualFilterProducts = (filterBy, name) => {
    return products.filter((product) => product[filterBy] === name);
  };

  return (
    <ProductContext.Provider value={{ products, manualFilterProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
