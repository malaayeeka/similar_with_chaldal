import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Navbar/Sidebar";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import Link from "next/link";


const healthWellnessProducts = [
  {
    id: 1,
    name: "Vitamin C Tablets",
    unit: "200 Tablets",
    image: "/Vitamin-C-Tablet-1.webp",
    price: 350,
    oldPrice: null,
  },
  {
    id: 2,
    name: "Multivitamin Gummies",
    unit: "150 pcs",
    image: "/multivitamin-gummies-150-pcs.webp",
    price: 420,
    oldPrice: null,
  },
  {
    id: 3,
    name: "Omega 3 Fish Oil Capsules",
    unit: "180 pcs",
    image: "/omega-3-fish-oil-180-capsules.webp",
    price: 2840,
    oldPrice: 3200,
  },
  {
    id: 4,
    name: "Whey Protein Powder (500 gm)",
    unit: "500 gm",
    image: "/whey-protein-500-gm.webp",
    price: 1200,
    oldPrice: null,
  },
  {
    id: 5,
    name: "Herbal Tea (Pack of 20)",
    unit: "20 bags",
    image: "/herbal-tea-20-bags.webp",
    price: 250,
    oldPrice: null,
  },
  {
    id: 6,
    name: "Aloe Vera Gel",
    unit: "200 ml",
    image: "/aloe-vera-gel-200-ml.webp",
    price: 180,
    oldPrice: null,
  },
  {
    id: 7,
    name: "Hand Sanitizer (100 ml)",
    unit: "100 ml",
    image: "/hand-sanitizer-100-ml.webp",
    price: 75,
    oldPrice: null,
  },
  {
    id: 8,
    name: "Pain Relief Balm",
    unit: "50 gm",
    image: "/pain-relief-balm-50-gm.webp",
    price: 95,
    oldPrice: null,
  },
];

export default function HealthWellnessPage() {
  return (
    <>
      <Navbar />
      <Sidebar />

      <div className="p-4 max-w-7xl mx-auto">
        <h2 className="text-xl font-bold text-gray-700 mb-4">
          Health & Wellness
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 xl:grid-cols-8 gap-3">
          {healthWellnessProducts.map((p) => (
            <Link
              href={`/health-wellness/${p.id}`}
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
