"use client";
import { useState } from "react";
import Link from "next/link";
import Lottie from "lottie-react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

// Import Lottie JSON
import loginAnimation from "@/public/lottie/login.json";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!acceptTerms) {
      setError("Please accept Terms & Conditions");
      return;
    }

    setError("");
    console.log({ email, password });
  };

  return (
    <>
      <Navbar />

      <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow rounded">
        {/* Lottie Animation */}
        <div className="w-64 mx-auto mb-4">
          <Lottie animationData={loginAnimation} loop />
        </div>

        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Terms & Conditions */}
        <div className="flex items-center mb-3">
          <input
            type="checkbox"
            id="terms"
            className="mr-2"
            checked={acceptTerms}
            onChange={(e) => setAcceptTerms(e.target.checked)}
          />
          <label htmlFor="terms" className="text-sm">
            I agree to the{" "}
            <Link href="/terms" className="text-red-600 underline">
              Terms & Conditions
            </Link>
          </label>
        </div>

        {/* Error message */}
        {error && (
          <p className="text-red-500 text-sm mb-3">{error}</p>
        )}

        {/* Login Button */}
        <button
          onClick={handleLogin}
          disabled={!acceptTerms}
          className={`w-full py-2 rounded text-white ${acceptTerms
            ? "bg-red-600 hover:bg-red-700"
            : "bg-gray-400 cursor-not-allowed"
            }`}
        >
          Login
        </button>

        <p className="text-sm mt-4 text-center">
          Not registered?{" "}
          <Link href="/register" className="text-red-600">
            Register here
          </Link>
        </p>
      </div>

      <Footer />
    </>
  );
}
