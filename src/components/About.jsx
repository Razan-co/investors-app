import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="relative w-full min-h-screen bg-black text-white  px-6 md:px-16 py-16 md:py-10">
      {/* Left Side Content */}
      <div className="flex flex-col md:flex-row items-start justify-center">
      <div className="flex-1 flex flex-col justify-center">
        <h2 className="text-5xl sm:text-6xl md:text-9xl font-extrabold leading-tight">
          ABOUT <br /> <span className="text-gray-400">US</span>
        </h2>

        <div>
          <p className="text-sm sm:text-lg text-gray-300 mb-2">Since</p>
          <p className="text-[100px] sm:text-[150px] md:text-[200px] font-extrabold text-gray-700 leading-none">
            2013
          </p>
        </div>

          {/* Button vertically centered relative to left div */}
  
      </div>

      {/* Right Side Image */}
        <div className="flex-1 md:h-[80vh] flex justify-center mt-10 md:mt-0">
            <img
            src="/about.png" // replace with your image path
            alt="About us"
            className="w-[90%] md:w-[80%]  rounded-3xl object-cover shadow-lg"
            />
        </div>
      </div>
      <div className="flex mt-5 items-center justify-center">
        <Link to={"/about"} className="mt-4 border font-medium border-gray-400  text-sm px-4 py-2  hover:bg-gray-200 hover:text-black transition-all duration-300 mx-auto md:mx-0">
          See More
        </Link>
        </div>
    </section>
    
  );
};

export default About;
