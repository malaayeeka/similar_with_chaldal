"use client";

// imports file

import React, { useState } from "react";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Navbar/Sidebar";
import Image from "next/image";

// Fake data or dummy data
const categories = [
  { name: "Winter Collection", count: 1, icon: "❄️" },
  { name: "Flash Sales", count: 4, icon: "⚡" },
  { name: "Food", count: 7, icon: "🧺" },
  { name: "Home & Kitchen", count: 1, icon: "🍳" },
  { name: "Baby Care", count: 8, icon: "🍼" },
  { name: "Personal Care", count: 3, icon: "🧴" },
  { name: "Pet Care", count: 1, icon: "🐾" },
  { name: "New Arrival", count: 2, icon: "📢" },
];

// Data strictly from image_6d9e1e.jpg
const specialOffers = [
  {
    id: 1,
    name: "Ching's Red Chilli Sauce",
    weight: "200 gm",
    price: 99,
    oldPrice: 160,
    bannerDisplay: "/_mpimage.webp", // The large promotional side
    productImg: "/_mpimage.webp", // The small product image
  },
  {
    id: 2,
    name: "White Flour (Maida)",
    weight: "1 kg",
    price: 65,
    oldPrice: 70,
    bannerDisplay: "/_mpimage (1).webp",
    productImg: "/_mpimage (1).webp",
  },
  {
    id: 3,
    name: "ACI Pure Kabab Masala",
    weight: "50 gm",
    price: 95,
    oldPrice: 100,
    bannerDisplay: "/_mpimage (2).webp",
    productImg: "/_mpimage (2).webp",
  },
  {
    id: 4,
    name: "Dettol Handwash Re-Energize Liquid Refill 170 ml Combo",
    weight: "2 pcs",
    price: 160,
    oldPrice: null,
    bannerDisplay: "/_mpimage (3).webp",
    productImg: "/_mpimage (3).webp",
  },
];

const OffersPage = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="flex flex-col min-h-screen bg-white">
        <div className="flex flex-1 w-full container mx-auto lg:w-8/12 px-4 py-6 gap-6  ">
          <main className="flex-1 ">
            {/* Section: Filter By Category */}
            <div
              className="flex items-center gap-2 cursor-pointer mb-4 text-[#2c3e50] font-semibold border-b pb-2 "
              onClick={() => setExpanded(!expanded)}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
              <span className="text-lg">Filter By Category</span>
              <svg
                className={`w-4 h-4 ml-auto transition-transform ${
                  expanded ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            {/* condition of expand logica function */}
            {expanded && (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-12 ">
                {categories.map((cat, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between border border-gray-200 rounded-sm px-4 py-3 hover:shadow-sm cursor-pointer transition bg-white"
                  >
                    <span className="text-[13px] text-gray-600 font-medium">
                      {cat.name} ({cat.count})
                    </span>
                    <span className="text-xl">{cat.icon}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Section: Special Offers */}
            <h2 className="text-2xl text-gray-400 font-light mb-6">
              Special Offers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {specialOffers.map((offer) => (
                <div
                  key={offer.id}
                  className="flex border border-gray-100 rounded-sm overflow-hidden h-60"
                >
                  {/* Left Side: Large Promo Banner */}
                  <div className="w-2/3 relative bg-gray-50">
                    <Image
                      src={offer.bannerDisplay}
                      alt="Promo Banner"
                      fill
                      className="object-cover"
                      unoptimized
                      onError={(e) => {
                        e.target.src =
                          "https://placehold.co/400x300?text=Banner";
                      }}
                    />
                  </div>

                  {/* Right Side: Product Buy Box */}
                  <div className="w-1/3 p-4 flex flex-col items-center justify-center text-center border-l bg-white">
                    {/* small image */}
                    <div className="relative w-20 h-20 mb-2">
                      <Image
                        src={offer.productImg}
                        alt={offer.name}
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                    {/*product name */}
                    <h3 className="text-[11px] text-gray-700 leading-tight mb-1">
                      {offer.name}
                    </h3>
                    <p className="text-[10px] text-gray-400 mb-2">
                      {offer.weight}
                    </p>
                    <div className="flex items-center gap-1 mb-3">
                      <span className="text-md font-bold text-[#e04f54]">
                        ৳{offer.price}
                      </span>
                      {offer.oldPrice && (
                        <span className="text-[10px] line-through text-gray-300">
                          ৳{offer.oldPrice}
                        </span>
                      )}
                    </div>
                    <button className="flex items-center gap-1 text-[#e04f54] text-[11px] font-bold border border-gray-100 px-3 py-1.5 rounded-sm hover:bg-red-50 transition-colors">
                      <span className="text-xs">⚡</span> Add to bag
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OffersPage;
