import React from "react";
import { useNavigate } from "react-router-dom";
import {  ChevronLeft } from "lucide-react"; // nice lightweight icon

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black text-white min-h-screen px-6 md:px-16 py-12 relative">
      {/* BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="absolute cursor-pointer top-17 left-8 flex items-center gap-2 text-gray-300 hover:text-white transition"
      >
        <ChevronLeft size={20} />
      </button>

      {/* ABOUT US HEADER */}
      <h1 className="text-5xl md:text-7xl font-bold text-center mb-20">
        ABOUT US
      </h1>

      {/* Company Overview + Vision & Mission */}
      <div className="flex flex-col md:flex-row justify-between md:items-start gap-10 mb-24">
        <div className="md:w-1/4">
          <h2 className="text-3xl md:text-6xl font-semibold mb-0 md:mb-4">
            Company <br /> Overview
          </h2>
        </div>

        <div className="md:w-2/3 mt-0 md:mt-5">
          <p className="text-sm md:text-xl text-gray-300 leading-relaxed text-justify">
            Founded with a passion for design and innovation, AL KHATEEB GROUP has grown into a trusted name in interior solutions, lifestyle
            products, and modern living concepts. Guided by strong values,
            visionary leadership, and a commitment to quality, we continue to
            create spaces and experiences that inspire.
          </p>
        </div>
      
      </div>


      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
         <div className="md:w-3/5">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4 text-right md:text-left">
            Vision & Mission
          </h2>
          <p className="text-sm md:text-xl text-gray-300 leading-relaxed text-justify">
           Our vision is to be the most trusted and innovative platform for investors, empowering individuals and businesses with transparent insights, data-driven tools, and expert guidance. We are committed to simplifying the investment journey by providing reliable information, intuitive technology, and educational resources that enable smarter decisions, stronger portfolios, and sustainable long-term growth.
          </p>
        </div>

        <div className="md:w-2/5 flex justify-center">
          <img
            src="/Ellipse 875.png"
            alt="Team Meeting"
            className="rounded-full w-64 h-64 object-cover border-2 border-gray-700"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
