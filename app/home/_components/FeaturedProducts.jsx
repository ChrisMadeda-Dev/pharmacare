"use client";
import React from "react";
import { motion } from "framer-motion";

// --- Inline SVG Icon ---
// Replaced 'react-icons' with a self-contained inline SVG to prevent import errors.
const ArrowRightIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-5 h-5"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

// --- Product Data ---
// An array of objects for featured products to keep the component clean and scalable.
const products = [
  {
    name: "Panadol Advanced",
    tagline: "Cure headaches and body pains.",
    imageUrl: "images/8.jpg",
  },
  {
    name: "Paracetamol 500mg",
    tagline: "Fast relief from pain and fever.",
    imageUrl: "images/3.jpg",
  },
  {
    name: "Cetirizine 10mg",
    tagline: "24-hour allergy control.",
    imageUrl: "images/15.png",
  },
  {
    name: "Vitamin C 1000mg",
    tagline: "Boost your immune system.",
    imageUrl: "images/2.png",
  },
];

// --- Framer Motion Variants for Hover Effect ---
const cardHoverVariants = {
  hover: {
    scale: 1.05,
    y: -5,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
};

const buttonHoverVariants = {
  hover: {
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 400,
    },
  },
  tap: {
    scale: 0.98,
  },
};

// --- The Featured Products Component ---
const FeaturedProducts = () => {
  const handleViewMoreClick = () => {
    // Navigate to the products page
    window.location.href = "/products";
  };

  return (
    <div className="py-20 bg-white sm:py-24">
      <div className="max-w-6xl px-4 mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold tracking-tight text-[#005B96] sm:text-5xl">
          Featured Products
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <motion.div
              key={product.name}
              variants={cardHoverVariants}
              whileHover="hover"
              className="overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm cursor-pointer group"
            >
              {/* Product Image */}
              <div className="w-full h-56">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="object-cover w-full h-full"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/400/CCCCCC/FFFFFF?text=Image+Not+Found";
                  }}
                />
              </div>
              {/* Product Info */}
              <div className="p-6 text-left">
                <h3 className="text-lg font-semibold text-slate-800">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-slate-500">{product.tagline}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-16">
          <motion.button
            variants={buttonHoverVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={handleViewMoreClick}
            className="inline-flex items-center justify-center px-8 py-3 font-semibold text-white transition-colors duration-300 bg-[#3b82f6] rounded-full shadow-md hover:bg-[#004a7c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#005B96]"
          >
            <span>View More Products</span>
            {/* Using the inline SVG component */}
            <ArrowRightIcon className="w-4 h-4 ml-2" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
