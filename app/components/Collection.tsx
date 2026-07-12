import ProductCard from "./ProductCard";
import { products } from "../data/products";

export default function Collection() {
  return (
    <section
      id="collection"
      className="bg-[#0A0A0A] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl md:text-5xl text-center mb-16 tracking-[0.2em]">
          COLLECTION
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>
    </section>
  );
}