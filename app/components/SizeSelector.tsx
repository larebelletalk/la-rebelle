"use client";

import { useState } from "react";

type SizeData = {
  shoulder: number;
  chest: number;
  length: number;
  sleeve: number;
};

type Props = {
  sizes: Record<string, SizeData>;
};

export default function SizeSelector({ sizes }: Props) {
  const sizeNames = Object.keys(sizes);

  const [selectedSize, setSelectedSize] = useState(sizeNames[0]);

  const current = sizes[selectedSize];

  return (
    <div className="mt-12">

      <h2 className="text-xl font-semibold mb-4">
        Choose Size
      </h2>

      <div className="flex gap-3 flex-wrap">

        {sizeNames.map((size) => (

          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`px-5 py-2 border transition

            ${
              selectedSize === size
                ? "bg-white text-black border-white"
                : "border-white text-white hover:bg-white hover:text-black"
            }`}
          >
            {size}
          </button>

        ))}

      </div>

      <div className="mt-8 border border-neutral-700 rounded-xl p-6">

        <h3 className="font-semibold mb-4">
          Measurements ({selectedSize})
        </h3>

        <div className="space-y-2 text-neutral-300">

          <p>Shoulder (A): {current.shoulder} cm</p>

          <p>Chest (B): {current.chest} cm</p>

          <p>Length (C): {current.length} cm</p>

          <p>Sleeve (D): {current.sleeve} cm</p>

        </div>

      </div>

    </div>
  );
}