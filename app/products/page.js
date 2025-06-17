"use client";

import React from "react";
import { motion } from "framer-motion";
import CallToAction from "../components/CallToAction";

// --- Inline SVG Icons ---
// Using self-contained inline SVGs for icons to ensure component portability and avoid dependency issues.
const FaInfoCircle = (props) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 512 512"
    {...props}
  >
    <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path>
  </svg>
);

// --- Product Data ---
const otcProducts = [
  {
    name: "Panadol Advanced",
    description: "For headaches and body pains",
    imageUrl: "images/8.jpg",
  },
  {
    name: "Paracetamol",
    description: "For pain and fever relief",
    imageUrl: "images/3.jpg",
  },
  {
    name: "Ibuprofen",
    description: "Anti-inflammatory painkiller",
    imageUrl: "images/7.jpg",
  },
  {
    name: "Vitamin C Supplements",
    description: "To boost immune health",
    imageUrl: "images/2.png",
  },
  {
    name: "Cetirizine",
    description: "For allergy symptoms",
    imageUrl: "images/15.png",
  },
];

const prescriptionProducts = [
  {
    name: "Amoxicillin",
    description: "For bacterial infections. Prescription required.",
    imageUrl: "images/14.png",
  },
  {
    name: "Amlodipine",
    description: "For high blood pressure. Prescription required.",
    imageUrl: "images/13.png",
  },
  {
    name: "Metformin",
    description: "For type 2 diabetes. Prescription required.",
    imageUrl: "images/12.png",
  },
  {
    name: "Salbutamol Inhaler",
    description: "For asthma relief. Prescription required.",
    imageUrl: "images/11.png",
  },
];

// --- Reusable Product Card Component ---
const ProductCard = ({ name, description, imageUrl, isRx }) => (
  <motion.div
    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
    whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
    className="overflow-hidden bg-white border rounded-lg shadow-sm border-slate-200"
  >
    <div className="w-full h-48 bg-slate-200">
      <img src={imageUrl} alt={name} className="object-cover w-full h-full" />
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold text-slate-800">
        {name}{" "}
        {isRx && (
          <span className="ml-1 text-xs font-bold text-red-600 align-super">
            [Rx]
          </span>
        )}
      </h3>
      <p className="mt-1 text-sm text-slate-500">{description}</p>
    </div>
  </motion.div>
);

// --- Main Products Component ---
const Products = () => {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <div className="font-sans bg-white">
      {/* --- Page Header --- */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-20 text-center bg-[#005B96]"
      >
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Our Products
        </h1>
      </motion.header>

      {/* --- Disclaimer Section --- */}
      <section className="py-12">
        <div className="max-w-4xl px-4 mx-auto">
          <div className="p-6 border-l-4 rounded-r-lg bg-blue-50 border-blue-400">
            <div className="flex">
              <div className="flex-shrink-0">
                <FaInfoCircle
                  className="w-6 h-6 text-[#3b82f6]"
                  aria-hidden="true"
                />
              </div>
              <div className="ml-3">
                <p className="text-sm text-blue-800">
                  This website is for informational purposes only and does not
                  facilitate the sale of medication online. Product availability
                  may vary. Please visit our pharmacy in Nairobi for purchase
                  and professional consultation. A valid prescription is
                  mandatory for all prescription-only medicines (marked with an{" "}
                  <span className="font-bold">[Rx]</span> tag).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Product Grids --- */}
      <main className="max-w-6xl px-4 py-12 mx-auto">
        {/* OTC & Wellness Section */}
        <section>
          <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
            Over-the-Counter (OTC) & Wellness
          </h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
          >
            {otcProducts.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </motion.div>
        </section>

        {/* Prescription Medicines Section */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
            Prescription Medicines
          </h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            {prescriptionProducts.map((product) => (
              <ProductCard key={product.name} {...product} isRx />
            ))}
          </motion.div>
        </section>
      </main>
      <CallToAction/>
    </div>
  );
};

export default Products;
