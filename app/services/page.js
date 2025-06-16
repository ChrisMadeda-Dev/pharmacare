"use client";

import React from "react";
import { motion } from "framer-motion";

import { FaArrowRight } from "react-icons/fa";


// --- Inline SVG Icons ---
// Using self-contained inline SVGs for icons to ensure component portability and avoid dependency issues.
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
    title: "Comprehensive Medication Dispensing",
    description:
      "We offer professional and efficient dispensing of both prescription and over-the-counter medications. Our qualified pharmacists take the time to ensure you fully understand your dosage, administration instructions, and any potential side effects. We are committed to accuracy and patient safety in every prescription we fill.",
    imageUrl:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop",
    imageLeft: true,
  },
  {
    icon: FaNotesMedical,
    title: "Medication Therapy Management (MTM)",
    description:
      "For patients with chronic conditions or complex medication regimens, our MTM service provides personalized support. We conduct comprehensive medication reviews to work alongside you and your doctor, aiming to optimize your treatment plan and prevent drug interactions for better health outcomes.",
    imageUrl:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=2070&auto=format&fit=crop",
    imageLeft: false,
  },
  {
    icon: FaUserMd,
    title: "Health and Wellness Consultations",
    description:
      "Beyond prescriptions, we are your partners in wellness. Our knowledgeable pharmacists are available for private consultations on a variety of health topics, including the management of minor ailments, advice on nutritional supplements, and guidance on the proper use of medical devices.",
    imageUrl:
      "images/1.jpg",
    imageLeft: true,
  },
  {
    icon: FaHeartbeat,
    title: "Health Screenings",
    description:
      "Take a proactive step towards managing your health. We offer convenient and accurate on-site health screenings, including blood pressure monitoring and blood glucose testing, to help in the early detection and management of conditions like hypertension and diabetes.",
    imageUrl:
      "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=2070&auto=format&fit=crop",
    imageLeft: false,
  },
];

// --- Services Component ---
const Services = () => {
  const slideInFromLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };
  const slideInFromRight = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <div className="font-sans bg-white">
      {/* --- Header --- */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-20 text-center bg-slate-50"
      >
        <h1 className="text-4xl font-bold tracking-tight text-[#005B96] sm:text-6xl">
          Our Services
        </h1>
      </motion.header>

      {/* --- Services Details --- */}
      <main>
        {servicesData.map((service, index) => {
          const {
            icon: Icon,
            title,
            description,
            imageUrl,
            imageLeft,
          } = service;

          const image = (
            <motion.div
              variants={imageLeft ? slideInFromLeft : slideInFromRight}
              className="w-full h-80 lg:h-[500px] rounded-lg shadow-xl overflow-hidden"
            >
              <img
                src={imageUrl}
                alt={title}
                className="object-cover w-full h-full"
              />
            </motion.div>
          );

          const text = (
            <motion.div
              variants={imageLeft ? slideInFromRight : slideInFromLeft}
            >
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
                  <Icon className="w-6 h-6 text-[#3b82f6]" />
                </div>
                <h2 className="ml-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
                  {title}
                </h2>
              </div>
              <p className="mt-4 text-lg text-slate-600">{description}</p>
            </motion.div>
          );

          return (
            <motion.section
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="py-16 overflow-x-hidden"
            >
              <div
                className={`grid items-center max-w-6xl grid-cols-1 gap-12 px-4 mx-auto md:grid-cols-2 md:gap-20 ${
                  imageLeft ? "" : "md:grid-flow-col-dense"
                }`}
              >
                {imageLeft ? image : text}
                {imageLeft ? text : image}
              </div>
            </motion.section>
          );
        })}
      </main>

      {/* --- Call to Action Section --- */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="py-20 text-center bg-slate-100"
      >
        <div className="max-w-4xl px-4 mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
            Have Questions About Our Services?
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-slate-600">
            Our friendly team is here to help. Visit us in Nairobi or give us a
            call.
          </p>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-white transition-transform duration-300 bg-[#3b82f6] rounded-full shadow-lg hover:bg-blue-600 hover:scale-105"
            >
              Contact Us
              <FaArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Services;
