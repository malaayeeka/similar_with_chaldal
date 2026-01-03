"use client";
import React from "react";

const statsData = [
  {
    count: "26 warehouses",
    label: "all over bangladesh",
    icon: "🏠",
    bgColor: "bg-gray-50",
  },
  {
    count: "5 million orders",
    label: "have been delivered",
    icon: "🛍️",
    bgColor: "bg-gray-50",
  },
  {
    count: "100,000 families",
    label: "are being served",
    icon: "👪",
    bgColor: "bg-gray-50",
  },
  {
    count: "340 million Taka",
    label: "customer savings",
    icon: "🤲",
    bgColor: "bg-gray-50",
  },
];

const StatsSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((item, index) => (
          <div
            key={index}
            className={`${item.bgColor} rounded-xl p-7 flex justify-between items-start shadow-sm border border-gray-100`}
          >
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-gray-900">
                {item.count}
              </h3>
              <p className="text-gray-500 font-medium">
                {item.label}
              </p>
            </div>
            <div className="text-3xl">{item.icon}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;