'use client';

import { useParams } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Navbar/Sidebar";
import Footer from "@/components/Footer/Footer";

const babyCareProducts = [
  {
    id: 1,
    name: "Meril Baby Lotion",
    unit: "200 ml",
    image: "/meril-baby-lotion-200-ml.webp",
    price: 360,
    oldPrice: null,
  },
  {
    id: 2,
    name: "Pond's Vanishing Cream",
    unit: "28 gm",
    image: "/ponds-vanishing-cream-28-gm.webp",
    price: 60,
    oldPrice: null,
  },
  {
    id: 3,
    name: "Parachute SkinPure Petroleum Jelly",
    unit: "15 ml",
    image: "/parachute-skinpure-petroleum-jelly-15-ml.webp",
    price: 25,
    oldPrice: null,
  },
  {
    id: 4,
    name: "Skin Secret Glycerin",
    unit: "125 ml",
    image: "/skin-secret-glycerin-125-ml.webp",
    price: 140,
    oldPrice: null,
  },
  {
    id: 5,
    name: "Parachute Baby Lotion (Milky Glow)",
    unit: "200 ml",
    image: "/parachute-just-for-baby-milky-glow-baby-lotion-200-ml.webp",
    price: 370,
    oldPrice: null,
  },
  {
    id: 6,
    name: "Baby Wipes (Soft & Gentle)",
    unit: "120 pcs",
    image: "/bashundhara-baby-wipes-120-pcs.webp",
    price: 149,
    oldPrice: 180,
  },
  {
    id: 7,
    name: "Parachute Baby Shampoo (Mild)",
    unit: "100 ml",
    image: "/parachute-just-for-baby-baby-shampoo-100-ml.webp",
    price: 199,
    oldPrice: 225,
  },
  {
    id: 8,
    name: "Parachute Baby Powder",
    unit: "100 gm",
    image: "/parachute-just-for-baby-baby-powder-100-gm.webp",
    price: 129,
    oldPrice: 140,
  },
];

export default function Page() {
  const { id } = useParams();
  const productId = Number(id);

  const product = babyCareProducts.find((p) => p.id === productId);

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
            <h1 className="text-2xl font-semibold mb-2">{product.name}</h1>

            <p className="text-gray-500 mb-4">Unit: {product.unit}</p>

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
              Premium quality baby care product. Limited stock available.
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
