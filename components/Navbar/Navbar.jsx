"use client";
import React, { useState } from "react";
import { Menu, MapPin, ChevronDown, X } from "lucide-react";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-[#ffdb4d] px-4 py-3 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between relative">
          {/* Left Side: Hamburger & Logo */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1 hover:bg-yellow-400 rounded-md"
            >
              {isOpen ? <X size={24} color="black" /> : <Menu size={24} color="black" />}
            </button>

            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 bg-pink-400 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">❤</span>
              </div>
              <span className="text-2xl font-bold text-gray-800 tracking-tight">Chaldal</span>
            </div>
          </div>

          {/* Right Side: Location, Lang, Login */}
          <div className="flex items-center gap-4">
            {/* Location */}
            <div className="flex items-center text-pink-500 font-medium cursor-pointer gap-1">
              <MapPin size={18} />
              <span className="text-sm">Dhaka</span>
              <ChevronDown size={14} />
            </div>

            {/* Language Switcher */}
            <div className="flex items-center bg-white rounded-full p-1 border border-gray-200">
              <button className="px-3 py-1 text-xs font-bold text-gray-600 border-r">EN</button>
              <button className="px-3 py-1 text-xs font-bold text-gray-400">বাং</button>
            </div>

            <button className="bg-[#f05a5b] hover:bg-red-500 text-white px-6 py-2 rounded-md font-bold text-sm transition-colors">
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Navbar;
