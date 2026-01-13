"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#F7F7F7] pt-12 pb-6 text-[#4D4D4D] font-sans">
      <div className="max-w-[1400px] mx-auto px-10">
        
        {/* Cities Section */}
        <div className="flex items-center gap-6 mb-12 text-[15px]">
          <span className="font-bold text-gray-700">Cities:</span>
          <div className="flex gap-6">
            {["Dhaka", "Chattogram", "Jashore"].map((city) => (
              <Link key={city} href="#" className="hover:text-[#FF6B6B] underline decoration-gray-300 underline-offset-4">
                {city}
              </Link>
            ))}
          </div>
        </div>

        {/* Main Footer Links & App Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">
          
          {/* About Chaldal (3 columns) */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-gray-800 mb-5 text-[16px]">About Chaldal</h4>
            <ul className="space-y-3 text-[14px]">
              <li><Link href="#" className="hover:text-[#FF6B6B]">Our Story</Link></li>
              <li><Link href="#" className="hover:text-[#FF6B6B]">Team</Link></li>
              <li><Link href="#" className="hover:text-[#FF6B6B]">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-[#FF6B6B]">Terms of Use</Link></li>
            </ul>
          </div>

          {/* Customer Service (3 columns) */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-gray-800 mb-5 text-[16px]">Customer Service</h4>
            <ul className="space-y-3 text-[14px]">
              <li><Link href="#" className="hover:text-[#FF6B6B]">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-[#FF6B6B]">FAQ</Link></li>
            </ul>
          </div>

          {/* For Business (2 columns) */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-gray-800 mb-5 text-[16px]">For Business</h4>
            <ul className="space-y-3 text-[14px]">
              <li><Link href="#" className="hover:text-[#FF6B6B]">Corporate</Link></li>
            </ul>
          </div>

          {/* Newsletter & Support (5 columns) */}
          <div className="lg:col-span-6 flex flex-col items-end gap-6">
            
            {/* Phone Number Input*/}
            <div className="flex w-full max-w-md border border-[#9461fb] rounded-md overflow-hidden bg-white shadow-sm">
              <span className="bg-white px-4 py-2 text-[15px] border-r border-gray-100 flex items-center">
                +88
              </span>
              <input
                type="text"
                className="flex-1 px-4 py-2 outline-none text-[15px]"
                placeholder="Phone number"
              />
              <button className="bg-[#9461fb] text-white px-6 py-2 text-[15px] font-medium hover:bg-[#834feb] transition-colors">
                Get app
              </button>
            </div>

            {/* App Store Buttons */}
            <div className="flex gap-4">
              <Link href="#"><Image src="/playstores.png" alt="Google Play" width={200} height={40} /></Link>
            </div>

            {/* Support Info */}
            <div className="text-right">
              <div className="flex items-center justify-end gap-2 text-[#4D4D4D] mb-1">
                <span className="text-2xl">📞</span>
                <span className="text-2xl font-bold tracking-wider">16710</span>
              </div>
              <p className="text-[14px] text-gray-500">or <span className="font-medium">support@chaldal.com</span></p>
            </div>
          </div>
        </div>

        {/* Payment & Socials */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-8 border-t border-gray-200">
          
          {/* Payment Methods*/}
          <div className="flex items-center gap-5 flex-wrap">
            <span className="font-bold text-[14px] text-gray-700">Payment Methods:</span>
            <div className="flex gap-4 items-center">
               <Image src="/Amex.webp" alt="Amex" width={45} height={30} className="opacity-80 hover:opacity-100" />
               <Image src="/VIsa.webp" alt="Visa" width={45} height={30} className="opacity-80 hover:opacity-100" />
               <Image src="/mastercard.webp" alt="Mastercard" width={45} height={30} className="opacity-80 hover:opacity-100" />
               <Image src="/bkash.webp" alt="Bkash" width={45} height={30} className="opacity-80 hover:opacity-100" />
            </div>
          </div>

          {/* Socials & Language */}
          <div className="flex items-center gap-6">
            <div className="flex gap-5">
              <FaFacebookF className="text-gray-400 hover:text-[#3b5998] cursor-pointer text-xl" />
              <FaTwitter className="text-gray-400 hover:text-[#1da1f2] cursor-pointer text-xl" />
              <FaInstagram className="text-gray-400 hover:text-[#e1306c] cursor-pointer text-xl" />
            </div>
            <div className="flex items-center gap-2 border border-gray-300 px-4 py-1.5 rounded-full text-[14px] cursor-pointer hover:bg-gray-100 transition-colors">
              <FaGlobe className="text-gray-500" /> English (EN)
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 text-[13px] text-gray-400">
          © 2025 HomiCart Limited
        </div>
      </div>
    </footer>
  );
};

export default Footer;