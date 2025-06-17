"use client";

import React from "react";
import { motion } from "framer-motion";

// --- Inline SVG Icons ---
// Using self-contained inline SVGs for icons to ensure component portability and avoid dependency issues.
const FaMapMarkerAlt = (props) => (
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
const FaPhoneAlt = (props) => (
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
const FaEnvelope = (props) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 512 512"
    {...props}
  >
    <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
  </svg>
);
const FaClock = (props) => (
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

// Reusable Info Card
const InfoCard = ({ icon: Icon, title, children }) => (
  <div className="p-6 bg-white border rounded-lg shadow-sm border-slate-200">
    <div className="flex items-start">
      <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-[#3b82f6]">
        <Icon className="w-6 h-6" />
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
        <div className="mt-1 text-slate-600">{children}</div>
      </div>
    </div>
  </div>
);

// --- Main Contact Component ---
const Contact = () => {
  // Framer Motion Variants
  const fadeIn = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const slideInLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.2 },
    },
  };
  const slideInRight = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <div className="font-sans bg-white">
      {/* --- Page Header --- */}
      <motion.header
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="py-20 text-center bg-[#005B96]"
      >
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Get In Touch
        </h1>
      </motion.header>

      {/* --- Main Content Area --- */}
      <section className="py-12 md:py-24 overflow-hidden">
        <div className="grid max-w-6xl grid-cols-1 gap-12 px-4 mx-auto md:grid-cols-2 md:gap-16">
          {/* Left Column: Contact Details */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInLeft}
            className="flex flex-col space-y-8"
          >
            {/* Contact Information Cards with Buttons */}
            <InfoCard icon={FaMapMarkerAlt} title="Our Address">
              <p>123 Biashara Street, Nairobi CBD, Kenya</p>
            </InfoCard>

            <InfoCard icon={FaPhoneAlt} title="Call Us">
              <p>+254 700 123 456</p>
              <div className="mt-4">
                <a
                  href="tel:+254700123456"
                  className="inline-block px-5 py-2 text-sm font-semibold text-white transition-colors bg-[#3b82f6] rounded-md shadow-sm hover:bg-blue-600"
                >
                  Call Now
                </a>
              </div>
            </InfoCard>

            <InfoCard icon={FaEnvelope} title="Email Us">
              <p>info@nairobipharmacare.co.ke</p>
              <div className="mt-4">
                <a
                  href="mailto:info@nairobipharmacare.co.ke"
                  className="inline-block px-5 py-2 text-sm font-semibold text-white transition-colors bg-[#3b82f6] rounded-md shadow-sm hover:bg-blue-600"
                >
                  Send Email
                </a>
              </div>
            </InfoCard>

            {/* Opening Hours Card */}
            <InfoCard icon={FaClock} title="Opening Hours">
              <ul className="mt-1 space-y-2 text-slate-600">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span> <span>8:00 AM – 9:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span> <span>9:00 AM – 8:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday & Public Holidays:</span>{" "}
                  <span>10:00 AM – 6:00 PM</span>
                </li>
              </ul>
            </InfoCard>
          </motion.div>

          {/* Right Column: Map */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInRight}
            className="w-full min-h-[400px] md:h-full rounded-lg shadow-xl overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.358691889!2d36.68224051813023!3d-1.3028602666181195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1750069813474!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nairobi PharmaCare Location"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
