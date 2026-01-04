"use client";
import Image from "next/image";
import Link from "next/link";

const familyData = [
  {
    title: "Corporate",
    description: "Do you own a business? Become a corporate customer",
    image: "corporateImage.webp", 
    link: "/corporate",
  },
  {
    title: "Career",
    description: "Work with a team that works to improve the lives of our consumers and the communities around us.",
    image: "careerImage.webp", 
    link: "/career",
  },
];

const Family = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center mb-12">
        Be part of the Chaldal Family!
      </h2>

      {/* Cards Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {familyData.map((item, index) => (
          <div 
            key={index} 
            className="flex flex-col md:flex-row bg-[#F8F9FA] rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-hover duration-300 hover:shadow-md"
          >
            {/* Content Side */}
            <div className="flex-1 p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 max-w-[250px]">
                  {item.description}
                </p>
              </div>
              
              <Link href={item.link}>
                <button className="bg-[#FF6B6B] hover:bg-[#ff5252] text-white font-medium py-3 px-8 rounded-lg w-fit transition-colors">
                  Find out more
                </button>
              </Link>
            </div>

            {/* Image Side - folder name 'family' used */}
            <div className="relative w-full md:w-1/2 h-[250px] md:h-auto">
              <Image
                src={`/${item.image}`}
                alt={item.title}
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

export default Family;