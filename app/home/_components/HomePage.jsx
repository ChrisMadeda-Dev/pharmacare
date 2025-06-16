import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPills,
  FaUserMd,
  FaShoppingCart,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

// Mock Data
const testimonials = [
  {
    name: "Sarah J.",
    quote:
      "The pharmacists here are so knowledgeable and caring. They take the time to answer all my questions. I wouldn't go anywhere else!",
    avatar: "https://placehold.co/100x100/E2E8F0/4A5568?text=SJ",
  },
  {
    name: "David L.",
    quote:
      "Their online prescription refill system is a lifesaver. So easy to use and my medications are always ready on time.",
    avatar: "https://placehold.co/100x100/E2E8F0/4A5568?text=DL",
  },
  {
    name: "Maria G.",
    quote:
      "A wonderful local pharmacy with a great selection of products and the friendliest staff. Highly recommended!",
    avatar: "https://placehold.co/100x100/E2E8F0/4A5568?text=MG",
  },
];

// Reusable Components
const MotionButton = ({ children, className }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`px-6 py-3 font-semibold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 ${className}`}
  >
    {children}
  </motion.button>
);

const FeatureCard = ({ icon, title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
    className="p-8 text-center bg-white rounded-xl shadow-lg"
  >
    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 text-3xl text-white bg-blue-500 rounded-full">
      {icon}
    </div>
    <h3 className="mb-4 text-2xl font-bold text-gray-800">{title}</h3>
    <p className="text-gray-600">{children}</p>
  </motion.div>
);

// Main Components
const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container px-4 py-4 mx-auto md:px-6">
        <div className="flex items-center justify-between">
          <motion.a
            href="#"
            className="flex items-center space-x-2 text-2xl font-bold text-blue-800"
            whileHover={{ scale: 1.05 }}
          >
            <FaPills className="text-blue-600" />
            <span>MediCare</span>
          </motion.a>
          <div className="hidden space-x-8 md:flex">
            {["Home", "Services", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 transition-colors duration-300 hover:text-blue-600"
              >
                {item}
              </a>
            ))}
          </div>
          <MotionButton className="hidden md:block">Shop Now</MotionButton>
        </div>
      </div>
    </motion.nav>
  );
};

const Hero = () => (
  <section id="home" className="pt-24 bg-blue-50">
    <div className="container grid items-center gap-12 px-4 py-16 mx-auto md:grid-cols-2 md:px-6">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="mb-6 text-4xl font-extrabold leading-tight text-gray-800 md:text-5xl lg:text-6xl">
          Your Health, Our Priority.
          <span className="text-blue-600"> Exceptional Care, Every Time.</span>
        </h1>
        <p className="mb-8 text-lg text-gray-600">
          Experience a new standard of pharmacy care. We combine professional
          expertise with a personal touch to meet all your health needs.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <MotionButton>Explore Services</MotionButton>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 font-semibold text-blue-600 bg-transparent border-2 border-blue-600 rounded-full hover:bg-blue-100 transition-colors duration-300"
          >
            Refill Prescription
          </motion.button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex items-center justify-center"
      >
        <img
          src="https://placehold.co/500x500/BFDBFE/1E40AF?text=Pharmacist"
          alt="Smiling Pharmacist"
          className="rounded-full shadow-2xl"
        />
      </motion.div>
    </div>
  </section>
);

const Features = () => (
  <section id="services" className="py-20 bg-white">
    <div className="container px-4 mx-auto md:px-6">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h2 className="text-4xl font-bold text-gray-800">
          Comprehensive Pharmacy Services
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-gray-600">
          We offer a wide range of services to ensure your well-being.
        </p>
      </motion.div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <FeatureCard icon={<FaUserMd />} title="Expert Pharmacists">
          Our team of licensed pharmacists is always available to provide expert
          advice and consultation.
        </FeatureCard>
        <FeatureCard icon={<FaPills />} title="Prescription Management">
          Easily manage, refill, and transfer your prescriptions online or
          through our mobile app.
        </FeatureCard>
        <FeatureCard
          icon={<FaShoppingCart />}
          title="Health & Wellness Products"
        >
          Shop a wide selection of over-the-counter medications, vitamins, and
          wellness products.
        </FeatureCard>
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section className="py-20 bg-blue-50">
    <div className="container px-4 mx-auto md:px-6">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl font-bold text-gray-800">
          Simple Steps to Better Health
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-gray-600">
          Getting the care you need has never been easier.
        </p>
      </motion.div>
      <div className="relative">
        <div
          className="absolute top-1/2 left-0 right-0 h-0.5 bg-blue-200 hidden md:block"
          style={{ transform: "translateY(-50%)" }}
        ></div>
        <div className="grid gap-12 md:grid-cols-3">
          {[
            "Submit Your Prescription",
            "We Prepare Your Order",
            "Ready for Pickup/Delivery",
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative z-10 text-center"
            >
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 text-3xl font-bold text-white bg-blue-600 border-4 border-blue-50 rounded-full shadow-lg">
                {index + 1}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-800">
                {step}
              </h3>
              <p className="text-gray-600">
                A short, descriptive sentence explaining this simple step.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container px-4 mx-auto md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold text-gray-800">
            What Our Patients Say
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-gray-600">
            We are proud to serve our community and value their feedback.
          </p>
        </motion.div>
        <div className="relative h-64 max-w-2xl mx-auto">
          <AnimatePresence>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-blue-50 rounded-xl shadow-lg"
            >
              <img
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 mb-4 rounded-full"
              />
              <p className="mb-4 italic text-gray-700">
                "{testimonials[currentIndex].quote}"
              </p>
              <p className="font-bold text-blue-800">
                - {testimonials[currentIndex].name}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer id="contact" className="pt-16 pb-8 text-white bg-gray-800">
    <div className="container px-4 mx-auto md:px-6">
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="mb-4 text-xl font-bold">MediCare Pharmacy</h3>
          <p className="text-gray-400">
            Your trusted partner in health. Committed to providing quality care
            and products to our community.
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-xl font-bold">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="text-gray-400 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="text-gray-400 hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-400 hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-400 hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-xl font-bold">Contact Us</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center">
              <FaMapMarkerAlt className="mr-3 text-blue-400" /> 123 Health St,
              Wellness City
            </li>
            <li className="flex items-center">
              <FaPhone className="mr-3 text-blue-400" /> (123) 456-7890
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-3 text-blue-400" /> contact@medicare.com
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-xl font-bold">Stay Updated</h3>
          <p className="mb-4 text-gray-400">
            Subscribe to our newsletter for health tips and updates.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 text-gray-800 rounded-l-md focus:outline-none"
            />
            <button className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-r-md hover:bg-blue-700">
              Go
            </button>
          </form>
        </div>
      </div>
      <div className="pt-8 mt-12 text-center text-gray-500 border-t border-gray-700">
        <p>
          &copy; {new Date().getFullYear()} MediCare Pharmacy. All Rights
          Reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white">
      <Nav />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
