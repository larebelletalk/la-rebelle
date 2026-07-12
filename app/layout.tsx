import type { Metadata } from "next";
import { Geist, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "LA REBELLE",
  description:
    "Luxury womenswear and carefully selected unisex essentials.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${cormorant.variable}`}
    >
      <body className="bg-[#0A0A0A] text-white antialiased">
        {children}
      </body>
    </html>
  );
}