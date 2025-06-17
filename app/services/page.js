"use client";

import React from "react";
import { motion } from "framer-motion";
import CallToAction from "../components/CallToAction";

// --- Inline SVG Icons ---
// Using self-contained inline SVGs for icons to ensure component portability and avoid dependency issues.
const ArrowRightIcon = (props) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 448 512"
    {...props}
  >
    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
  </svg>
);
const FaBriefcaseMedical = (props) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 512 512"
    {...props}
  >
    <path d="M464 128h-80V96c0-17.67-14.33-32-32-32H160c-17.67 0-32 14.33-32 32v32H48C21.49 128 0 149.49 0 176v216c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48zM160 96h192v32H160V96zm176 192h-64v64c0 8.84-7.16 16-16 16s-16-7.16-16-16v-64h-64c-8.84 0-16-7.16-16-16s7.16-16 16-16h64v-64c0-8.84 7.16-16 16-16s16 7.16 16 16v64h64c8.84 0 16 7.16 16 16s-7.16 16-16 16z"></path>
  </svg>
);
const FaNotesMedical = (props) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 512 512"
    {...props}
  >
    <path d="M416 32H96C43 32 0 75 0 128v256c0 53 43 96 96 96h320c53 0 96-43 96-96V128c0-53-43-96-96-96zM240 256h-48c-8.8 0-16-7.2-16-16s7.2-16 16-16h48c8.8 0 16 7.2 16 16s-7.2 16-16 16zm112 96h-64v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16h64v-64c0-8.8 7.2-16 16-16s16 7.2 16 16v64h64c8.8 0 16 7.2 16 16s-7.2 16-16 16z"></path>
  </svg>
);
const FaUserMd = (props) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 448 512"
    {...props}
  >
    <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm96 64H128c-70.7 0-128 57.3-128 128v16c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-16c0-70.7-57.3-128-128-128z"></path>
  </svg>
);
const FaHeartbeat = (props) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 512 512"
    {...props}
  >
    <path d="M320.2 243.8l-49.7 99.4c-6 12.1-23.4 11.7-28.9-.6l-56.9-126.3-30 74.9c-2.4 6-9.5 9.7-16.6 9.7s-14.2-3.7-16.6-9.7l-14.1-35.1-20.9 41.8c-6.7 13.4-24.4 14.5-32.2 2.1l-19.6-31.4c-4.5-7.2-2.2-16.8 4.6-21.3l16-10.7c6.8-4.5 15.6-2.5 20.2 4.2l12.1 19.3 12.1-24.2c6.7-13.4 24.4-14.5 32.2-2.1l19.6 31.4 14.1-35.1c2.4-6 9.5-9.7 16.6-9.7s14.2 3.7 16.6 9.7l30 74.9 48.2-107.1c3.9-8.6 13.4-12.9 21.9-10.5l19.6 5.5c8.5 2.4 13.5 11.4 10.5 20.1zM476 317.5c-31.8-4.3-47.7-33.5-47.8-33.8-22.3-39.9-52.7-72.2-89-94.5C280.4 163.6 224 150 160 150c-64 0-120.4 13.6-179.2 39.2-36.3 16-67.7 39.2-92.4 67.5-4.8 5.5-3.8 14.1 2.5 17.8l20.4 12.4c6.3 3.8 14.5 1.3 17.6-5.2 24.5-51.5 60-93.8 103.1-120.9 39.4-24.9 88.2-40.4 142.2-40.4s102.8 15.5 142.2 40.4c43.1 27.1 78.6 69.4 103.1 120.9 3.1 6.5 11.3 9 17.6 5.2l20.4-12.4c6.3-3.8 7.2-12.4 2.5-17.8z"></path>
  </svg>
);

// --- Data for Services ---
const servicesData = [
  {
    icon: FaBriefcaseMedical,
    title: "Medication Dispensing",
    description:
      "Accurate and safe dispensing of prescription and over-the-counter medications.",
    imageUrl:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: FaNotesMedical,
    title: "Therapy Management (MTM)",
    description:
      "Personalized support for patients with chronic conditions or complex medication regimens.",
    imageUrl:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: FaUserMd,
    title: "Wellness Consultations",
    description:
      "Private consultations on a variety of health topics, from minor ailments to nutritional advice.",
    imageUrl: "images/1.jpg",
  },
  {
    icon: FaHeartbeat,
    title: "Health Screenings",
    description:
      "Convenient on-site screenings, including blood pressure and blood glucose testing.",
    imageUrl:
      "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=2070&auto=format&fit=crop",
  },
];

// --- Services Component ---
const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="font-sans bg-white">
      {/* --- Header --- */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-20 text-center bg-[#005B96]"
      >
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Our Services
        </h1>
      </motion.header>

      {/* --- Services Details --- */}
      <main className="py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-8 px-4 mx-auto max-w-7xl md:grid-cols-2"
        >
          {servicesData.map((service) => {
            const { icon: Icon, title, description, imageUrl } = service;

            return (
              <motion.div
                key={title}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="relative w-full h-96 rounded-xl shadow-lg overflow-hidden group"
              >
                <img
                  src={imageUrl}
                  alt={title}
                  className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/600x400/005b96/FFFFFF?text=Service";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="relative flex flex-col justify-end h-full p-6 text-white">
                  <Icon className="w-10 h-10 mb-4 text-white drop-shadow-lg" />
                  <h3 className="text-2xl font-bold">{title}</h3>
                  <p className="mt-2 text-slate-200">{description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </main>

      {/* --- Call to Action Section --- */}
      <CallToAction/>
    </div>
  );
};

export default Services;
