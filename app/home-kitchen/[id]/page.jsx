'use client';

import { useParams } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Navbar/Sidebar";
import Footer from "@/components/Footer/Footer";

const products = [
  {
    id: 1,
    name: "RFL King Jug Tr And Pink",
    unit: "3.5 ltr",
    image: "/rfl-king-jug-tr-and-pink-35-ltr-1-pcs.webp",
    price: 99,
    oldPrice: 150,
  },
  {
    id: 2,
    name: "RFL Stainless Steel Coup Spoon 28 cm",
    unit: "each",
    image: "/rfl-stainless-steel-coup-spoon-28-cm-1-pcs.webp",
    price: 85,
    oldPrice: 110,
  },
  {
    id: 3,
    name: "RFL Winner Tiffin Box Rectangular",
    unit: "each",
    image: "/rfl-winner-tiffin-box-rectangular-1-pcs.webp",
    price: 150,
    oldPrice: null,
  },
  {
    id: 4,
    name: "Stainless Steel Vegetable Peeler",
    unit: "each",
    image: "/stainless-steel-vegetable-peeler-1-pcs.webp",
    price: 259,
    oldPrice: 360,
  },
  {
    id: 5,
    name: "Ying Guns Kitchen Steel Knife (1.6\"x8\")",
    unit: "each",
    image: "/ying-guns-kitchen-steel-knife-16x8-1-pcs.webp",
    price: 199,
    oldPrice: 373,
  },
  {
    id: 6,
    name: "BBQ Net Holder Clip",
    unit: "each",
    image: "/bbq-net-holder-clip-silver-1-pcs.webp",
    price: 349,
    oldPrice: 450,
  },
  {
    id: 7,
    name: "BBQ Grill Tin Maker With 5 Sticks",
    unit: "each",
    image: "/bbq-grill-tin-maker-with-5-stick-silver-1-pcs.webp",
    price: 1299,
    oldPrice: 2110,
  },
  {
    id: 8,
    name: "bbq-brush-red",
    unit: "each",
    image: "/bbq-brush-red-1-pcs.webp",
    price: 179,
    oldPrice: 200,
  },
];

export default function Page() {
  const { id } = useParams();
  const productId = Number(id);

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="p-10 text-center text-red-600">
        Product not found
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Sidebar />

      <div className="max-w-6xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 rounded-lg shadow">
          
          {/* Image */}
          <div className="relative w-full aspect-square">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold mb-2">
              {product.name}
            </h1>

            <p className="text-gray-500 mb-4">
              Unit: {product.unit}
            </p>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl font-bold text-red-600">
                ৳{product.price}
              </span>

              {product.oldPrice && (
                <span className="text-lg line-through text-gray-400">
                  ৳{product.oldPrice}
                </span>
              )}
            </div>

            <p className="text-gray-600 mb-6">
              Premium quality home & kitchen product.
              Limited stock available.
            </p>

            <div className="flex gap-3">
              <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition">
                Add to Bag
              </button>

              <button className="border border-red-600 text-red-600 px-6 py-2 rounded hover:bg-red-50 transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
