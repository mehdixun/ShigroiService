import React, { useState } from "react";
import { Link } from "react-router-dom";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-indigo-50 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* website name / logo */}
        <Link to="/" className="text-4xl font-extrabold text-indigo-600 drop-shadow-lg">ShigroiService</Link>
        {/* Center nav */}
        <nav className="space-x-5 font-semibold hidden lg:flex items-center text-indigo-600">  
            <Link
            to="/"
            className="hover:border-b-2 inline-block transform hover:scale-105 transition duration-300">Home</Link>
            <Link
            to="/services"
            className="hover:border-b-2 inline-block transform hover:scale-105 transition duration-300">Services</Link>
            <Link
            to="/dashboard"
            className="hover:border-b-2 inline-block transform hover:scale-105 transition duration-300">Dashboard</Link>
        </nav>
        {/* Right nav */}
        <nav className="hidden lg:flex space-x-6 items-center">
          <Link to="/login" className="btn btn-md border-2 border-indigo-600 bg-indigo-500 px-7 text-white font-bold hover:scale-105 transition-transform duration-300">Login</Link>
          <Link to="/register" className="btn btn-md border-2 border-indigo-600 text-indigo-600 px-6 font-bold hover:bg-indigo-50 hover:scale-105 transition-transform duration-300">Register</Link>
        </nav>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="lg:hidden bg-white shadow-md px-6 py-4 space-y-2">
          <Link to="/" className="block hover:text-indigo-500">Home</Link>
          <Link to="/services" className="block hover:text-indigo-500">Services</Link>
          <Link to="/login" className="block btn btn-sm btn-outline w-full">Login</Link>
          <Link to="/register" className="block btn btn-sm btn-primary w-full">Register</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
