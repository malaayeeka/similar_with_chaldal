"use client"
import { useParams } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Navbar/Sidebar";
import Footer from "@/components/Footer/Footer";

const healthWellnessProducts = [
  {
    id: 1,
    name: "Vitamin C Tablets",
    unit: "200 Tablets",
    image: "/Vitamin-C-Tablet-1.webp",
    price: 350,
    oldPrice: null,
  },
  {
    id: 2,
    name: "Multivitamin Gummies",
    unit: "150 pcs",
    image: "/multivitamin-gummies-150-pcs.webp",
    price: 420,
    oldPrice: null,
  },
  {
    id: 3,
    name: "Omega 3 Fish Oil Capsules",
    unit: "180 pcs",
    image: "/omega-3-fish-oil-180-capsules.webp",
    price: 2840,
    oldPrice: 3200,
  },
  {
    id: 4,
    name: "Whey Protein Powder (500 gm)",
    unit: "500 gm",
    image: "/whey-protein-500-gm.webp",
    price: 1200,
    oldPrice: null,
  },
  {
    id: 5,
    name: "Herbal Tea (Pack of 20)",
    unit: "20 bags",
    image: "/herbal-tea-20-bags.webp",
    price: 250,
    oldPrice: null,
  },
  {
    id: 6,
    name: "Aloe Vera Gel",
    unit: "200 ml",
    image: "/aloe-vera-gel-200-ml.webp",
    price: 180,
    oldPrice: null,
  },
  {
    id: 7,
    name: "Hand Sanitizer (100 ml)",
    unit: "100 ml",
    image: "/hand-sanitizer-100-ml.webp",
    price: 75,
    oldPrice: null,
  },
  {
    id: 8,
    name: "Pain Relief Balm",
    unit: "50 gm",
    image: "/pain-relief-balm-50-gm.webp",
    price: 95,
    oldPrice: null,
  },
];
export default function HealthWellnessProductPage() {
  const { id } = useParams();
  const productId = Number(id);

  const product = healthWellnessProducts.find((p) => p.id === productId);

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
              Premium health & wellness product. Limited stock available.
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
