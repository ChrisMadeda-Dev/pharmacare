"use client";

import React from "react";
import { motion } from "framer-motion";

// --- Inline SVG Icon ---
// Replaced react-icons with a self-contained inline SVG to prevent dependency errors.
const ArrowRightIcon = (props) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z"></path>
    <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2h12.172z"></path>
  </svg>
);

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative w-full h-[90svh] font-sans">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="images/bg2.jpg"
          alt="A healthcare professional using a laptop, signifying modern pharmaceutical services."
          className="object-cover object-top w-full h-full"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/1920x1080/0f172a/FFFFFF?text=Modern+Pharmacy";
          }}
        />
        <div className="absolute inset-0 bg-black/53 " aria-hidden="true"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4 text-center text-white pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center max-w-4xl"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Your Trusted Partner in Health and Wellness.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-2xl mt-4 text-lg text-blue-100 md:text-xl"
          >
            Providing professional pharmaceutical care and a wide range of
            quality medications.
          </motion.p>

          {/* CTA Button as a Link */}
          <motion.div
            variants={itemVariants}
            className="mt-10"
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="/services"
              className="group flex items-center justify-center whitespace-nowrap px-8 py-4 font-bold text-white transition-all duration-300 ease-in-out bg-[#3b82f6] rounded-full shadow-lg transform hover:-translate-y-1 hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-500/30 focus:outline-none focus:ring-4 focus:ring-blue-400"
            >
              <span>Explore Our Services</span>
              <ArrowRightIcon className="ml-2" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
