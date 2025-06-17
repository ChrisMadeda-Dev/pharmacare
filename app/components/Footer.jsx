"use client";

import React from "react";
import { motion } from "framer-motion";

// --- Inline SVG Icons ---
// Using self-contained inline SVGs for icons to ensure component portability and avoid dependency issues.
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
const EnvelopeIcon = (props) => (
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
const FacebookIcon = (props) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 448 512"
    {...props}
  >
    <path d="M448 56.7v398.6c0 13.7-11.1 24.7-24.7 24.7H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.6c13.6 0 24.7 11.1 24.7 24.7zM244.3 356l14.2-82.7h-79.1v-52.5c0-21.1 10.6-41.6 41.6-41.6h38.2V108.6c-7.3-1-32.4-3.1-60.7-3.1-62.2 0-104.6 38.2-104.6 109.3v62.2H96v82.7h82.8V480h95.6v-124z"></path>
  </svg>
);
const TwitterIcon = (props) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 512 512"
    {...props}
  >
    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.214 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
  </svg>
);
const InstagramIcon = (props) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 448 512"
    {...props}
  >
    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37.2-2.1-147.9-2.1-185.1 0-35.9 1.7-67.7 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37.2-2.1 147.9 0 185.1 1.7 35.9 9.9 67.7 36.2 93.9 26.3 26.2 58 34.4 93.9 36.2 37.2 2.1 147.9 2.1 185.1 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37.2 2.1-147.8 0-185.1z"></path>
  </svg>
);

// --- The Footer Component ---
const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#005B96] text-slate-200 font-sans"
    >
      <div className="max-w-6xl px-4 py-16 mx-auto">
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Column 1: About */}
          <div className="md:pr-8">
            <h3 className="text-2xl font-bold text-white">
              Nairobi PharmaCare
            </h3>
            <p className="mt-4 text-slate-300">
              Your trusted partner in health and wellness. We are committed to
              providing quality care and genuine medications.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 hover:text-white"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="transition-colors duration-300 hover:text-white"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="transition-colors duration-300 hover:text-white"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="transition-colors duration-300 hover:text-white"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="transition-colors duration-300 hover:text-white"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white">Contact Info</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start">
                <MapMarkerAltIcon className="flex-shrink-0 w-5 h-5 mt-1 mr-3 text-slate-300" />
                <span>123 Afya Street, Westlands, Nairobi, Kenya</span>
              </li>
              <li className="flex items-start">
                <PhoneAltIcon className="flex-shrink-0 w-5 h-5 mt-1 mr-3 text-slate-300" />
                <span>+254 700 123 456</span>
              </li>
              <li className="flex items-start">
                <EnvelopeIcon className="flex-shrink-0 w-5 h-5 mt-1 mr-3 text-slate-300" />
                <span>info@nairobipharmacare.co.ke</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media and Copyright Section */}
        <div className="pt-8 mt-12 border-t border-white">
          <div className="flex flex-col items-center justify-between sm:flex-row">
            {/* Social Media Icons */}
            <div className="flex space-x-6">
              <a
                href="#"
                aria-label="Facebook"
                className="transition-colors duration-300 text-slate-300 hover:text-white"
              >
                <FacebookIcon className="w-6 h-6" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="transition-colors duration-300 text-slate-300 hover:text-white"
              >
                <TwitterIcon className="w-6 h-6" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="transition-colors duration-300 text-slate-300 hover:text-white"
              >
                <InstagramIcon className="w-6 h-6" />
              </a>
            </div>
            {/* Copyright Notice */}
            <p className="mt-6 text-sm text-slate-400 sm:mt-0">
              © 2025 Nairobi PharmaCare. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
