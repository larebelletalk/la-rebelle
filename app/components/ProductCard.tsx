import Link from "next/link";

type Product = {
  id: string;
  name: string;
  images: string[];
  status: "available" | "coming-soon";

  price?: number;
  oldPrice?: number;
  currency?: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.id}`}>

      <div className="group cursor-pointer">

        <div className="aspect-[4/5] bg-neutral-200 rounded-lg overflow-hidden">

          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />

        </div>

        <div className="mt-5">

          <h3 className="text-lg text-white">
            {product.name}
          </h3>

          {product.status === "available" ? (

            <div className="mt-2 flex items-center gap-3">

              <span className="text-red-500 line-through">
                {product.oldPrice} {product.currency}
              </span>

              <span className="text-white font-semibold">
                {product.price} {product.currency}
              </span>

            </div>

          ) : (

            <div className="mt-3">
              <span className="border border-white px-3 py-1 text-xs tracking-[0.25em]">
                COMING SOON
              </span>
            </div>

          )}

        </div>

      </div>

    </Link>
  );
}