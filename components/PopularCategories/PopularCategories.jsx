"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Fruits & Vegetables",
    image: "/fruitsAndVegs.webp",
  },
  {
    id: 2,
    name: "Meat & Fish",
    image: "/meatAndFish.webp",
  },
  {
    id: 3,
    name: "Cooking",
    image: "/cooking.webp",
  },
  {
    id: 4,
    name: "Beverages",
    image: "/beverages.webp",
  },
  {
    id: 5,
    name: "Home & Cleaning",
    image: "/home-cleaning.webp",
  },
  {
    id: 6,
    name: "Pest Control",
    image: "/pest-control.webp",
  },
  {
    id: 7,
    name: "Stationery & Office",
    image: "/stationary.webp",
  },
];

const PopularCategories = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      
      {/* Header */}
      <div className="relative flex items-center mb-6">
        <h2 className="absolute left-1/2 -translate-x-1/2 text-2xl font-semibold text-gray-800">
          Popular Categories
        </h2>

        <div className="ml-auto flex items-center gap-4">
          <button className="text-pink-500 font-medium hover:underline text-sm">
            View All
          </button>

          <div className="flex gap-1">
            <button className="p-1.5 border rounded-full hover:bg-gray-100 text-gray-500">
              <ChevronLeft size={18} />
            </button>
            <button className="p-1.5 border rounded-full hover:bg-gray-100 text-gray-500">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white rounded-xl border hover:shadow-md transition p-4 flex flex-col items-center text-center cursor-pointer"
          >
            <div className="relative w-24 h-24 mb-3">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-contain"
              />
            </div>

            <p className="text-sm font-medium text-gray-700">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCategories;
