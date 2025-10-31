import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { id, name, description } = service;

  return (
    <div className="border p-5 rounded-xl shadow hover:shadow-lg transition">
      <h2 className="text-2xl font-bold mb-2">{name}</h2>
      <p className="text-gray-600 mb-4">{description}</p>

      <Link
        to={`/services/${id}`}
        className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
      >
        View Details
      </Link>
    </div>
  );
};

export default ServiceCard;
