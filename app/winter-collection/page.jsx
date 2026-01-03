'use client';

import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Navbar/Sidebar";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import Link from "next/link";

const winterProducts = [
  {
    id: 1,
    name: "Chicken Eggs (Discounted)",
    unit: "12 pcs",
    image: "/chicken-eggs-discounted-12-pcs.webp",
    price: 99,
    oldPrice: 109,
  },
  {
    id: 2,
    name: "Tata Tea Premium",
    unit: "400 gm",
    image: "/tata-tea-premium-400-gm.webp",
    price: 149,
    oldPrice: 220,
  },
  {
    id: 3,
    name: "Golden Harvest Premium Deshi Paratha 20 pcs",
    unit: "1300 gm",
    image: "/golden-harvest-premium-deshi-paratha-20-pcs-1300-gm.webp",
    price: 288,
    oldPrice: 320,
  },
  {
    id: 4,
    name: "New Local Onion (Murikata) Special Offer ± 50 gm",
    unit: "1 kg",
    image: "/new-local-onion-murikata-50gm-1-kg.webp",
    price: 75,
    oldPrice: 85,
  },
  {
    id: 5,
    name: "Ching's Red Chilli Sauce",
    unit: "200 gm",
    image: "/chings-red-chilli-sauce-200-gm.webp",
    price: 99,
    oldPrice: 160,
  },
  {
    id: 6,
    name: "Fulkopi (Cauliflower)",
    unit: "each",
    image: "/fulkopi-cauliflower-1-pcs.webp",
    price: 29,
    oldPrice: 40,
  },
  {
    id: 7,
    name: "Badhakopi (Cabbage)",
    unit: "each",
    image: "/badhakopi-cabbage-1-pcs.webp",
    price: 39,
    oldPrice: null,
  },
  {
    id: 8,
    name: "Coriander Leaves (Dhonia Pata) ± 10 gm",
    unit: "100 gm",
    image: "/coriander-leaves-dhonia-pata-10-gm-100-gm.webp",
    price: 9,
    oldPrice: null,
  },
  {
    id: 9,
    name: "Komola (Orange) Imported ± 50 gm",
    unit: "1 kg",
    image: "/komola-orange-imported-50-gm-1-kg.webp",
    price: 369,
    oldPrice: null,
  },
  {
    id: 10,
    name: "Kazi Farms Kitchen Plain Paratha Family",
    unit: "20 pcs (1300 gm)",
    image: "/kazi-farms-kitchen-plain-paratha-family-1300-gm-20-pcs.webp",
    price: 320,
    oldPrice: null,
  },
  {
    id: 11,
    name: "Golden Harvest Mega Deshi Paratha",
    unit: "20 pcs (1600 gm)",
    image: "/golden-harvest-mega-deshi-paratha-1600-gm-20-pcs.webp",
    price: 380,
    oldPrice: null,
  },
  {
    id: 12,
    name: "Ruchi BBQ Sauce",
    unit: "200 gm",
    image: "/ruchi-bbq-sauce-200-gm.webp",
    price: 150,
    oldPrice: null,
  },
  {
    id: 13,
    name: "Golden Grain Puffed Rice (Hand Made)",
    unit: "400 gm",
    image: "/golden-grain-puffed-rice-hand-made-400-gm.webp",
    price: 85,
    oldPrice: 90,
  },
  {
    id: 14,
    name: "Whole Deshi Duck Skin On",
    unit: "900 gm",
    image: "/whole-deshi-duck-skin-on-net-weight-50-gm-900-gm.webp",
    price: 749,
    oldPrice: 849,
  },
  {
    id: 15,
    name: "Flat Bean (Sheem)",
    unit: "500 gm",
    image: "/flat-bean-sheem-500-gm.webp",
    price: 29,
    oldPrice: null,
  },
  {
    id: 16,
    name: "Mula (Radish) ± 25 gm",
    unit: "500 gm",
    image: "/mula-radish-25-gm-500-gm.webp",
    price: 25,
    oldPrice: null,
  },
  {
    id: 17,
    name: "Mula Shak (Radish Spinach)",
    unit: "1 bundle",
    image: "/mula-shak-radish-spinach-1-bundle.webp",
    price: 19,
    oldPrice: null,
  },
  {
    id: 18,
    name: "Lomba Sheem (Mou Sheem)",
    unit: "500 gm",
    image: "/lomba-sheem-mou-sheem-500-gm.webp",
    price: 45,
    oldPrice: 65,
  },
  {
    id: 19,
    name: "Shorshe Shak (Mustard Spinach)",
    unit: "1 bundle",
    image: "/shorshe-shak-mustard-spinach-1-bundle.webp",
    price: 19,
    oldPrice: 25,
  },
  {
    id: 20,
    name: "Parachute SkinPure Petroleum Jelly",
    unit: "15 ml",
    image: "/parachute-skinpure-petroleum-jelly-15-ml.webp",
    price: 25,
    oldPrice: null,
  },
  {
    id: 21,
    name: "Skin Secret Glycerin",
    unit: "125 ml",
    image: "/skin-secret-glycerin-125-ml.webp",
    price: 140,
    oldPrice: null,
  },
  {
    id: 22,
    name: "Meril Baby Lotion",
    unit: "200 ml",
    image: "/meril-baby-lotion-200-ml.webp",
    price: 360,
    oldPrice: null,
  },
  {
    id: 23,
    name: "Pond's Vanishing Cream",
    unit: "28 gm",
    image: "/ponds-vanishing-cream-28-gm.webp",
    price: 60,
    oldPrice: null,
  },
  {
    id: 24,
    name: "Vaseline Petroleum Jelly",
    unit: "50 ml",
    image: "/vaseline-petroleum-jelly-50-ml.webp",
    price: 65,
    oldPrice: null,
  },
];

export default function WinterCollectionPage() {
  return (
    <>
      <Navbar />
      <Sidebar />

      <div className="p-4 max-w-7xl mx-auto">
        <h2 className="text-xl font-bold text-gray-700 mb-4">
          Winter Collection
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 xl:grid-cols-8 gap-3">
          {winterProducts.map((p) => (
            <Link
              href={`/winter-collection/${p.id}`}
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

                <p className="text-[12px] text-gray-500 mb-2">
                  {p.unit}
                </p>

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
                    onClick={(e) => e.preventDefault()}
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
