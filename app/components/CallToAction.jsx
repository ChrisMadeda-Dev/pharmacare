"use client";

import React from "react";
import { motion } from "framer-motion";

// --- Inline SVG Icon ---
// Using a self-contained inline SVG for the arrow icon.
const ArrowRightIcon = (props) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

// --- The Call to Action Component ---
const CallToAction = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-white sm:py-24"
    >
      <div className="max-w-4xl px-4 mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold tracking-tight text-[#005B96] sm:text-4xl">
          Your Health is Our Priority
        </h2>

        {/* Sub-heading */}
        <p className="max-w-2xl mx-auto mt-4 text-lg text-slate-600">
          Have questions or need expert advice? Our dedicated team of
          pharmacists in Nairobi is ready to provide you with personalized care
          and support.
        </p>

        {/* CTA Button */}
        <div className="mt-10">
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-300 transform bg-[#3b82f6] rounded-full shadow-lg hover:bg-blue-600 hover:-translate-y-1"
          >
            <span>Contact Us Today</span>
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default CallToAction;
