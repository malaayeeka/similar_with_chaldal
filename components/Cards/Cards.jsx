"use client";
import React from "react";
import { ShoppingBag, Wallet, Motorbike, Currency } from "lucide-react";

const infoCards = [
  {
    icon: <ShoppingBag className="text-gray-700" size={32} />,
    text: <><span className="text-red-500 font-bold">+15000 products</span> to shop from</>,
  },
  {
    icon: <Wallet className="text-gray-700" size={32} />,
    text: <>Pay <span className="text-red-500 font-bold">after</span> receiving products</>,
  },
  {
    icon: <Motorbike className="text-gray-700" size={32} />,
    text: <>Get your delivery within <span className="text-red-500 font-bold">1 hour</span></>,
  },
  {
    icon: <Currency className="text-gray-700" size={32} />,
    text: <>Get offers that <span className="text-red-500 font-bold">Save Money</span></>,
  },
];

const Cards = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* --- Top Info Cards --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {infoCards.map((card, index) => (
          <div 
            key={index} 
            className="flex items-center gap-4 p-6 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="shrink-0">{card.icon}</div>
            <p className="text-sm text-gray-600 leading-tight">
              {card.text}
            </p>
          </div>
        ))}

        
      </div>

    </div>
  );
};

export default Cards;