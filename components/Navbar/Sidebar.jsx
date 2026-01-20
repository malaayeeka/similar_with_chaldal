"use client";

import React from "react";
import { Menu, HelpCircle, MessageSquare } from "lucide-react";
import { useRouter } from "next/navigation";

const categories = [
  { name: "Offers", icon: "🔴", path: "/offers" },
  { name: "Winter Collection", icon: "❄️", path: "/winter-collection" },
  { name: "Flash Sales", icon: "⚡", path: "/flash-sales" },
  { name: "Food", icon: "🍱", path: "/food" },
  { name: "Home & Kitchen", icon: "🍳", path: "/home-kitchen" },
  { name: "Fashion & Lifestyle", icon: "👜", path: "/fashion-lifestyle" },
  { name: "Baby Care", icon: "🍼", path: "/baby-care" },
  { name: "Stationery & Office", icon: "📁", path: "/stationery-office" },
  { name: "Health & Wellness", icon: "🏥", path: "/health-wellness" },
  { name: "Vehicle Essentials", icon: "⛽", path: "/vehicle-essentials" },
  { name: "Safety Center", icon: "🛡️", path: "/safety-center" },
];

const Sidebar = ({ isOpen, setIsOpen }) => {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
    // চাইলে sidebar auto close করতে পারো
    // setIsOpen(false);
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[60]"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-white z-[70]
        transform transition-transform duration-300 ease-in-out
        flex flex-col shadow-2xl
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header */}
        <div className="bg-[#ffdb4d] p-4 flex items-center gap-4 h-16">
          <button onClick={() => setIsOpen(false)}>
            <Menu size={28} />
          </button>

          <div
            onClick={() => handleNavigation("/")}
            className="flex items-center gap-2 cursor-pointer text-lg md:text-2xl font-bold text-gray-800 hover:text-pink-500 transition"
          >
            <span>🏡</span>
            <span>HomiCart</span>
          </div>
        </div>

        {/* Categories */}
        <div className="flex-1 overflow-y-auto py-2">
          <ul>
            {categories.map((cat, idx) => (
              <li
                key={idx}
                onClick={() => handleNavigation(cat.path)}
                className={`group flex items-center pr-4 py-2.5 cursor-pointer
                  hover:bg-gray-50 transition-colors
                  ${idx === 2 || idx === 5
                    ? "border-b border-gray-100 pb-3 mb-2"
                    : ""
                  }`}
              >
                <div className="flex items-center gap-4 pl-4">
                  <span className="text-xl w-6 flex justify-center">
                    {cat.icon}
                  </span>
                  <span className="text-[14px] font-medium text-gray-700 group-hover:text-pink-600">
                    {cat.name}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="mt-auto border-t border-gray-200 grid grid-cols-2 divide-x divide-gray-200">
          <button
            onClick={() => handleNavigation("/help")}
            className="flex items-center justify-center gap-2 py-4 hover:bg-gray-50 text-gray-700"
          >
            <HelpCircle size={18} className="text-pink-400" />
            <span className="text-[13px] font-semibold">Help</span>
          </button>

          <button
            onClick={() => handleNavigation("/complaint")}
            className="flex items-center justify-center gap-2 py-4 hover:bg-gray-50 text-gray-700"
          >
            <MessageSquare size={18} className="text-pink-400" />
            <span className="text-[13px] font-semibold">Complaint</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
