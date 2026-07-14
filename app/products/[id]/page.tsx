import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/app/data/products";
import SizeSelector from "@/app/components/SizeSelector";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  const { id } = await params;

  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white px-6 py-16">

      <div className="max-w-6xl mx-auto mb-10">
        <Link
          href="/collection"
          className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition"
        >
          ← Back to Collection
        </Link>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

        <div className="aspect-[4/5] rounded-xl overflow-hidden bg-neutral-900">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div>

          <p className="uppercase tracking-[0.3em] text-neutral-400">
            LA REBELLE
          </p>

          <h1 className="text-5xl mt-4">
            {product.name}
          </h1>

          {product.status === "coming-soon" ? (

            <div className="mt-6 inline-block border border-white px-5 py-2 tracking-[0.25em]">
              COMING SOON
            </div>

          ) : (

            <div className="mt-6 flex items-center gap-4">

              <span className="text-neutral-500 line-through text-xl">
                {product.oldPrice} {product.currency}
              </span>

              <span className="text-3xl font-semibold">
                {product.price} {product.currency}
              </span>

            </div>

          )}

          <p className="mt-10 text-neutral-400 leading-8">
            {product.description}
          </p>

          {product.status === "available" && (
            <>
              <SizeSelector sizes={product.sizes!} />
                            <div className="mt-12">

                <h2 className="text-xl font-semibold mb-4">
                  Materials & Craftsmanship
                </h2>

                <div className="space-y-3 text-neutral-300">

                  <p>
                    <strong>Country:</strong> {product.details!.country}
                  </p>

                  <p>
                    <strong>Material:</strong> {product.details!.material}
                  </p>

                  <p>
                    <strong>Fabric Weight:</strong> {product.details!.fabricWeight}
                  </p>

                  <p>
                    <strong>Construction:</strong> {product.details!.construction}
                  </p>

                  <p>
                    <strong>Fit:</strong> {product.details!.fit}
                  </p>

                  <p>
                    <strong>Color:</strong> {product.details!.color}
                  </p>

                </div>

              </div>

              <div className="mt-12">

                <h2 className="text-xl font-semibold mb-4">
                  Care Instructions
                </h2>

                <ul className="space-y-2 text-neutral-400">

                  {product.care!.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}

                </ul>

              </div>
                            <a
                href="https://wa.me/212722110867"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-12 border border-white px-10 py-4 uppercase tracking-[0.2em] hover:bg-white hover:text-black transition"
              >
                Order via WhatsApp
              </a>

            </>
          )}

        </div>

      </div>

    </main>
  );
}