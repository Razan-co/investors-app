import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import ApparelOverview from "./ApparelOverview";
import BrandStory from "./BrandStory";
import BrandValues from "./BrandValues";


const Cloth = () => {
  const navigate = useNavigate();
  

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] md:h-[100vh] bg-black/80 text-white">
        {/* Background Image */}
        <img
          src="/cloth1.png"
          alt="food"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0" />

        {/* 🔙 Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute cursor-pointer top-16 left-4 md:top-20 md:left-10 flex items-center gap-2 text-gray-300 hover:text-white transition z-20"
        >
          {/* 👇 Smaller on mobile, larger on medium+ */}
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
        </button>

        {/* Heading - Top Left */}
        <div className="absolute top-14 left-12 sm:top-12 sm:left-28 z-10">
          <h1 className="text-3xl capitalize sm:text-5xl md:text-8xl font-medium tracking-wide">
           KRIZIANO CLOTHING
          </h1>
        </div>

        {/* Bottom Text - Bottom Left */}
        <div className="absolute bottom-12 left-6 sm:bottom-16 sm:left-12 z-10">
          <p className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-2">
           Where Trend Meets Tradition
          </p>
          <p className="text-sm sm:text-xl text-gray-200">
            A fashion label redefining style with cultural elegance and global appeal
          </p>
        </div>
      </section>
        <ApparelOverview/>
        <BrandStory/>
        <BrandValues/>
    </>
  );
};

export default Cloth;
