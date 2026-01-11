import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Navbar/Sidebar";
import Footer from "@/components/Footer/Footer";
import React from 'react';
import { 
  ShieldCheck, 
  Truck, 
  Search, 
  UserCheck, 
  Eye, 
  PhoneCall, 
  CheckCircle 
} from 'lucide-react';

const SafetyCenter = () => {
  return (
    <>
    <Navbar />
      <Sidebar />
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Safety Center
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-green-600 mb-6">
            Your Safety, Our Priority.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            At Chaldal, we prioritise your safety with secure shopping, strict quality checks, and reliable service. 
            Shop with confidence, knowing you're in good hands.
          </p>
        </div>
      </section>

      {/* How We Ensure Safety - Grid */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold text-center mb-12">How We Ensure Your Safety</h3>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
              <UserCheck size={32} />
            </div>
            <h4 className="text-xl font-bold mb-3">Verify Delivery Associates</h4>
            <p className="text-gray-600">
              We carefully verify all our Delivery Associates and provide ongoing training to ensure safety and professionalism.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
              <Truck size={32} />
            </div>
            <h4 className="text-xl font-bold mb-3">Real-Time Tracking</h4>
            <p className="text-gray-600">
              We ensure your security with real-time tracking, so you always know where your delivery is and who's bringing it.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
              <Eye size={32} />
            </div>
            <h4 className="text-xl font-bold mb-3">Continuous Monitoring</h4>
            <p className="text-gray-600">
              We closely track all deliveries to spot and address any irregularities quickly.
            </p>
          </div>
        </div>
      </section>

      {/* Steps You Can Take */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Safety Steps You Can Take</h3>
          
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 bg-yellow-100 p-3 rounded-lg text-yellow-700 font-bold">01</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Spot Chaldal Delivery</h4>
                <p className="text-gray-600">Our delivery associates are always in Uniform and carry an official Chaldal ID card.</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 bg-yellow-100 p-3 rounded-lg text-yellow-700 font-bold">02</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Verify Delivery Associate Details</h4>
                <p className="text-gray-600">Please take a moment to ensure the delivery associate you see in the app matches the person delivering the order.</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 bg-yellow-100 p-3 rounded-lg text-yellow-700 font-bold">03</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Oversee your delivery</h4>
                <p className="text-gray-600">We recommend doorstep delivery, but if entry is needed for bulky items, please ensure an adult supervises closely.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Report Concern Call to Action */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="bg-green-600 text-white rounded-3xl p-10 shadow-xl">
          <ShieldCheck size={64} className="mx-auto mb-6 opacity-90" />
          <h3 className="text-3xl font-bold mb-4">Have a safety concern?</h3>
          <p className="text-lg mb-8 opacity-90">
            If you notice anything unusual with your delivery, contact us right away. Your trust means everything to us!
          </p>
          <button className="bg-white text-green-700 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
            <PhoneCall size={20} />
            Report a Concern
          </button>
        </div>
      </section>

      {/* Footer message */}
      <footer className="max-w-4xl mx-auto px-4 pb-16 text-center text-gray-500">
        <p>It fuels our dedication for excellence, and we work tirelessly to meet and exceed your expectations with each and every delivery.</p>
        <p className="mt-4 font-semibold text-gray-700">Thank you for letting us be a part of your everyday life.</p>
      </footer>
    </div>
    <Footer/>
    </>
  );
};

export default SafetyCenter;