
'use client';

import { useParams } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Navbar/Sidebar";
import Footer from "@/components/Footer/Footer";

// Same products data
const products = [
  {
    id: 1,
    name: "Foodela Mustard Oil",
    unit: "1 ltr",
    image: "/foodela-mustard-oil-1-ltr.webp",
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
    image: "/new-products/ruchi-cashew-nut.webp",
    price: 599,
    oldPrice: 660,
  },
  {
    id: 10,
    name: "ACI Pure Kabab Masala",
    unit: "50 gm",
    image: "/new-products/aci-kabab-masala.webp",
    price: 95,
    oldPrice: 100,
  },
  {
    id: 11,
    name: "Parachute Just For Baby - Milky Glow Baby Lotion",
    unit: "200 ml",
    image: "/new-products/parachute-lotion.webp",
    price: 379,
    oldPrice: 405,
  },
  {
    id: 12,
    name: "Fresh Cola",
    unit: "250 ml",
    image: "/new-products/fresh-cola.webp",
    price: 18,
    oldPrice: 20,
  },
  {
    id: 13,
    name: "Livon Hair Serum",
    unit: "50 ml",
    image: "/new-products/livon-hair-serum.webp",
    price: 249,
    oldPrice: 300,
  },
  {
    id: 14,
    name: "Pran Coriander (Dhoma) Powder",
    unit: "200 gm",
    image: "/new-products/pran-coriander.webp",
    price: 119,
    oldPrice: 165,
  },
  {
    id: 15,
    name: "Bashundhara Baby Wipes",
    unit: "120 pcs",
    image: "/new-products/bashundhara-wipes.webp",
    price: 149,
    oldPrice: 190,
  },
  {
    id: 16,
    name: "Sensodyne Sensitivity & Gum Toothbrush (Buy 2 Get 1 Free)",
    unit: "3 pcs",
    image: "/new-products/sensodyne-gum-toothbrush.webp",
    price: 288,
    oldPrice: 400,
  },
  {
    id: 17,
    name: "Sensodyne Deep Clean Toothbrush",
    unit: "each",
    image: "/new-products/sensodyne-deep-clean.webp",
    price: 119,
    oldPrice: 229,
  },
  {
    id: 18,
    name: "Sensodyne Gental Care (Buy 1 Get 1 Free) Toothbrush",
    unit: "2 pcs",
    image: "/new-products/sensodyne-gental-care.webp",
    price: 229,
    oldPrice: 250,
  },
  {
    id: 19,
    name: "Colgate Total Advance Health Toothpaste",
    unit: "80 gm",
    image: "/new-products/colgate-advance-80.webp",
    price: 179,
    oldPrice: 210,
  },
  {
    id: 20,
    name: "Colgate Total Advance Health Toothpaste (Free Toothbrush)",
    unit: "150 gm",
    image: "/new-products/colgate-advance-150.webp",
    price: 349,
    oldPrice: 490,
  },
  {
    id: 21,
    name: "Ujiwala Care Hair Protect Men Shampoo + Conditioner",
    unit: "200 ml",
    image: "/new-products/ujiwala-men-shampoo.webp",
    price: 256,
    oldPrice: 350,
  },
  {
    id: 22,
    name: "Ujiwala Care Anti Hairfall Herbal Shampoo",
    unit: "200 ml",
    image: "/new-products/ujiwala-herbal-shampoo.webp",
    price: 256,
    oldPrice: 350,
  },
  {
    id: 23,
    name: "Olitalia Italian Olive Oil",
    unit: "100 ml",
    image: "/new-products/ujiwala-men-oil.webp",
    price: 475,
    oldPrice: null,
  },
  {
    id: 24,
    name: "Dettol Aloe Vera Bodywash",
    unit: "250 ml",
    image: "/new-products/ujiwala-herbal-oil.webp",
    price: 215,
    oldPrice: 225,
  },
];

export default function Page() {
  const { id } = useParams();

  
  const productId = Number(id);

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="p-10 text-center text-red-600">
        Product not found
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Sidebar />

      <div className="max-w-6xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 rounded-lg shadow">
          <div className="relative w-full aspect-square">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>

          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold mb-2">
              {product.name}
            </h1>

            <p className="text-gray-500 mb-4">
              Unit: {product.unit}
            </p>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl font-bold text-red-600">
                ৳{product.price}
              </span>

              {product.oldPrice && (
                <span className="text-lg line-through text-gray-400">
                  ৳{product.oldPrice}
                </span>
              )}
            </div>

            <p className="text-gray-600 mb-6">
              High quality product available in our flash sale.
              Limited stock available. Grab it before the offer ends.
            </p>

            <div className="flex gap-3">
              <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition">
                Add to Bag
              </button>

              <button className="border border-red-600 text-red-600 px-6 py-2 rounded hover:bg-red-50 transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
