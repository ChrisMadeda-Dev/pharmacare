"use client";

import React from "react";
import { motion } from "framer-motion";

// --- Inline SVG Icons ---
// Using self-contained inline SVGs for robustness and performance.
const MapMarkerAltIcon = (props) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 384 512"
    {...props}
  >
    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67a24 24 0 01-35.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
  </svg>
);

const PhoneAltIcon = (props) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 512 512"
    {...props}
  >
    <path d="M497.39 361.8l-112-48a24 24 0 00-28 6.9l-49.6 60.6A370.66 370.66 0 01130.6 204.11l60.6-49.6a23.94 23.94 0 006.9-28l-48-112A24.16 24.16 0 00122.6.61l-104 24A24 24 0 000 48c0 256.5 207.9 464 464 464a24 24 0 0023.4-18.6l24-104a24.29 24.29 0 00-14.01-27.6z"></path>
  </svg>
);

const ClockIcon = (props) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 512 512"
    {...props}
  >
    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8l-22.4 30.9c-3.9 5.3-11.4 6.5-16.8 2.6z"></path>
  </svg>
);

// --- Individual Info Card Component ---
// A reusable component for each piece of contact information to keep the code DRY.
const InfoCard = ({ icon: Icon, title, children }) => (
  <div className="flex items-start p-6 transition-shadow duration-300 bg-white border rounded-lg shadow-sm border-slate-200 hover:shadow-md">
    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-blue-600 bg-blue-100 rounded-full">
      <Icon className="w-6 h-6" />
    </div>
    <div className="ml-4">
      <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
      <div className="mt-1 text-slate-500">{children}</div>
    </div>
  </div>
);

// --- The Location Info Component ---
const LocationInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-20 bg-slate-50 sm:py-24"
    >
      <div className="max-w-6xl px-4 mx-auto">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Column: Contact Details */}
          <div className="flex flex-col">
            <h2 className="text-4xl font-bold tracking-tight text-[#005B96] sm:text-5xl">
              Visit Our Pharmacy
            </h2>
           
            {/* Updated to a responsive 2-column grid */}
            <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-2">
              <InfoCard icon={MapMarkerAltIcon} title="Address">
                <p>123 Afya Street, Westlands, Nairobi, Kenya</p>
              </InfoCard>
              <InfoCard icon={PhoneAltIcon} title="Phone">
                <p>+254 700 123 456</p>
              </InfoCard>
              <div className="md:col-span-2">
                <InfoCard icon={ClockIcon} title="Opening Hours">
                  <p>Mon - Sat: 8:00 AM - 9:00 PM</p>
                  <p>Sun: 10:00 AM - 6:00 PM</p>
                </InfoCard>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="w-full h-[400px] lg:h-[500px] rounded-lg shadow-lg overflow-hidden">
            <iframe
              title="Google Maps Location of Pharmacy in Nairobi"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127642.24794353109!2d36.75239962507198!3d-1.285514199149725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1678886021545!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LocationInfo;
