'use client';

import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Navbar/Sidebar";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";

const vehicleProducts = [
  {
    id: 1,
    name: "Car Air Freshener (Vanilla)",
    unit: "1 pcs",
    image: "/car-air-freshener-vanilla.webp",
    price: 399,
    oldPrice: null,
  },
  {
    id: 2,
    name: "Car Cleaning Brush",
    unit: "1 pcs",
    image: "/car-cleaning-brush.webp",
    price: 350,
    oldPrice: null,
  },
  {
    id: 3,
    name: "Car Floor Mats (Set of 4)",
    unit: "4 pcs",
    image: "/car-floor-mats-4pcs.webp",
    price: 1200,
    oldPrice: 1500,
  },
  {
    id: 4,
    name: "Vehicle Mobile Holder",
    unit: "1 pcs",
    image: "/vehicle-mobile-holder.webp",
    price: 499,
    oldPrice: null,
  },
  {
    id: 5,
    name: "Car Sun Shade",
    unit: "1 pcs",
    image: "/car-sun-shade.webp",
    price: 799,
    oldPrice: null,
  },
  {
    id: 6,
    name: "Car Vacuum Cleaner",
    unit: "1 pcs",
    image: "/car-vacuum-cleaner.webp",
    price: 1850,
    oldPrice: 2200,
  },
  {
    id: 7,
    name: "Windshield Wiper Fluid",
    unit: "500 ml",
    image: "/windshield-wiper-fluid.webp",
    price: 250,
    oldPrice: null,
  },
  {
    id: 8,
    name: "Vehicle Battery Booster Cable",
    unit: "1 pcs",
    image: "/vehicle-battery-booster-cable.webp",
    price: 1200,
    oldPrice: null,
  },
];
export default function VehicleEssentialsDetailPage() {
  const { id } = useParams();
  const productId = Number(id);

  const product = vehicleProducts.find((p) => p.id === productId);

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
              Premium quality vehicle essential product. Limited stock available.
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
