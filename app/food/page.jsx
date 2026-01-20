import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Navbar/Sidebar";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import Link from "next/link";

const foodProducts = [
  {
    id: 1,
    name: "Fresh Apple",
    unit: "1 kg",
    image: "/apple.webp",
    price: 220,
    oldPrice: 250,
  },
  {
    id: 2,
    name: "Banana",
    unit: "12 pcs",
    image: "/banana-12pcs.webp",
    price: 120,
    oldPrice: null,
  },
  {
    id: 3,
    name: "Broiler Chicken",
    unit: "1 kg",
    image: "/broiler-chicken-1kg.webp",
    price: 210,
    oldPrice: null,
  },
  {
    id: 4,
    name: "Hilsha Fish",
    unit: "1 kg",
    image: "/hilsha-fish-1kg.webp",
    price: 1600,
    oldPrice: 1800,
  },
  {
    id: 5,
    name: "Milk Powder",
    unit: "500 gm",
    image: "/milk-powder-500gm.webp",
    price: 650,
    oldPrice: null,
  },
  {
    id: 6,
    name: "Eggs (Farm Fresh)",
    unit: "12 pcs",
    image: "/eggs-12pcs.webp",
    price: 155,
    oldPrice: null,
  },
  {
    id: 7,
    name: "Chocolate Cookies",
    unit: "200 gm",
    image: "/chocolate-cookies-200gm.webp",
    price: 180,
    oldPrice: 210,
  },
  {
    id: 8,
    name: "Frozen Chicken Nuggets",
    unit: "500 gm",
    image: "/chicken-nuggets-500gm.webp",
    price: 390,
    oldPrice: null,
  },
];

export default function FoodPage() {
  return (
    <>
      <Navbar />
      <Sidebar />

      <div className="p-4 max-w-7xl mx-auto">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Food</h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 xl:grid-cols-8 gap-3">
          {foodProducts.map((p) => (
            <Link
              href={`/food/${p.id}`}
              key={p.id}
              className="group border border-gray-100 rounded-md flex flex-col bg-white overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative w-full aspect-square p-2">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="p-2 flex flex-col flex-grow text-center">
                <h3 className="text-[13px] text-gray-700 leading-tight h-10 line-clamp-2 mb-1">
                  {p.name}
                </h3>

                <p className="text-[12px] text-gray-500 mb-2">{p.unit}</p>

                <div className="flex items-center justify-center gap-1 mb-3">
                  <span className="text-lg font-bold text-[#e04f54]">
                    ৳{p.price}
                  </span>
                  {p.oldPrice && (
                    <span className="text-xs line-through text-gray-400">
                      ৳{p.oldPrice}
                    </span>
                  )}
                </div>

                <div className="mt-auto">
                  <button className="w-full flex items-center justify-center gap-1 text-[13px] text-[#e04f54] font-semibold py-1.5 border-t border-gray-100 hover:bg-red-50 transition-colors">
                    Add to bag
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}