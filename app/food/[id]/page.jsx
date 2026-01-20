'use client';

import { useParams } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Navbar/Sidebar";
import Footer from "@/components/Footer/Footer";

const foodProducts = [
  {
    id: 1,
    name: "Fresh Apple",
    unit: "1 kg",
    image: "/apple.webp",
    price: 220,
    oldPrice: 250,
  },
  {
    id: 2,
    name: "Banana",
    unit: "12 pcs",
    image: "/banana-12pcs.webp",
    price: 120,
    oldPrice: null,
  },
  {
    id: 3,
    name: "Broiler Chicken",
    unit: "1 kg",
    image: "/broiler-chicken-1kg.webp",
    price: 210,
    oldPrice: null,
  },
  {
    id: 4,
    name: "Hilsha Fish",
    unit: "1 kg",
    image: "/hilsha-fish-1kg.webp",
    price: 1600,
    oldPrice: 1800,
  },
  {
    id: 5,
    name: "Milk Powder",
    unit: "500 gm",
    image: "/milk-powder-500gm.webp",
    price: 650,
    oldPrice: null,
  },
  {
    id: 6,
    name: "Eggs (Farm Fresh)",
    unit: "12 pcs",
    image: "/eggs-12pcs.webp",
    price: 155,
    oldPrice: null,
  },
  {
    id: 7,
    name: "Chocolate Cookies",
    unit: "200 gm",
    image: "/chocolate-cookies-200gm.webp",
    price: 180,
    oldPrice: 210,
  },
  {
    id: 8,
    name: "Frozen Chicken Nuggets",
    unit: "500 gm",
    image: "/chicken-nuggets-500gm.webp",
    price: 390,
    oldPrice: null,
  },
];

export default function Page() {
  const { id } = useParams();
  const productId = Number(id);

  const product = foodProducts.find((p) => p.id === productId);

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
              <span className="text-3xl font-bold text-[#e04f54]">
                ৳{product.price}
              </span>

              {product.oldPrice && (
                <span className="text-lg line-through text-gray-400">
                  ৳{product.oldPrice}
                </span>
              )}
            </div>

            <p className="text-gray-600 mb-6">
              Fresh & quality food product. Daily essentials you can trust.
            </p>

            <div className="flex gap-3">
              <button className="bg-[#e04f54] text-white px-6 py-2 rounded hover:bg-red-600 transition">
                Add to Bag
              </button>

              <button className="border border-[#e04f54] text-[#e04f54] px-6 py-2 rounded hover:bg-red-50 transition">
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
