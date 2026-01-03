'use client';

import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Navbar/Sidebar";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import Link from "next/link";

const stationeryProducts = [
  {
    id: 1,
    name: "Apsara Pencils (Pack of 12)",
    unit: "12 pcs",
    image: "/apsara-pencils-12-pcs.webp",
    price: 120,
    oldPrice: null,
  },
  {
    id: 2,
    name: "Camel Gel Pen (Blue Ink)",
    unit: "1 pcs",
    image: "/camel-gel-pen-blue.webp",
    price: 25,
    oldPrice: null,
  },
  {
    id: 3,
    name: "Classmate Notebook (200 Pages)",
    unit: "1 pcs",
    image: "/classmate-notebook-200-pages.webp",
    price: 150,
    oldPrice: 180,
  },
  {
    id: 4,
    name: "Stapler (Standard Size)",
    unit: "1 pcs",
    image: "/stapler-standard.webp",
    price: 250,
    oldPrice: null,
  },
  {
    id: 5,
    name: "Sticky Notes (3x3 Inch, Pack of 4)",
    unit: "4 pcs",
    image: "/sticky-notes-3x3-4-pcs.webp",
    price: 80,
    oldPrice: 100,
  },
  {
    id: 6,
    name: "Highlighter Marker (Pack of 5)",
    unit: "5 pcs",
    image: "/highlighter-marker-5-pcs.webp",
    price: 200,
    oldPrice: null,
  },
  {
    id: 7,
    name: "Scissors (Medium Size)",
    unit: "1 pcs",
    image: "/scissors-medium.webp",
    price: 150,
    oldPrice: null,
  },
  {
    id: 8,
    name: "Paper Clips (100 pcs)",
    unit: "100 pcs",
    image: "/paper-clips-100-pcs.webp",
    price: 50,
    oldPrice: null,
  },
];

export default function StationeryOfficePage() {
  return (
    <>
      <Navbar />
      <Sidebar />

      <div className="p-4 max-w-7xl mx-auto">
        <h2 className="text-xl font-bold text-gray-700 mb-4">
          Stationery & Office
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 xl:grid-cols-8 gap-3">
          {stationeryProducts.map((p) => (
            <Link
              href={`/stationery-office/${p.id}`}
              key={p.id}
              className="group border border-gray-100 rounded-md flex flex-col bg-white overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative w-full aspect-square p-2">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="p-2 flex flex-col flex-grow text-center">
                <h3 className="text-[13px] text-gray-700 leading-tight h-10 line-clamp-2 mb-1">
                  {p.name}
                </h3>

                <p className="text-[12px] text-gray-500 mb-2">
                  {p.unit}
                </p>

                <div className="flex items-center justify-center gap-1 mb-3">
                  <span className="text-lg font-bold text-[#e04f54]">
                    ৳{p.price}
                  </span>
                  {p.oldPrice && (
                    <span className="text-xs line-through text-gray-400">
                      ৳{p.oldPrice}
                    </span>
                  )}
                </div>

                <div className="mt-auto">
                  <button
                    onClick={(e) => e.preventDefault()}
                    className="w-full flex items-center justify-center gap-1 text-[13px] text-[#e04f54] font-semibold py-1.5 border-t border-gray-100 hover:bg-red-50 transition-colors"
                  >
                    Add to bag
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
