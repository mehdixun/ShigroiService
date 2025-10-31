import React from "react";
import { Link } from "react-router-dom";
import { FaBolt, FaTools, FaBroom, FaChair } from "react-icons/fa";
import { services } from "../data/services";

const icons = {
  1: <FaBolt size={30} className="text-yellow-500" />,
  2: <FaTools size={30} className="text-blue-500" />,
  3: <FaBroom size={30} className="text-green-500" />,
  4: <FaChair size={30} className="text-orange-500" />,
};

const ServiceCategory = () => {
  return (
    <section className="py-16 bg-base-100 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <p className="text-center font-bold text-4xl text-indigo-500 dark:text-gray-400 mb-8">
          Choose from our most requested services
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              to={`/services/${service.id}`}
              className="bg-base-200 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 flex flex-col items-center text-center"
            >
              {icons[service.id]}
              <h3 className="mt-4 text-xl text-gray-800 dark:text-gray-100 font-bold">
                {service.name}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300 ">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategory;
