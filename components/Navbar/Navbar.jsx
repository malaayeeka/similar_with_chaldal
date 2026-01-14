"use client";
import React, { useState } from "react";
import { Menu, MapPin, ChevronDown, X } from "lucide-react";
import Sidebar from "./Sidebar";
import Link from "next/link";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

 useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
    if (currentUser) {
      await currentUser.reload(); 
      setUser(auth.currentUser);
    } else {
      setUser(null);
    }
  });

  return () => unsubscribe();
}, []);


console.log(user)

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <>
      <nav className="bg-[#FDD670] px-4 py-3 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left: Hamburger & Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1 hover:bg-yellow-400 rounded-md"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>


            <Link
              href="/"
              className="flex items-center gap-2 cursor-pointer text-lg md:text-2xl font-bold text-gray-800 hover:text-pink-500 transition-colors duration-300"
            >
              <span className="transition-transform duration-300 hover:scale-110">
                🏡
              </span>
              <span>HomiCart</span>
            </Link>
          </div>

          {/* Right: Desktop Only */}
          <div className="hidden md:flex items-center gap-4">
            {/* Location */}
            <div className="flex items-center text-pink-500 font-medium cursor-pointer gap-1">
              <MapPin size={18} />
              <span className="text-sm">Dhaka</span>
              <ChevronDown size={14} />
            </div>

            {/* Language */}
            <div className="flex items-center bg-white rounded-full p-1 border border-gray-200">
              <button className="px-3 py-1 text-xs font-bold text-gray-600 border-r">
                EN
              </button>
              <button className="px-3 py-1 text-xs font-bold text-gray-400">
                বাং
              </button>
            </div>

           
            {user ? (
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-gray-700">
                  {user.displayName || user.email}
                </span>

                <button
                  onClick={handleLogout}
                  className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-bold"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="bg-[#f05a5b] hover:bg-red-500 text-white px-6 py-2 rounded-md font-bold text-sm"
              >
                Login
              </Link>
            )}
          </div>

       
        </div>
      </nav>

      {/* Sidebar */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Navbar;

