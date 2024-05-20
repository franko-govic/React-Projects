import { SingleProduct } from "./SingleProduct";

function ProductList({ products }) {
  return (
    <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 md:max-w-none justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
      {products.map((product) => {
        return <SingleProduct key={product.id} productContent={product} />;
      })}
    </div>
  );
}

export { ProductList };
