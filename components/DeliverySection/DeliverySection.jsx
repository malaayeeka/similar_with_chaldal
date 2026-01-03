


"use client";
import React from "react";

const cities = ["Dhaka", "Chattogram", "Jashore"];

const DeliverySection = () => {
  return (
    <section className="relative w-full min-h-[45vh] md:min-h-[45vh] overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/cover.png')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
          Currently Delivering in
        </h2>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {cities.map((city, index) => (
            <button
              key={index}
              className="min-w-[160px] md:min-w-[220px] bg-[#FFD670] hover:bg-[#ffcd4d] text-gray-800 font-semibold py-4 px-8 rounded-full shadow-md transition-all duration-300"
            >
              {city}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;