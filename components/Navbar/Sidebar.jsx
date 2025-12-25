"use client";
import React from "react";
import { Menu, ChevronRight, HelpCircle, MessageSquare } from "lucide-react";

const categories = [
  { name: "Offers", icon: "🔴" },
  { name: "Egg Club", icon: "🥚" },
  { name: "Inventory Platform", icon: "📊" },
  { name: "Favourites", icon: "❤️" },
  { name: "Winter Collection", icon: "❄️" },
  { name: "Flash Sales", icon: "⚡" },
  { name: "Food", icon: "🍱", hasSub: true },
  { name: "Cleaning Supplies", icon: "🧴", hasSub: true },
  { name: "Home & Kitchen", icon: "🍳", hasSub: true },
  { name: "Fashion & Lifestyle", icon: "👜" },
  { name: "Baby Care", icon: "🍼", hasSub: true },
  { name: "Personal Care", icon: "🧴", hasSub: true },
  { name: "Stationery & Office", icon: "📁", hasSub: true },
  { name: "Pet Care", icon: "🐾", hasSub: true },
  { name: "Toys & Sports", icon: "⚽" },
  { name: "Beauty & MakeUp", icon: "💄" },
  { name: "Health & Wellness", icon: "🏥", hasSub: true },
  { name: "Vehicle Essentials", icon: "⛽" },
  { name: "New Arrival", icon: "📣" },
  { name: "Safety Center", icon: "🛡️" },
  { name: "Premium Care", icon: "🏅" },
  { name: "Recipes", icon: "📕" },
];

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-[60] transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Menu */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-white z-[70] transform transition-transform duration-300 ease-in-out flex flex-col shadow-2xl ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="bg-[#ffdb4d] p-4 flex items-center gap-4 h-16 shrink-0">
          <button onClick={() => setIsOpen(false)}>
            <Menu size={28} />
          </button>
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 bg-pink-400 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">❤</span>
              </div>
              <span className="text-2xl font-bold text-gray-800 tracking-tight">Chaldal</span>
            </div>
        </div>

        {/* Categories */}
        <div className="flex-1 overflow-y-auto py-2">
          <ul>
            {categories.map((cat, idx) => (
              <li key={idx} className={`group flex items-center justify-between px-4 py-2.5 cursor-pointer hover:bg-gray-50 transition-colors ${(idx === 2 || idx === 5 || idx === 18) ? "border-b border-gray-100 pb-3 mb-2" : ""}`}>
                <div className="flex items-center gap-4">
                  <span className="text-xl w-6 flex justify-center">{cat.icon}</span>
                  <span className="text-[14px] font-medium text-gray-700 group-hover:text-pink-600">{cat.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  {cat.badge && <span className="border border-red-400 text-red-500 text-[10px] font-bold px-1 rounded-sm">{cat.badge}</span>}
                  {cat.hasSub && <ChevronRight size={16} className="text-gray-400" />}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="mt-auto border-t border-gray-200 grid grid-cols-2 divide-x divide-gray-200 shrink-0">
          <button className="flex items-center justify-center gap-2 py-4 hover:bg-gray-50 text-gray-700">
            <HelpCircle size={18} className="text-pink-400" />
            <span className="text-[13px] font-semibold">Help</span>
          </button>
          <button className="flex items-center justify-center gap-2 py-4 hover:bg-gray-50 text-gray-700">
            <MessageSquare size={18} className="text-pink-400" />
            <span className="text-[13px] font-semibold">Complaint</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;