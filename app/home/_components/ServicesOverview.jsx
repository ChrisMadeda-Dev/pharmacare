"use client";

import React from "react";
import { motion } from "framer-motion";

// --- Inline SVG Icons ---
// To resolve the dependency issue and make the component fully self-contained,
// the icons from 'react-icons' have been replaced with inline SVG components.

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

// --- Service Data ---
const services = [
  {
    icon: FaBriefcaseMedical,
    title: "Medication Dispensing",
    description: "Accurate and timely prescription fulfillment.",
  },
  {
    icon: FaNotesMedical,
    title: "Therapy Management",
    description: "Personalized medication therapy monitoring.",
  },
  {
    icon: FaUserMd,
    title: "Wellness Consultations",
    description: "Expert advice on health and wellness goals.",
  },
  {
    icon: FaHeartbeat,
    title: "Health Screening",
    description: "Essential checks to monitor your health.",
  },
];

// --- Framer Motion Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// --- The Services Overview Component ---
const ServicesOverview = () => {
  return (
    <div className="py-20 bg-slate-100 sm:py-24">
      <div className="max-w-6xl px-4 mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-4xl font-bold tracking-tight text-[#005B96] sm:text-5xl">
          Our Core Services
        </h2>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="p-8 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-xl"
            >
              {/* Service Icon */}
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-blue-100 rounded-full">
                <service.icon className="w-8 h-8 text-[#3b82f6]" />
              </div>

              {/* Service Title */}
              <h3 className="mt-6 text-xl font-semibold text-slate-800">
                {service.title}
              </h3>

              {/* Optional: Service Description */}
              <p className="mt-2 text-slate-500">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesOverview;
