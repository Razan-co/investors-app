import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import AppConcept from "./AppConcept";
import TargetCities from "./TargetCities";
import FutureRoadmap from "./FutureRoadmap";


const Food = () => {
  const navigate = useNavigate();
  

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] md:h-[100vh] bg-black/80 text-white">
        {/* Background Image */}
        <img
          src="/food1.png"
          alt="food"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10" />

        {/* 🔙 Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute cursor-pointer top-16 left-2 md:top-24 md:left-10 flex items-center gap-2 text-gray-300 hover:text-white transition z-20"
        >
          {/* 👇 Smaller on mobile, larger on medium+ */}
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
        </button>

        {/* Heading - Top Left */}
         <div className="absolute top-14 left-10 sm:top-12 sm:left-28 z-10">
  <div className="flex items-center gap-3 md:gap-8">
    {/* Logo Image */}
    <img
      src="/food logo.png" // replace with your actual logo path
      alt="Kriziano Logo"
      className="w-8 h-8 sm:w-12 rounded-full sm:h-12 md:w-30 md:h-30 object-contain"
    />

    {/* Heading Text */}
    <h1 className="text-3xl capitalize sm:text-5xl md:text-8xl font-medium tracking-wide">
     FOODYIES CART
    </h1>
  </div>
</div>

        {/* Bottom Text - Bottom Left */}
        <div className="absolute bottom-12 left-6 sm:bottom-16 sm:left-12 z-10">
          <p className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-2">
            Delicious Food, Delivered Fast
          </p>
          <p className="text-sm sm:text-xl text-gray-200">
            our favorite meals from local restaurants, brought straight to your door.
          </p>
        </div>
      </section>

   <AppConcept/>
   <TargetCities/>
   <FutureRoadmap/>
    </>
  );
};

export default Food;
