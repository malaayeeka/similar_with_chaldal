"use client";
import { useState } from "react";
import Link from "next/link";
import Lottie from "lottie-react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import loginAnimation from "@/public/lottie/login.json";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [error, setError] = useState("");

  // Button enable ONLY if email + password filled + terms ticked
  //trim() method removes space and checks is there any empty space left by user
  const isButtonEnabled =
    email.trim() !== "" && password.trim() !== "" && acceptTerms;

  const handleLogin = () => {
    if (!acceptTerms) {
      setError("Please accept Terms & Conditions");
      return;
    }
    if (!email.includes("@") || !email.includes(".com")) {
      setError("Please enter a valid email");
      return;
    }
    if (password.length < 8 || password.length > 15) {
      setError("Password must be 8–15 characters");
      return;
    }

    setError("");
    console.log("Login Data:", { email, password });
  };

  return (
    <>
      <Navbar />

      <div className="max-w-md mx-auto mt-20 p-6 bg-yellow-100 shadow rounded">
        <div className="w-64 mx-auto mb-4">
          <Lottie animationData={loginAnimation} loop />
        </div>

        <h2 className="text-xl font-bold mb-6 text-center">Login to HomiCart</h2>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            maxLength={50}
            className="border p-2 rounded w-full focus:outline-none focus:border-red-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            placeholder="Enter your password (8–15 characters)"
            maxLength={15}
            className="border p-2 rounded w-full focus:outline-none focus:border-red-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Terms */}
        <div className="flex items-center mb-3">
          <input
            type="checkbox"
            className="mr-2"
            checked={acceptTerms}
            onChange={(e) => setAcceptTerms(e.target.checked)}
          />
          <span className="text-sm">
            I agree to the{" "}
            <Link href="/terms" className="text-red-600 underline">
              Terms & Conditions
            </Link>
          </span>
        </div>

        {/* Error */}
        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        {/* Login Button */}
        <button
          onClick={handleLogin}
          disabled={!isButtonEnabled}
          className={`w-full py-2 rounded text-white ${
            isButtonEnabled ? "bg-red-600 hover:bg-red-700" : "bg-gray-400 cursor-not-allowed"
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
