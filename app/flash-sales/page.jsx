import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Navbar/Sidebar";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import Link from "next/link";

// Updated data structure to include product volume/weight (unit)
const products = [
  {
    id: 1,
    name: "Foodela Mustard Oil",
    unit: "1 ltr",
    image: "/foodela-mustard-oil-1-ltr.webp", // Assuming you have this image
    price: 299,
    oldPrice: 360,
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
    name: "Kikkoman Soy Sauce",
    unit: "1 ltr",
    image: "/kikkoman-soy-sauce-1-ltr.webp",
    price: 1199,
    oldPrice: 1499,
  },
  {
    id: 4,
    name: "Ching's Red Chili Sauce",
    unit: "200 gm",
    image: "/chings-red-chilli-sauce-200-gm.webp",
    price: 99,
    oldPrice: 160,
  },
  {
    id: 5,
    name: "Dekko Oyster Pasta",
    unit: "200 gm",
    image: "/dekko-oyster-pasta-200-gm.webp",
    price: 52,
    oldPrice: 60,
  },
  {
    id: 6,
    name: "Muskan Drinking Water",
    unit: "500 ml",
    image: "/muskan-drinking-water-500-ml.webp",
    price: 19,
    oldPrice: 20,
  },
  {
    id: 7,
    name: "King's Sunflower Oil Pet",
    unit: "5 ltr",
    image: "/kings-sunflower-oil-pet-5-ltr.webp",
    price: 1299,
    oldPrice: 2110,
  },
  {
    id: 8,
    name: "Savlon Travel Pouch ",
    unit: "each",
    image: "/savlon-travel-pouch-1-pcs.webp",
    price: 399,
    oldPrice: 450,
  },
  {
    id: 9,
    name: "Ruchi Spicy Cashew Nut",
    unit: "150 gm",
    image: "/ruchi-spicy-cashew-nut-150-gm.webp",
    price: 599,
    oldPrice: 660,
  },
  {
    id: 10,
    name: "ACI Pure Kabab Masala",
    unit: "50 gm",
    image: "/aci-pure-kabab-masala-50-gm.webp",
    price: 95,
    oldPrice: 100,
  },
  {
    id: 11,
    name: "Parachute Just For Baby - Milky Glow Baby Lotion",
    unit: "200 ml",
    image: "/parachute-just-for-baby-milky-glow-baby-lotion-200-ml.webp",
    price: 379,
    oldPrice: 405,
  },
  {
    id: 12,
    name: "Fresh Cola",
    unit: "250 ml",
    image: "/fresh-cola-250-ml.webp",
    price: 18,
    oldPrice: 20,
  },
  {
    id: 13,
    name: "Livon Hair Serum",
    unit: "50 ml",
    image: "/livon-hair-serum-50-ml.webp",
    price: 249,
    oldPrice: 300,
  },
  {
    id: 14,
    name: "Pran Coriander (Dhoma) Powder",
    unit: "200 gm",
    image: "/pran-coriander-dhonia-powder-jar-200-gm.webp",
    price: 119,
    oldPrice: 165,
  },
  {
    id: 15,
    name: "Bashundhara Baby Wipes",
    unit: "120 pcs",
    image: "/bashundhara-baby-wipes-120-pcs.webp",
    price: 149,
    oldPrice: 190,
  },
  {
    id: 16,
    name: "Sensodyne Sensitivity & Gum Toothbrush (Buy 2 Get 1 Free)",
    unit: "3 pcs",
    image: "/sensodyne-sensitivity-gum-toothbrush-buy-2-get-1-free-3-pcs.webp",
    price: 288,
    oldPrice: 400,
  },
  {
    id: 17,
    name: "Sensodyne Deep Clean Toothbrush",
    unit: "each",
    image: "/sensodyne-deep-clean-toothbrush-1-pcs.webp",
    price: 119,
    oldPrice: 229,
  },
  {
    id: 18,
    name: "Sensodyne Gental Care (Buy 1 Get 1 Free) Toothbrush",
    unit: "2 pcs",
    image: "/sensodyne-gental-care-buy-1-get-1-free-2-pcs.webp",
    price: 229,
    oldPrice: 250,
  },
  {
    id: 19,
    name: "Colgate Total Advance Health Toothpaste",
    unit: "80 gm",
    image: "/colgate-total-advance-health-toothpaste-80-gm.webp",
    price: 179,
    oldPrice: 210,
  },
  {
    id: 20,
    name: "Colgate Total Advance Health Toothpaste (Free Toothbrush)",
    unit: "150 gm",
    image: "/colgate-total-advance-health-toothpaste-free-toothbrush-150-gm.webp",
    price: 349,
    oldPrice: 490,
  },
  {
    id: 21,
    name: "Ujiwala Care Hair Protect Men Shampoo + Conditioner",
    unit: "200 ml",
    image: "/ujjwala-care-hair-protect-men-shampoo-conditioner-200-ml.webp",
    price: 256,
    oldPrice: 350,
  },
  {
    id: 22,
    name: "Ujiwala Care Anti Hairfall Herbal Shampoo",
    unit: "200 ml",
    image: "/ujjwala-care-anti-hairfall-herbal-shampoo-200-ml.webp",
    price: 256,
    oldPrice: 350,
  },
  {
    id: 23,
    name: "Olitalia Italian Olive Oil",
    unit: "100 ml",
    image: "/olitalia-italian-olive-oil-100-ml.webp",
    price: 475,
    oldPrice: null,
  },
  {
    id: 24,
    name: "Dettol Aloe Vera Bodywash",
    unit: "250 ml",
    image: "/dettol-aloe-vera-bodywash-250-ml.webp",
    price: 215,
    oldPrice: 225,
  },
  // Add more products if needed
];

