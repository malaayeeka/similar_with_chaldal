"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function Register() {
  const [form, setForm] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    phone: "",
    address: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: "",
    gender: "",
    reason: "",
  });

  const [acceptTerms, setAcceptTerms] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ Button enable ONLY if ALL fields filled + terms ticked
  const isButtonEnabled =
    Object.values(form).every((value) => value.trim() !== "") &&
    acceptTerms;

  const handleRegister = () => {
    // ❌ Terms
    if (!acceptTerms) {
      setError("Please accept Terms & Conditions");
      return;
    }
    // ❌ Email validation
    if (!form.email.includes("@") || !form.email.includes(".com")) {
      setError("Please enter a valid email");
      return;
    }
    // ❌ Password length
    if (form.password.length < 8 || form.password.length > 15) {
      setError("Password must be 8–15 characters");
      return;
    }
    // ❌ Password mismatch
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError("");
    console.log("Registered Data:", form);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto mt-20 p-6 bg-yellow-100 shadow rounded">
        <h2 className="text-xl font-bold mb-6 text-center">
          Create Your HomiCart Account
        </h2>

        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">First Name</label>
            <input
              name="firstName"
              placeholder="Enter First Name"
              maxLength={20}
              className="border p-2 rounded w-full"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Middle Name</label>
            <input
              name="middleName"
              placeholder="Enter Middle Name"
              maxLength={20}
              className="border p-2 rounded w-full"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Last Name</label>
            <input
              name="lastName"
              placeholder="Enter Last Name"
              maxLength={20}
              className="border p-2 rounded w-full"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Phone Number</label>
          <input
            name="phone"
            placeholder="Enter Phone Number"
            maxLength={15}
            className="border p-2 rounded w-full"
            onChange={handleChange}
          />
        </div>

        {/* Address */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Address</label>
          <input
            name="address"
            placeholder="Enter Address"
            maxLength={30}
            className="border p-2 rounded w-full"
            onChange={handleChange}
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            name="email"
            placeholder="Enter Email"
            maxLength={30}
            type="email"
            className="border p-2 rounded w-full"
            onChange={handleChange}
          />
        </div>

        {/* Passwords */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              name="password"
              placeholder="Enter Password"
              type="password"
              maxLength={15}
              className="border p-2 rounded w-full"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Confirm Password</label>
            <input
              name="confirmPassword"
              placeholder="Confirm Password"
              type="password"
              maxLength={15}
              className="border p-2 rounded w-full"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* DOB */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Date of Birth</label>
          <input
            name="dob"
            type="date"
            className="border p-2 rounded w-full"
            onChange={handleChange}
          />
        </div>

        {/* Gender */}
        <div className="mb-4">
          <p className="text-sm font-medium mb-1">Gender</p>
          <div className="flex gap-4 text-sm">
            {["Male", "Female", "Other"].map((g) => (
              <label key={g} className="flex items-center gap-1">
                <input type="radio" name="gender" value={g} onChange={handleChange} />
                {g}
              </label>
            ))}
          </div>
        </div>

        {/* Reason */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Why did you choose HomiCart?
          </label>
          <textarea
            name="reason"
            placeholder="Enter your reason"
            maxLength={50}
            className="border p-2 rounded w-full"
            onChange={handleChange}
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

        {/* Button */}
        <button
          onClick={handleRegister}
          disabled={!isButtonEnabled}
          className={`w-full py-2 rounded text-white ${
            isButtonEnabled ? "bg-red-600 hover:bg-red-700" : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Register
        </button>

        <p className="text-sm mt-4 text-center">
          Already registered?{" "}
          <Link href="/login" className="text-red-600">Login</Link>
        </p>
      </div>

      <Footer />
    </>
  );
}
