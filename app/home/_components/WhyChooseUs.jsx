"use client";

import React from "react";
import { motion } from "framer-motion";

// --- Inline SVG Icons ---
// Using self-contained inline SVGs to avoid external dependencies and potential import errors.
const StethoscopeIcon = (props) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 512 512"
    {...props}
  >
    <path d="M416 512H96a96 96 0 01-96-96V224a32 32 0 0132-32h16a32 32 0 0132 32v128a32 32 0 0032 32h256a32 32 0 0032-32V224a32 32 0 0132-32h16a32 32 0 0132 32v192a96 96 0 01-96 96zM320 192a128 128 0 11-256 0 128 128 0 01256 0zM192 192a64 64 0 10-128 0 64 64 0 00128 0z"></path>
  </svg>
);

const CheckCircleIcon = (props) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 512 512"
    {...props}
  >
    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628 0z"></path>
  </svg>
);

const HandHoldingHeartIcon = (props) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 512 512"
    {...props}
  >
    <path d="M462.8 112.9C441.1 91.1 409.2 80 376.5 80c-40 0-73.8 16.2-99.3 41.7-25.5-25.5-59.3-41.7-99.3-41.7-32.7 0-64.6 11.1-86.3 32.9-46.4 46.4-46.4 121.5 0 167.9l185.6 185.6c2.5 2.5 5.9 3.9 9.4 3.9s6.9-1.4 9.4-3.9l185.6-185.6c46.4-46.4 46.4-121.5 0-167.9zM312 288H192v-48c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16v48H48c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h96v96c0 8.8 7.2 16 16 16h16c8.8 0 16-7.2 16-16v-96h112c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16z"></path>
  </svg>
);

// --- Feature Data ---
// Using an array to store feature details for cleaner and more maintainable code.
const features = [
  {
    icon: StethoscopeIcon,
    title: "Qualified Pharmacists",
    description:
      "Our team consists of licensed and experienced pharmacists dedicated to providing expert advice.",
  },
  {
    icon: CheckCircleIcon,
    title: "Genuine Medications",
    description:
      "We guarantee authentic and high-quality medications sourced directly from reputable manufacturers.",
  },
  {
    icon: HandHoldingHeartIcon,
    title: "Personalized Care",
    description:
      "We take the time to understand your needs, offering tailored support for your health journey.",
  },
];

// --- The Why Choose Us Component ---
const WhyChooseUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-slate-100 sm:py-24"
    >
      <div className="max-w-6xl px-4 mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-4xl my-3 font-bold tracking-tight text-[#005B96] sm:text-5xl">
          Committed to Your Health
        </h2>
        

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-y-12 gap-x-8 mt-16 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center">
              {/* Feature Icon */}
              <div className="flex items-center justify-center w-20 h-20 text-[#005B96] bg-blue-100 rounded-full">
                <feature.icon className="w-10 h-10" />
              </div>

              {/* Feature Title */}
              <h3 className="mt-6 text-xl font-semibold text-slate-800">
                {feature.title}
              </h3>

              {/* Feature Description */}
              <p className="mt-2 text-base text-slate-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default WhyChooseUs;
