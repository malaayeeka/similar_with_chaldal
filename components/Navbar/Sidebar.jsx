"use client";

import React, { useState } from "react";
import { Menu, ChevronRight, HelpCircle, MessageSquare } from "lucide-react";
import { useRouter } from "next/navigation";

// --- Subcategory Data ---
const subcategoriesData = {
  // Data for the Food category based on your image
  Food: [
    { name: "Fruits & Vegetables", path: "/food/fruits-vegetables" },
    { name: "Meat & Fish", path: "/food/meat-fish" },
    { name: "Sauces & Pickles", path: "/food/sauces-pickles" },
    { name: "Dairy & Eggs", path: "/food/dairy-eggs" },
    { name: "Candy & Chocolate", path: "/food/candy-chocolate" },
    { name: "Baking", path: "/food/baking" },
    { name: "Frozen & Canned", path: "/food/frozen-canned" },
  ],
};

const categories = [
  { name: "Offers", icon: "🔴", path: "/offers" },
  { name: "Winter Collection", icon: "❄️", path: "/winter-collection" },
  { name: "Flash Sales", icon: "⚡", path: "/flash-sales" },
  { name: "Food", icon: "🍱", path: "/food", hasSub: true, key: "Food" },
  { name: "Home & Kitchen", icon: "🍳", path: "/home-kitchen" },
  { name: "Fashion & Lifestyle", icon: "👜", path: "/fashion-lifestyle" },
  { name: "Baby Care", icon: "🍼", path: "/baby-care" },
  { name: "Stationery & Office", icon: "📁", path: "/stationery-office" },
  { name: "Health & Wellness", icon: "🏥", path: "/health-wellness" },
  { name: "Vehicle Essentials", icon: "⛽", path: "/vehicle-essentials" },
  { name: "Safety Center", icon: "🛡️", path: "/safety-center" },
];

// --- SubcategoryMenu Component (Handles the smooth dropdown animation) ---
const SubcategoryMenu = ({ subcategories, handleNavigation, isOpen }) => {
  // max-h-[500px] should be tall enough to contain all sub-list items.
  const heightClass = isOpen ? `max-h-[500px] opacity-100` : `max-h-0 opacity-0`;

  return (
    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out ${heightClass}`}
    >
      <ul className="pl-6 ml-4 border-l border-gray-100 mb-2">
        {subcategories.map((subCat, idx) => (
          <li
            key={idx}
            onClick={(e) => {
              e.stopPropagation(); // Prevents this click from bubbling up and closing the sidebar
              handleNavigation(subCat.path);
            }}
            className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <span className="text-[14px] text-gray-700 hover:text-pink-600">
              {subCat.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};


// --- Sidebar Component ---
const Sidebar = ({ isOpen, setIsOpen }) => {
  const router = useRouter();
  // State to track the key of the currently open sub-menu
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const handleNavigation = (path) => {
    router.push(path);
    // You might want to keep the sidebar open when navigating within a category for better UX
    // setIsOpen(false); 
  };

  const toggleSubMenu = (categoryKey) => {
    // If the clicked menu is already open, close it (set to null). Otherwise, open the new one.
    setOpenSubMenu(openSubMenu === categoryKey ? null : categoryKey);
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
        className={`fixed top-0 left-0 h-full w-72 bg-white z-[70] transform transition-transform duration-300 ease-in-out flex flex-col shadow-2xl ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* Header */}
        <div className="bg-[#ffdb4d] p-4 flex items-center gap-4 h-16">
          <button onClick={() => setIsOpen(false)}>
            <Menu size={28} />
          </button>

          <div
            onClick={() => handleNavigation("/")}
            className="flex items-center gap-2 cursor-pointer text-lg md:text-2xl font-bold text-gray-800 hover:text-pink-500 transition-colors duration-300"
          >
            <span className="transition-transform duration-300 hover:scale-110">
              🏡
            </span>
            <span>HomiCart</span>
          </div>

        </div>

        {/* Categories */}
        <div className="flex-1 overflow-y-auto py-2">
          <ul>
            {categories.map((cat, idx) => {
              const categoryKey = cat.key; // Use the key property for lookup
              const subcategories = subcategoriesData[categoryKey];
              const isSubMenuOpen = openSubMenu === categoryKey;

              return (
                <React.Fragment key={idx}>
                  {/* Main Category Item */}
                  <li
                    onClick={() => {
                      if (cat.hasSub && subcategories) {
                        toggleSubMenu(categoryKey);
                      } else {
                        handleNavigation(cat.path);
                      }
                    }}
                    // Add conditional styling for the active state
                    className={`group flex items-center justify-between pr-4 py-2.5 cursor-pointer hover:bg-gray-50 transition-colors border-l-4 border-transparent ${isSubMenuOpen ? 'bg-gray-50 border-pink-500' : ''
                      } ${idx === 2 || idx === 5 || idx === 18
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

                    {cat.hasSub && (
                      <ChevronRight
                        size={16}
                        className={`text-gray-400 transition-transform duration-300 ${isSubMenuOpen ? "rotate-90" : "rotate-0"
                          }`}
                      />
                    )}
                  </li>

                  {/* Subcategories Dropdown */}
                  {cat.hasSub && subcategories && (
                    <SubcategoryMenu
                      subcategories={subcategories}
                      handleNavigation={handleNavigation}
                      isOpen={isSubMenuOpen}
                    />
                  )}
                </React.Fragment>
              );
            })}
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
