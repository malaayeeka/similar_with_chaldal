"use client";
import { useState } from "react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "How much do deliveries cost?",
      answer: (
        <div className="space-y-3">
          <p>A. The delivery fee across the country is in the table below:</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-sm md:text-base">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2 text-left">Location</th>
                  <th className="border border-gray-300 p-2 text-center">Orders below 400</th>
                  <th className="border border-gray-300 p-2 text-center">Orders above 400</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2 font-medium">Dhaka</td>
                  <td className="border border-gray-300 p-2 text-center">59</td>
                  <td className="border border-gray-300 p-2 text-center">49</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-medium">Chattogram</td>
                  <td className="border border-gray-300 p-2 text-center">59</td>
                  <td className="border border-gray-300 p-2 text-center">49</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 font-medium">Jashore</td>
                  <td className="border border-gray-300 p-2 text-center">29</td>
                  <td className="border border-gray-300 p-2 text-center">19</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      question: "What are your delivery hours?",
      answer: "We deliver from 7.30 am to 11 pm every day. You can choose from available slots to find something that is convenient for you.",
    },
    {
      question: "What is your policy on refunds?",
      answer: "We offer a refund or return policy of seven (7) days on most unopened or unspoilt packaged products.\nA. For perishable products such as milk, fruits, and fresh vegetables, we have a 1 (one) day return policy.\nB. Diaper items must be returned for refunds before 10% or 3 pieces (whichever comes first) have been used.\nC. Certain products; Face Mask, Disposable Vinyl Gloves, Alcohol Pads, and Covid Testing Kits are not acceptable for refund or return either opened or unopened.",
    },
    {
      question: "What about the prices?",
      answer: "Our prices are our own but we try our best to offer them to you at or below market prices. Our prices are the same as the local market and we are working hard to get them even lower! If you feel that any product is priced unfairly, please let us know.",
    },
    {
      question: "Do you serve my area?",
      answer: "We are currently serving in three big cities of Bangladesh including Dhaka, Chattogram, Jashore.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-16 text-center">
      <h2 className="text-2xl font-bold mb-8">Common Questions</h2>

      <div className="space-y-4">
        {faqData.map((item, i) => (
          <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
            {/* Question button */}
            <button
              onClick={() => toggleAccordion(i)}
              className="w-full flex justify-between items-center p-5 bg-white hover:bg-gray-50 transition text-left"
            >
              {/* Text will be red when active. */}
              <span
                className={`font-medium transition-colors duration-300 ${
                  activeIndex === i ? "text-red-500" : "text-gray-800"
                }`}
              >
                Q. {item.question}
              </span>

              {/* Icon changes: active has minus, inactive has plus */}
              <span className="text-2xl font-bold text-gray-500">
                {activeIndex === i ? "−" : "+"}
              </span>
            </button>

            {/* Answer Section */}
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                activeIndex === i ? "max-h-[800px] border-t border-gray-100" : "max-h-0"
              }`}
            >
              <div className="p-5 text-left text-gray-600 bg-gray-50 whitespace-pre-line">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-8 text-red-400 font-medium hover:underline">
        Have further questions?
      </button>
    </section>
  );
};

export default FAQSection;