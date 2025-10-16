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
        className="absolute cursor-pointer top-14 left-8 flex items-center gap-2 text-gray-300 hover:text-white transition"
      >
        <ChevronLeft size={20} />
      </button>

      {/* ABOUT US HEADER */}
      <h1 className="text-5xl md:text-6xl font-bold text-center mb-12">
        ABOUT US
      </h1>

      {/* Company Overview + Vision & Mission */}
      <div className="flex flex-col md:flex-row justify-between md:items-start gap-10 mb-16">
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Company Overview
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Founded with a passion for design and innovation, [Your Company
            Name] has grown into a trusted name in interior solutions, lifestyle
            products, and modern living concepts. Guided by strong values,
            visionary leadership, and a commitment to quality, we continue to
            create spaces and experiences that inspire.
          </p>
        </div>

        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-right md:text-left">
            Vision & Mission
          </h2>
          <p className="text-gray-300 leading-relaxed text-right md:text-left">
            Founded with a passion for design and innovation, [Your Company
            Name] has grown into a trusted name in interior solutions, lifestyle
            products, and modern living concepts. Guided by strong values,
            visionary leadership, and a commitment to quality, we continue to
            create spaces and experiences that inspire.
          </p>
        </div>
      </div>

      {/* Why Middle East Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-semibold mb-6">
          Why Middle East?
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="md:w-3/5">
          <p className="text-gray-300 leading-relaxed">
            The Middle East represents a region of immense growth, cultural
            richness, and strategic trade opportunities. With its expanding
            consumer base and strong investor ecosystem, it aligns perfectly
            with our vision for global expansion. By entering this market, we
            seek to build synergy with investors, unlock new opportunities, and
            establish a strong regional presence.
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
