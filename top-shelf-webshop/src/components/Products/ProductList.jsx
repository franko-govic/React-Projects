import { SingleProduct } from "./SingleProduct";

function ProductList({ products }) {
  return (
    <div className="w-full mx-auto grid grid-cols-2 lg:grid-cols-4  md:max-w-none justify-items-center  gap-5  p-5">
      {products.map((product) => {
        return <SingleProduct key={product.id} productContent={product} />;
      })}
    </div>
  );
}

export { ProductList };
