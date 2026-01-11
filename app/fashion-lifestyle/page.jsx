
import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Navbar/Sidebar";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Fabric Lagbe Gents Panjabi M (GP-1)",
    unit: "each",
    image: "/fabric-lagbe-gents-panjabi-m-gp-1-1-pcs.webp",
    price: 731,
    oldPrice: 860,
  },
  {
    id: 2,
    name: "Fabric Lagbe Lungi Tangai (T-4)",
    unit: "each",
    image: "/fabric-lagbe-lungi-tangai-t-4-1-pcs.webp",
    price: 553,
    oldPrice: 650,
  },
  {
    id: 3,
    name: "Fabric Lagbe Lungi Tangai (T-4)",
    unit: "each",
    image: "/fabric-lagbe-lungi-tangai-t-4-1-pcs.webp",
    price: 553,
    oldPrice: 650,
  },
  {
    id: 4,
    name: "Knee Cap Soft ( XL Size)",
    unit: "each",
    image: "/knee-cap-soft-xl-size-1-pcs.webp",
    price: 429,
    oldPrice: 713,
  },
  {
    id: 5,
    name: "Raincoat (Black)",
    unit: "each",
    image: "/raincoat-black-1-pcs.webp",
    price: 699,
    oldPrice: null,
  },
  {
    id: 6,
    name: "Nomad Ladies Bag Blue (Pro)",
    unit: "each",
    image: "/nomad-ladies-bag-blue-pro-1-pcs.webp",
    price: 1850,
    oldPrice: null,
  },
  {
    id: 7,
    name: "Pierre Cardin Natural Look Foundation",
    unit: "30 ml",
    image: "/pierre-cardin-natural-look-foundation-30-ml.webp",
    price: 1250,
    oldPrice: null,
  },
  {
    id: 8,
    name: "Lipsilk Lip Balm Strawberry",
    unit: "7 gm",
    image: "/lipsilk-lip-balm-strawberry-7-gm.webp",
    price: 210,
    oldPrice: null,
  },
];

export default function FashionLifestylePage() {
  return (
    <>
      <Navbar />
      <Sidebar />

      <div className="p-4 max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Fashion & Lifestyle
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {products.map((p) => (
            <Link
              key={p.id}
              href={`/fashion-lifestyle/${p.id}`}
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
                  <button
                 
                    className="flex items-center text-xs text-red-600 font-medium py-1 px-2 border border-red-200 rounded-sm hover:bg-red-50 transition"
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
