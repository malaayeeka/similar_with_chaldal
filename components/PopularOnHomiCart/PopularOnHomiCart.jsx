import Image from "next/image";

const brands = [
  { name: "PRAN", src: "/pran.webp" },
  { name: "Reckitt", src: "/reckitt.webp" },
  { name: "Nestle", src: "/nestle.webp" },
  { name: "Unilever", src: "/uniliver.webp" },
  { name: "Marico", src: "/marico.webp" },
  { name: "Godrej", src: "/godrej-seeklogo.webp" },
  { name: "CocaCola", src: "/coca-cola.webp" },
  { name: "MGI", src: "/fresh.webp" },
];

const PopularOnHomiCart = () => {
  return (
    <section className="py-8 bg-white">
      <h2 className="text-center text-gray-800 text-lg font-medium mb-6">
        Popular on HomiCart
      </h2>

      <div className="flex justify-center items-center flex-wrap gap-2 sm:gap-4 md:gap-6">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="h-20 w-40 relative hover:scale-105 transition-transform duration-200"
          >
            <Image
              src={brand.src}
              alt={brand.name}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularOnHomiCart;
