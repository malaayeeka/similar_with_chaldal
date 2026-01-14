'use client';

import { useParams } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Navbar/Sidebar";
import Footer from "@/components/Footer/Footer";

const products = [
  {
    id: 1,
    name: "Fabric Lagbe Gents Panjabi M (GP-1)",
    unit: "each",
    image: "/fabric-lagbe-gents-panjabi-m-gp-1-1-pcs.webp",
    price: 731,
    oldPrice: 860,
  },
  {
    id: 2,
    name: "Fabric Lagbe Lungi Tangai (T-4)",
    unit: "each",
    image: "/fabric-lagbe-lungi-tangai-t-4-1-pcs.webp",
    price: 553,
    oldPrice: 650,
  },
  {
    id: 3,
    name: "Fabric Lagbe Lungi Tangai (T-4)",
    unit: "each",
    image: "/fabric-lagbe-lungi-tangai-t-4-1-pcs.webp",
    price: 553,
    oldPrice: 650,
  },
  {
    id: 4,
    name: "Knee Cap Soft ( XL Size)",
    unit: "each",
    image: "/knee-cap-soft-xl-size-1-pcs.webp",
    price: 429,
    oldPrice: 713,
  },
  {
    id: 5,
    name: "Raincoat (Black)",
    unit: "each",
    image: "/raincoat-black-1-pcs.webp",
    price: 699,
    oldPrice: null,
  },
  {
    id: 6,
    name: "Nomad Ladies Bag Blue (Pro)",
    unit: "each",
    image: "/nomad-ladies-bag-blue-pro-1-pcs.webp",
    price: 1850,
    oldPrice: null,
  },
  {
    id: 7,
    name: "Pierre Cardin Natural Look Foundation",
    unit: "30 ml",
    image: "/pierre-cardin-natural-look-foundation-30-ml.webp",
    price: 1250,
    oldPrice: null,
  },
  {
    id: 8,
    name: "Lipsilk Lip Balm Strawberry",
    unit: "7 gm",
    image: "/lipsilk-lip-balm-strawberry-7-gm.webp",
    price: 210,
    oldPrice: null,
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
              Premium quality fashion & lifestyle product.
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
