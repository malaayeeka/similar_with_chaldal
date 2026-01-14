import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Navbar/Sidebar";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import Link from "next/link";

const vehicleProducts = [
  {
    id: 1,
    name: "Car Air Freshener (Vanilla)",
    unit: "1 pcs",
    image: "/car-air-freshener-vanilla.webp",
    price: 399,
    oldPrice: null,
  },
  {
    id: 2,
    name: "Car Cleaning Brush",
    unit: "1 pcs",
    image: "/car-cleaning-brush.webp",
    price: 350,
    oldPrice: null,
  },
  {
    id: 3,
    name: "Car Floor Mats (Set of 4)",
    unit: "4 pcs",
    image: "/car-floor-mats-4pcs.webp",
    price: 1200,
    oldPrice: 1500,
  },
  {
    id: 4,
    name: "Vehicle Mobile Holder",
    unit: "1 pcs",
    image: "/vehicle-mobile-holder.webp",
    price: 499,
    oldPrice: null,
  },
  {
    id: 5,
    name: "Car Sun Shade",
    unit: "1 pcs",
    image: "/car-sun-shade.webp",
    price: 799,
    oldPrice: null,
  },
  {
    id: 6,
    name: "Car Vacuum Cleaner",
    unit: "1 pcs",
    image: "/car-vacuum-cleaner.webp",
    price: 1850,
    oldPrice: 2200,
  },
  {
    id: 7,
    name: "Windshield Wiper Fluid",
    unit: "500 ml",
    image: "/windshield-wiper-fluid.webp",
    price: 250,
    oldPrice: null,
  },
  {
    id: 8,
    name: "Vehicle Battery Booster Cable",
    unit: "1 pcs",
    image: "/vehicle-battery-booster-cable.webp",
    price: 1200,
    oldPrice: null,
  },
];

export default function VehicleEssentialsMainPage() {
  return (
    <>
      <Navbar />
      <Sidebar />

      <div className="p-4 max-w-7xl mx-auto">
        <h2 className="text-xl font-bold text-gray-700 mb-4">
          Vehicle Essentials
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 xl:grid-cols-8 gap-3">
          {vehicleProducts.map((p) => (
            <Link
              href={`/vehicle-essentials/${p.id}`}
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
