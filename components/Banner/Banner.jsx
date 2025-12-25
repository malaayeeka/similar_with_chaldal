"use client";
import Image from "next/image";
import { Search } from "lucide-react";

export default function Banner() {
  return (
    <section className="bg-[#FFD66B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Grocery Delivered at your Doorstep
          </h1>

          {/* Search Box */}
          <div className="relative max-w-xl">
            <input
              type="text"
              placeholder="Search for products (e.g. eggs, milk, potato)"
              className="w-full py-4 px-5 pr-12 rounded-md bg-white text-sm outline-none"
            />
            <Search
              size={22}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
            />
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}       
          <div className="overflow-hidden ">
            <Image
              src="/imageBanner.webp"
              alt="Delivery"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
      </div>
      
    </section>
  );
}
