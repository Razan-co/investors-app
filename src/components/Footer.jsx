import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Footer = () => {
  const navigate = useNavigate();

  const handleSubscribeClick = () => {
    toast.success("Redirecting to Contact Page...");
    setTimeout(() => {
      navigate("/contact");
    }, 1000);
  };

  return (
    <footer className="bg-black border-t border-gray-700 text-white px-6 md:px-16 py-10 md:py-16 relative">
      {/* Toast Container */}
   

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-center gap-10 md:gap-0">
        {/* Subscribe Section */}
        <div className="w-full md:w-1/2">
          <div
            onClick={handleSubscribeClick}
            className="flex items-center justify-between border-b border-gray-700 pb-2 cursor-pointer hover:border-white transition duration-300"
          >
            <span className="uppercase text-sm tracking-widest text-gray-200">
              Subscribe
            </span>
            <ArrowUpRight className="w-4 h-4 text-gray-300" />
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 gap-x-12 text-sm text-gray-300">
          {/* Left column */}
          <div className="flex flex-col space-y-2">
            <Link to="/contact" className="hover:text-gray-100 cursor-pointer">
              Contact Us
            </Link>
            <Link to="/privacy" className="hover:text-gray-100 cursor-pointer">
              Privacy Policy
            </Link>
            <Link to="/cookie" className="hover:text-gray-100 cursor-pointer">
              Cookie Policy
            </Link>
          </div>

          {/* Right column */}
          <div className="flex flex-col space-y-2">
            <p className="hover:text-gray-100 cursor-pointer">Instagram</p>
            <p className="hover:text-gray-100 cursor-pointer">Facebook</p>
            <p className="hover:text-gray-100 cursor-pointer">LinkedIn</p>
          </div>
        </div>
      </div>

      {/* Whole Footer Wrap */}
      <div className="mt-16 text-center">
        {/* Large Logo Text */}
        <h2 className="text-5xl md:text-9xl font-extrabold text-gray-500 tracking-wide">
          AL KHATEEB GROUP
        </h2>

        {/* Copyright */}
        <div className="border-gray-700 mt-6 pt-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
