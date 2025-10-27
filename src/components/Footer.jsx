import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";


const Footer = () => {
  return (
    <footer className="bg-indigo-50 text-gray-800 py-10">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 px-6">
        <div>
          <h2 className="text-2xl font-bold text-indigo-600">ShigroiService</h2>
          <p className="mt-2 text-gray-600">
            Fast, trusted local services at your hand.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul>
            <li><a href="/" className="hover:text-indigo-600 hover:underline inline-block transform hover:scale-105 transition duration-300">Home</a></li>
            <li><a href="/services" className="hover:text-indigo-600 hover:underline inline-block transform hover:scale-105 transition duration-300">Services</a></li>
            <li><a href="/contact" className="hover:text-indigo-600 hover:underline inline-block transform hover:scale-105 transition duration-300">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <p>Email: shigroiservice@gmail.com</p>
          <p>Phone: 01336458100</p>
          <div className="flex space-x-5 mt-3">
            <a href="" className="text-indigo-600 hover:text-indigo-800 inline-block transform hover:scale-120 transition duration-300"><FaFacebook size={30} />
</a>
            <a href="" className="text-cyan-500 hover:text-cyan-700 inline-block transform hover:scale-120 transition duration-300"><FaInstagram size={30} />
</a>
            <a href="" className="text-gray-800 hover:text-gray-900 inline-block transform hover:scale-118 transition duration-300"><BsTwitterX size={30} />
</a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500 text-sm">
        &copy; 2025 ShigroiService. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
