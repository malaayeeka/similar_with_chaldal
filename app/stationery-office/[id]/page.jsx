'use client';

import { useParams } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Navbar/Sidebar";
import Footer from "@/components/Footer/Footer";

const stationeryProducts = [
  {
    id: 1,
    name: "Fresh Campus 4B Pencil 66 gm",
    unit: "12 pcs",
    image: "/fresh-campus-4b-pencil-66-gm-12-pcs.webp",
    price: 120,
    oldPrice: null,
  },
  {
    id: 2,
    name: "Econo Soft Grip Ball Pen",
    unit: "10 pcs",
    image: "/econo-soft-grip-ball-pen-10-pcs.webp",
    price: 100,
    oldPrice: null,
  },
  {
    id: 3,
    name: "University khata 300 Pages",
    unit: "1 pcs",
    image: "/university-khata-300-pages-1-pcs.webp",
    price: 169,
    oldPrice: 180,
  },
  {
    id: 4,
    name: "Deli Stapler Machine (Blue)",
    unit: "1 pcs",
    image: "/deli-stapler-machine-blue-1-pcs.webp",
    price: 90,
    oldPrice: null,
  },
  {
    id: 5,
    name: "RFL Good Luck Drawing Book 52 Page",
    unit: "each",
    image: "/rfl-good-luck-drawing-book-52-page-1-pcs.webp",
    price: 80,
    oldPrice: 100,
  },
  {
    id: 6,
    name: "Deli Liquid Highlighter Chisel Tip (Yellow))",
    unit: "each",
    image: "/deli-liquid-highlighter-chisel-tip-yellow-1-pcs.webp",
    price: 35,
    oldPrice: null,
  },
  {
    id: 7,
    name: "Faber Castell Connector Pen 15 Color",
    unit: "Full Set",
    image: "/faber-castell-connector-pen-15-color-1-pcs.webp",
    price: 150,
    oldPrice: null,
  },
  {
    id: 8,
    name: "Citiplus Scientific Electronic Calculator (Sx-991 Ms)",
    unit: "each",
    image: "/citiplus-scientific-electronic-calculator-sx-991-ms-1-pcs.webp",
    price: 729,
    oldPrice: null,
  },
];


export default function StationeryOfficeProductPage() {
  const { id } = useParams();
  const productId = Number(id);

  const product = stationeryProducts.find((p) => p.id === productId);

  if (!product) {
    return <div className="p-10 text-center text-red-600">Product not found</div>;
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
              <span className="text-3xl font-bold text-red-600">৳{product.price}</span>
              {product.oldPrice && <span className="text-lg line-through text-gray-400">৳{product.oldPrice}</span>}
            </div>

            <p className="text-gray-600 mb-6">Premium stationery product. Limited stock available.</p>

            <div className="flex gap-3">
              <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition">Add to Bag</button>
              <button className="border border-red-600 text-red-600 px-6 py-2 rounded hover:bg-red-50 transition">Buy Now</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
