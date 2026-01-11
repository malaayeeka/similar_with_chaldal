import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Navbar/Sidebar";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import Link from "next/link";

const stationeryProducts = [
  {
    id: 1,
    name: "Fresh Campus 4B Pencil 66 gm",
    unit: "12 pcs",
    image: "/fresh-campus-4b-pencil-66-gm-12-pcs.webp",
    price: 120,
    oldPrice: null,
  },
  {
    id: 2,
    name: "Econo Soft Grip Ball Pen",
    unit: "10 pcs",
    image: "/econo-soft-grip-ball-pen-10-pcs.webp",
    price: 100,
    oldPrice: null,
  },
  {
    id: 3,
    name: "University khata 300 Pages",
    unit: "1 pcs",
    image: "/university-khata-300-pages-1-pcs.webp",
    price: 169,
    oldPrice: 180,
  },
  {
    id: 4,
    name: "Deli Stapler Machine (Blue)",
    unit: "1 pcs",
    image: "/deli-stapler-machine-blue-1-pcs.webp",
    price: 90,
    oldPrice: null,
  },
  {
    id: 5,
    name: "RFL Good Luck Drawing Book 52 Page",
    unit: "each",
    image: "/rfl-good-luck-drawing-book-52-page-1-pcs.webp",
    price: 80,
    oldPrice: 100,
  },
  {
    id: 6,
    name: "Deli Liquid Highlighter Chisel Tip (Yellow))",
    unit: "each",
    image: "/deli-liquid-highlighter-chisel-tip-yellow-1-pcs.webp",
    price: 35,
    oldPrice: null,
  },
  {
    id: 7,
    name: "Faber Castell Connector Pen 15 Color",
    unit: "Full Set",
    image: "/faber-castell-connector-pen-15-color-1-pcs.webp",
    price: 150,
    oldPrice: null,
  },
  {
    id: 8,
    name: "Citiplus Scientific Electronic Calculator (Sx-991 Ms)",
    unit: "each",
    image: "/citiplus-scientific-electronic-calculator-sx-991-ms-1-pcs.webp",
    price: 729,
    oldPrice: null,
  },
];

export default function StationeryOfficePage() {
  return (
    <>
      <Navbar />
      <Sidebar />

      <div className="p-4 max-w-7xl mx-auto">
        <h2 className="text-xl font-bold text-gray-700 mb-4">
          Stationery & Office
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 xl:grid-cols-8 gap-3">
          {stationeryProducts.map((p) => (
            <Link
              href={`/stationery-office/${p.id}`}
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
