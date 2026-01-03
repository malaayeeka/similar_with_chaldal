"use client";
import Image from "next/image";

const features = [
  {
    title: "Shop & Earn Points",
    description:
      "The more you shop the more you earn - cash back, free shipping, exclusive offers and more. Discover the perks of Egg Club membership.",
    img: "/image.webp",
  },
  {
    title: "Deal of the Day",
    description:
      "Stock up on your favorite groceries for less with our unbeatable deals! Don't miss out - limited stock",
    img: "/dailyDealsShopInfo.webp", 
  },
  {
    title: "Premium Care",
    description:
      "Too busy to place an order or handling order issues? No need to worry as we give you option to take premium assistance.",
    img: "/premiumImage.webp",
  },
];

const ShopGetMore = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold text-center mb-8">Shop & Get More</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-5">
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-700 text-sm">{feature.description}</p>
            </div>
            <div className="w-full h-48 relative">
              <Image
                src={feature.img}
                alt={feature.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopGetMore;