export default function FlashSalesPage() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="p-4 max-w-7xl mx-auto">
        {/* Top Banners Section */}
        <div className="flex space-x-2 mb-4">
          {/* Foodela Banner (Left) */}
          <div className="relative flex-1 h-36 rounded-lg overflow-hidden">
            <Image
              src="/flash-sales.webp" // Placeholder for Foodela banner
              alt="Foodela Products"
              fill
              className="object-contain"
            />
            {/* You might want to add text or logos here */}
          </div>

          {/* Good Knight Banner (Right) */}
          <div className="relative flex-1 h-36 rounded-lg overflow-hidden">
            <Image
              src="/flash-sales (1).webp" // Placeholder for Good Knight banner
              alt="Good Knight Offer"
              fill
              className="object-contain"
            />
            {/* You might want to add offer text here */}
          </div>
        </div>

        {/* Flash Sales Header */}
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Flash Sales
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {products.map((p) => (
            // Product Card
            <Link
              href={`/flash-sales/${p.id}`}
              key={p.id}
              className="group border border-gray-200 rounded-md flex flex-col bg-white overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-square p-2">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Product Info */}
              <div className="p-2 flex flex-col flex-grow">
                {/* Name */}
                <h2 className="text-xs text-center font-medium h-8 line-clamp-2 mb-1">
                  {p.name}
                </h2>

                {/* Volume/Unit */}
                <p className="text-xs text-center text-gray-500 mb-1">
                  {p.unit}
                </p>

                {/* Prices */}
                <div className="text-center mb-2 flex flex-col items-center">
                  <div className="flex items-center gap-1">
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

                {/* Add to Bag Button/Link - Updated to match image style (text link with lightning) */}
                <div className="mt-auto flex justify-center">
                  <button className="flex items-center text-xs text-red-600 font-medium py-1 px-2 border border-red-200 rounded-sm hover:bg-red-50 transition">
                    <svg
                      className="w-3 h-3 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.832 1.573l-7 11a1 1 0 01-1.632-.573l2-7H4a1 1 0 01-.832-1.573l7-11a1 1 0 011.132-.38z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
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
