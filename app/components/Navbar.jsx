"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Inline SVG Icons ---
const MenuIcon = (props) => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const CloseIcon = (props) => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const ArrowRightIcon = (props) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

// --- Navigation Links Data ---
const navLinks = [
  { name: "Home", href: "/home" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
];

// --- The Navbar Component ---
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState("/");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setActivePath(window.location.pathname);
    }
  }, []);

  const handleLinkClick = (href) => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    setActivePath(href);
  };

  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const mobileMenuVariants = {
    hidden: { x: "100%", transition: { duration: 0.3, ease: "easeIn" } },
    visible: { x: 0, transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
    <>
      <motion.nav
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
        className="fixed top-0 left-0 right-0 z-50 bg-[#005B96] shadow-md h-20"
      >
        <div className="flex items-center justify-between h-full max-w-6xl px-4 mx-auto">
          {/* Logo */}
          <a
            href="/"
            onClick={() => handleLinkClick("/")}
            className="text-2xl font-bold text-white hover:opacity-80 transition-opacity"
          >
            PHARMA-CARE
          </a>

          {/* Desktop Navigation Links */}
          <ul className="items-center hidden space-x-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.name}>
                <motion.a
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className={`relative px-4 py-2 rounded-md text-slate-200 hover:text-white transition-colors duration-300 ${
                    activePath === link.href ? "font-semibold text-white" : ""
                  }`}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.name}
                  {activePath === link.href && (
                    <motion.div
                      className="absolute bottom-[-6px] left-0 right-0 h-0.5 bg-white"
                      layoutId="underline"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      }}
                    />
                  )}
                </motion.a>
              </li>
            ))}
          </ul>

          {/* Desktop Contact Button */}
          <a
            href="/contact"
            onClick={() => handleLinkClick("/contact")}
            className="hidden items-center px-5 py-2 font-semibold text-white transition-all duration-300 bg-[#3b82f6] rounded-full shadow-sm hover:bg-blue-600 hover:scale-105 md:flex"
          >
            <span>Contact Us</span>
            <ArrowRightIcon className="w-4 h-4 ml-2" />
          </a>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-white hover:text-slate-200 transition-colors"
              aria-label="Open mobile menu"
            >
              <MenuIcon className="w-7 h-7" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 z-50 flex flex-col p-8 bg-white md:hidden"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-[#005B96]">Menu</h2>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-slate-800 hover:text-[#005B96] transition-colors"
                aria-label="Close mobile menu"
              >
                <CloseIcon className="w-8 h-8" />
              </button>
            </div>
            {/* Updated alignment for mobile menu items */}
            <ul className="flex flex-col items-start justify-center flex-grow w-full space-y-2">
              {navLinks.map((link) => (
                <li key={link.name} className="w-full">
                  <a
                    href={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className={`block w-full p-4 rounded-md text-2xl transition-colors hover:text-[#005B96] hover:bg-slate-100 ${
                      activePath === link.href
                        ? "text-[#005B96] font-bold bg-slate-100"
                        : "text-slate-700"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-6">
                <a
                  href="/contact"
                  onClick={() => handleLinkClick("/contact")}
                  className="inline-flex items-center px-8 py-3 text-xl font-semibold text-white transition-colors duration-300 bg-[#3b82f6] rounded-full shadow-sm hover:bg-blue-600"
                >
                  <span>Contact Us</span>
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
