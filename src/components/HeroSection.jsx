import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="min-h-[90vh] bg-base-100 flex flex-col justify-center items-center text-center px-6 md:px-20 pb-20">
      <h1 className="text-5xl lg:text-7xl font-extrabold text-indigo-600 mb-6">
        Shigroi<span className="text-indigo-600">Service</span>
      </h1>
      <p className="text-gray-600 text-lg lg:text-xl mb-8">
        Find trusted local experts instantly — Electrician, Plumber, Cleaner, and more.
        <br /> Fast, reliable, and just a click away
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/services"
          className="bg-indigo-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:scale-105 transition-transform duration-300"
        >
          Find Services
        </Link>
        <Link
          to="/about"
          className="border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-indigo-50 hover:scale-105 transition-transform duration-300"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
