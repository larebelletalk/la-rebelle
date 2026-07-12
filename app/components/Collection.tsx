type Product = {
  id: string;
  name: string;
  images: string[];
  status: "available" | "coming-soon";
  description: string;

  price?: number;
  oldPrice?: number;
  currency?: string;

  details?: {
    country: string;
    material: string;
    fabricWeight: string;
    fit: string;
    construction: string;
    color: string;
  };

  care?: string[];

  sizes?: Record<
    string,
    {
      shoulder: number;
      chest: number;
      length: number;
      sleeve: number;
    }
  >;
};

export const products: Product[] = [
  {
    id: "1",

    name: "Marceline T-Shirt",

    price: 179,
    oldPrice: 219,
    currency: "MAD",

    images: [
      "/products/product-1.png",
    ],

    status: "available",

    description:
      "Premium oversized unisex T-shirt designed for everyday comfort. Made with heavyweight cotton and finished with high-quality printing.",

    details: {
      country: "Turkey",
      material: "95% Premium Cotton, 5% Elastane",
      fabricWeight: "320 GSM",
      fit: "Oversized Unisex",
      construction: "Double-Stitched",
      color: "Black",
    },

    care: [
      "Machine wash cold",
      "Wash inside out",
      "Do not bleach",
      "Do not tumble dry",
    ],

    sizes: {
      XS: {
        shoulder: 50,
        chest: 51,
        length: 66,
        sleeve: 21,
      },

      S: {
        shoulder: 52,
        chest: 54,
        length: 68,
        sleeve: 22,
      },

      M: {
        shoulder: 54,
        chest: 57,
        length: 71,
        sleeve: 23,
      },

      L: {
        shoulder: 57,
        chest: 60,
        length: 74,
        sleeve: 24,
      },

      XL: {
        shoulder: 59,
        chest: 63,
        length: 76,
        sleeve: 25,
      },
    },
  },

  {
    id: "2",

    name: "Black Fit Top",

    images: [
      "/products/product-2.png",
    ],

    status: "coming-soon",

    description:
      "A premium fitted black top featuring the exclusive 'Hot Girls Speak Moroccan' statement print. Designed for women who embrace confidence, comfort and individuality. Launching soon.",
  },
];