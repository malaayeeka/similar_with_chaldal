'use client';

import { useParams } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Navbar/Sidebar";
import Footer from "@/components/Footer/Footer";

const stationeryProducts = [
  { 
    id: 1, 
    name: "Apsara Pencils (Pack of 12)", 
    unit: "12 pcs", 
    image: "/apsara-pencils-12-pcs.webp", 
    price: 120 
},
  { 
    id: 2, 
    name: "Camel Gel Pen (Blue Ink)", 
    unit: "1 pcs", 
    image: "/camel-gel-pen-blue.webp", 
    price: 25 
  },
  { 
    id: 3, 
    name: "Classmate Notebook (200 Pages)", 
    unit: "1 pcs", 
    image: "/classmate-notebook-200-pages.webp", 
    price: 150, oldPrice: 180 
  },
  { 
    id: 4, 
    name: "Stapler (Standard Size)", 
    unit: "1 pcs", 
    image: "/stapler-standard.webp", 
    price: 250 
  },
  { 
    id: 5, 
    name: "Sticky Notes (3x3 Inch, Pack of 4)", 
    unit: "4 pcs", 
    image: "/sticky-notes-3x3-4-pcs.webp", 
    price: 80, oldPrice: 100 
  },
  { 
    id: 6, 
    name: "Highlighter Marker (Pack of 5)", 
    unit: "5 pcs", 
    image: "/highlighter-marker-5-pcs.webp", 
    price: 200 
  },
  { 
    id: 7, 
    name: "Scissors (Medium Size)", 
    unit: "1 pcs", 
    image: "/scissors-medium.webp", 
    price: 150 
  },
  { 
    id: 8, 
    name: "Paper Clips (100 pcs)", 
    unit: "100 pcs", 
    image: "/paper-clips-100-pcs.webp", 
    price: 50
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
