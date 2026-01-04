import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Navbar/Sidebar";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "RFL King Jug Tr And Pink",
    unit: "3.5 ltr",
    image: "/rfl-king-jug-tr-and-pink-35-ltr-1-pcs.webp",
    price: 99,
    oldPrice: 150,
  },
  {
    id: 2,
    name: "RFL Stainless Steel Coup Spoon 28 cm",
    unit: "each",
    image: "/rfl-stainless-steel-coup-spoon-28-cm-1-pcs.webp",
    price: 85,
    oldPrice: 110,
  },
  {
    id: 3,
    name: "RFL Winner Tiffin Box Rectangular",
    unit: "each",
    image: "/rfl-winner-tiffin-box-rectangular-1-pcs.webp",
    price: 150,
    oldPrice: null,
  },
  {
    id: 4,
    name: "Stainless Steel Vegetable Peeler",
    unit: "each",
    image: "/stainless-steel-vegetable-peeler-1-pcs.webp",
    price: 259,
    oldPrice: 360,
  },
  {
    id: 5,
    name: "Ying Guns Kitchen Steel Knife (1.6\"x8\")",
    unit: "each",
    image: "/ying-guns-kitchen-steel-knife-16x8-1-pcs.webp",
    price: 199,
    oldPrice: 373,
  },
  {
    id: 6,
    name: "BBQ Net Holder Clip",
    unit: "each",
    image: "/bbq-net-holder-clip-silver-1-pcs.webp",
    price: 349,
    oldPrice: 450,
  },
  {
    id: 7,
    name: "BBQ Grill Tin Maker With 5 Sticks",
    unit: "each",
    image: "/bbq-grill-tin-maker-with-5-stick-silver-1-pcs.webp",
    price: 1299,
    oldPrice: 2110,
  },
  {
    id: 8,
    name: "bbq-brush-red",
    unit: "each",
    image: "/bbq-brush-red-1-pcs.webp",
    price: 179,
    oldPrice: 200,
  },
];

export default function HomeKitchenPage() {
  return (
    <>
      <Navbar />
      <Sidebar />

      <div className="p-4 max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Home & Kitchen
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {products.map((p) => (
            <Link
              key={p.id}
              href={`/home-kitchen/${p.id}`}
              className="group border border-gray-200 rounded-md flex flex-col bg-white overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Image */}
              <div className="relative w-full aspect-square p-2">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Info */}
              <div className="p-2 flex flex-col flex-grow">
                <h2 className="text-xs text-center font-medium h-8 line-clamp-2 mb-1">
                  {p.name}
                </h2>

                <p className="text-xs text-center text-gray-500 mb-1">
                  {p.unit}
                </p>

                <div className="text-center mb-2">
                  <div className="flex justify-center items-center gap-1">
                    <span className="text-lg font-bold text-red-600">
                      ৳{p.price}
                    </span>
                    {p.oldPrice && (
                      <span className="text-xs line-through text-gray-400">
                        ৳{p.oldPrice}
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-auto flex justify-center">
                  <button className="flex items-center text-xs text-red-600 font-medium py-1 px-2 border border-red-200 rounded-sm hover:bg-red-50 transition">
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
