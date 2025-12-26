"use client"
import Navbar from "@/components/Navbar/Navbar";
import Banner from "@/components/Banner/Banner"; 
import Sidebar from "@/components/Navbar/Sidebar";
import Cards from "@/components/Cards/Cards";
import PopularCategories from "@/components/PopularCategories/PopularCategories";
import PopularOnChaldal from "@/components/PopularOnChaldal/PopularOnChaldal";
import ShopGetMore from "@/components/ShopGetMore/ShopGetMore";
import AppPromotion from "@/components/AppPromotion/AppPromotion.jsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Sidebar />
      <Cards/>
      <PopularCategories />
      <PopularOnChaldal/>
      <ShopGetMore />
      <AppPromotion />
    </>
  );
}