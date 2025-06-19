"use client";

import React from "react";
import { motion } from "framer-motion";
import CallToAction from "../components/CallToAction";

// --- Inline SVG Icons ---
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

// --- Data for Team and Values ---
const teamMembers = [
  {
    name: "Dr. Beryl Achieng",
    title: "Lead Pharmacist",
    bio: "Beryl brings over 15 years of clinical pharmacy experience, ensuring the highest standards of care.",
    imageUrl:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Peter Kariuki",
    title: "Pharmacy Manager",
    bio: "Peter expertly manages our operations, focusing on efficiency and patient satisfaction.",
    imageUrl:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop",
  },
  {
    name: "Grace Wanjiru",
    title: "Wellness Consultant",
    bio: "Grace specializes in holistic health and provides personalized wellness consultations.",
    imageUrl: "/images/t1.jpg",
  },
  {
    name: "Dr. John Mwangi",
    title: "Compounding Specialist",
    bio: "John is an expert in creating customized medications to meet specific patient needs.",
    imageUrl: "/images/t3.jpg",
  },
];

const coreValues = [
  {
    icon: StethoscopeIcon,
    title: "Professionalism",
    description:
      "We uphold the highest standards of professional conduct, ethics, and integrity in all our services.",
  },
  {
    icon: CheckCircleIcon,
    title: "Integrity",
    description:
      "We are committed to providing genuine medications and transparent, trustworthy health advice.",
  },
  {
    icon: HandHoldingHeartIcon,
    title: "Patient-Centered Care",
    description:
      "Your health is our priority. We provide personalized care tailored to your unique needs.",
  },
];

// --- About Page Component ---
const About = () => {
  // Framer Motion Variants
  const slideInLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };
  const slideInRight = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="font-sans bg-white">
      {/* --- Header Section --- */}
      <header className="py-20 text-center bg-[#005B96] ">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
        >
          About Us
        </motion.h1>
      </header>

      {/* --- Our Story Section --- */}
      <section className="py-24 overflow-x-hidden">
        <div className="grid items-center max-w-6xl grid-cols-1 gap-12 px-4 mx-auto md:grid-cols-2 md:gap-20">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full h-80 md:h-full rounded-lg shadow-xl overflow-hidden"
          >
            <img
              src="/images/16.jpg"
              alt="Welcoming interior of a modern pharmacy"
              className="object-cover w-full h-full"
            />
          </motion.div>
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
              Our Story
            </h2>
            <p className="mt-4 text-lg text-slate-600 text-justify ">
              Founded with a simple mission to provide accessible, reliable, and
              compassionate pharmaceutical care to the Nairobi community Nairobi
              PharmaCare has grown from a small neighborhood pharmacy into a
              trusted health and wellness partner.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- Meet Our Team Section (Redesigned) --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#005B96] sm:text-4xl">
            Meet Our Team
          </h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-4"
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.name}
                variants={fadeIn}
                className="overflow-hidden text-center bg-white rounded-lg shadow-lg group"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="object-cover object-top w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://placehold.co/400x600/3b82f6/FFFFFF?text=Photo";
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-[#3b82f6]">
                    {member.title}
                  </p>
                  <p className="mt-2 text-sm text-slate-500">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- Our Core Values Section (Redesigned) --- */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#005B96] sm:text-4xl">
            Our Core Values
          </h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-3"
          >
            {coreValues.map((value) => (
              <motion.div
                key={value.title}
                variants={fadeIn}
                className="flex flex-col items-center p-8 transition-shadow duration-300 bg-slate-50 hover:shadow-xl rounded-xl border border-slate-200"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-[#3b82f6] text-white rounded-full">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-800">
                  {value.title}
                </h3>
                <p className="mt-2 text-slate-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <CallToAction />
    </div>
  );
};

export default About;
