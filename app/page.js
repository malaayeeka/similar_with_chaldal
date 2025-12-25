"use client"
import Navbar from "@/components/Navbar/Navbar";
import Banner from "@/components/Banner/Banner"; 
import Sidebar from "@/components/Navbar/Sidebar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Sidebar />
    </>
  );
}