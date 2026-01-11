import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Navbar/Sidebar";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import Link from "next/link";


const babyCareProducts = [
  {
    id: 1,
    name: "Meril Baby Lotion",
    unit: "200 ml",
    image: "/meril-baby-lotion-200-ml.webp",
    price: 360,
    oldPrice: null,
  },
  {
    id: 2,
    name: "Pond's Vanishing Cream",
    unit: "28 gm",
    image: "/ponds-vanishing-cream-28-gm.webp",
    price: 60,
    oldPrice: null,
  },
  {
    id: 3,
    name: "Parachute SkinPure Petroleum Jelly",
    unit: "15 ml",
    image: "/parachute-skinpure-petroleum-jelly-15-ml.webp",
    price: 25,
    oldPrice: null,
  },
  {
    id: 4,
    name: "Skin Secret Glycerin",
    unit: "125 ml",
    image: "/skin-secret-glycerin-125-ml.webp",
    price: 140,
    oldPrice: null,
  },
  {
    id: 5,
    name: "Parachute Baby Lotion (Milky Glow)",
    unit: "200 ml",
    image: "/parachute-just-for-baby-milky-glow-baby-lotion-200-ml.webp",
    price: 370,
    oldPrice: null,
  },
  {
    id: 6,
    name: "Baby Wipes (Soft & Gentle)",
    unit: "120 pcs",
    image: "/bashundhara-baby-wipes-120-pcs.webp",
    price: 149,
    oldPrice: 180,
  },
  {
    id: 7,
    name: "Parachute Baby Shampoo (Mild)",
    unit: "100 ml",
    image: "/parachute-just-for-baby-baby-shampoo-100-ml.webp",
    price: 199,
    oldPrice: 225,
  },
  {
    id: 8,
    name: "Parachute Baby Powder",
    unit: "100 gm",
    image: "/parachute-just-for-baby-baby-powder-100-gm.webp",
    price: 129,
    oldPrice: 140,
  },
];

export default function BabyCarePage() {

  return (
    <>
      <Navbar />
      <Sidebar />

      <div className="p-4 max-w-7xl mx-auto">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Baby Care</h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 xl:grid-cols-8 gap-3">
          {babyCareProducts.map((p) => (
            <Link
              href={`/baby-care/${p.id}`}
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
                  <button
                    className="w-full flex items-center justify-center gap-1 text-[13px] text-[#e04f54] font-semibold py-1.5 border-t border-gray-100 hover:bg-red-50 transition-colors"
                  >
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
