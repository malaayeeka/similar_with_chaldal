"use client";
import Image from "next/image";
import Link from "next/link";

const AppPromotion = () => {
  return (
    <section className="bg-yellow-100 overflow-hidden mx-auto my-12 px-8 py-12 md:py-0 flex flex-col md:flex-row items-center justify-between">

      {/* Leftside content */}
      <div className="md:w-1/2 space-y-6 text-center md:text-center md:pr-10">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
          Download The Chaldal App Now!
        </h2>
        <p className="text-lg text-600">
          Get <span className="font-semibold text-700">5% off</span> on your first order through the Chaldal app and make your shopping experience even smoother! 
        </p>

        {/* App link */}
        <div className="flex flex-wrap gap-4 justify-center pt-4 w-full">
          <Link href="https://apps.apple.com" target="_blank">
            <div className="bg-black text-white px-5 py-2 rounded-xl flex items-center gap-3 hover:bg-gray-800 transition">
              <i className="fab fa-apple text-2xl"></i>
              <div className="text-left">
                <p className="text-[10px] uppercase leading-none">Download on the</p>
                <p className="text-xl font-semibold leading-tight">App Store</p>
              </div>
            </div>
          </Link>

          <Link href="https://play.google.com" target="_blank">
            <div className="bg-black text-white px-5 py-2 rounded-xl flex items-center gap-3 hover:bg-gray-800 transition">
              <i className="fab fa-google-play text-2xl"></i>
              <div className="text-left">
                <p className="text-[10px] uppercase leading-none">GET IT ON</p>
                <p className="text-xl font-semibold leading-tight">Google Play</p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Rightside Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex items-end justify-center self-end">
        {/* Image details */}
        <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[450px]">
          <Image
            src="/downloadApp.webp"
            alt="Mobile App Preview"
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default AppPromotion;