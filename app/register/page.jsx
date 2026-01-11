"use client";
import { useState } from "react";
import Link from "next/link";
// import Lottie from "lottie-react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <>
      <Navbar />
    <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Register</h2>

      <input
        placeholder="Name"
        className="w-full border p-2 mb-3"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Email"
        className="w-full border p-2 mb-3"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full border p-2 mb-4"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button className="w-full bg-red-600 text-white py-2 rounded">
        Register
      </button>

      <p className="text-sm mt-4 text-center">
        Already registered?{" "}
        <Link href="/login" className="text-red-600">
          Login
        </Link>
      </p>
    </div>
          <Footer />
    </>
  );
}
