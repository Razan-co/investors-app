import React from "react";
import {
  Calendar,
  MapPin,
  Radio,
  CreditCard,
  Gift,
} from "lucide-react"; // for icons (you can install: npm install lucide-react)

const AppConcept = () => {
  return (
    <section className="bg-black text-white px-6 md:px-16 lg:px-32 py-20">
      {/* Main Container */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-7xl font-light leading-tight mb-2">
            APP <br />
            <span className="font-light">CONCEPT &</span>
          </h1>
          <h2 className="text-3xl md:text-6xl font-light mb-10">
            FUNCTIONALITY
          </h2>

          {/* Features List */}
          <ul className="space-y-5 text-gray-200 text-base md:text-lg">
            <li className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-white" />
              <span>Easy Restaurant and cuisine search</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-white" />
              <span>Personalized recommendations using AI</span>
            </li>
            <li className="flex items-center gap-3">
              <Radio className="w-5 h-5 text-white" />
              <span>Real-time order tracking with GPS</span>
            </li>
            <li className="flex items-center gap-3">
              <CreditCard className="w-5 h-5 text-white" />
              <span>Multiple secure payment options</span>
            </li>
            <li className="flex items-center gap-3">
              <Gift className="w-5 h-5 text-white" />
              <span>Built-in loyalty program</span>
            </li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/foodside.png"
            alt="App Concept"
            className="rounded-2xl shadow-lg w-full max-w-sm md:max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default AppConcept;
