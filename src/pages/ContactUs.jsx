import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ContactUs = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    companyName: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ Validation
  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.mobile.trim()) newErrors.mobile = "Mobile number is required";
    if (!/^[0-9]{10}$/.test(formData.mobile))
      newErrors.mobile = "Enter a valid 10-digit mobile number";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.companyName.trim())
      newErrors.companyName = "Company Name is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  // 🚀 Submit to Google Sheets
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);

    const SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycby8l4z2pzSmzecoagaV2bCgJmZ7hz0yR8G53x3jAhh7JoPU0RJTetotXVkL-zGXLiMNpQ/exec"; // ✅ Your Google Apps Script URL

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // prevents CORS blocking
        headers: {
          "Content-Type": "application/json",
        },
            body: JSON.stringify({
        fullName: formData.fullName,
        mobile: formData.mobile,
        email: formData.email,
        companyName: formData.companyName,
        message: formData.message,
      }),

      });

      toast.success("✅ Message sent successfully!");
      setFormData({
        fullName: "",
        mobile: "",
        email: "",
        companyName: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      console.error(error);
      toast.error("❌ Failed to send message. Try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-black text-white min-h-screen flex flex-col">
      {/* Hero Section */}
      <div
        className="relative w-full h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/contact.png')" }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute cursor-pointer top-12 md:top-14 left-4 md:left-8 flex items-center gap-2 text-gray-300 hover:text-white transition z-20"
        >
          <ChevronLeft size={24} />
          <span className="text-2xl md:text-6xl font-medium md:ml-6">
            CONTACT US
          </span>
        </button>

        {/* Social Icons */}
        <div className="absolute top-14 right-10 flex gap-4 z-20">
          <a href="#" className="text-white hover:text-gray-300">
            <FaFacebookF />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <FaInstagram />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <FaLinkedinIn />
          </a>
        </div>

        {/* Center Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10 mt-20">
          <p className="text-lg md:text-3xl font-bold max-w-2xl">
            AL KHATEEB GROUP
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="flex-1 bg-black px-6 md:px-16 lg:px-32 py-10 flex flex-col items-center">
        <div className="p-8 rounded-xl shadow-lg w-full max-w-4xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name & Mobile */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full">
                <label className="block text-sm mb-2 font-light">
                  FULL NAME
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  placeholder="Full Name"
                  className="w-full bg-transparent border border-gray-500 rounded-md px-4 py-3 text-white focus:outline-none focus:border-white"
                />
                {errors.fullName && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.fullName}
                  </p>
                )}
              </div>

              <div className="w-full">
                <label className="block text-sm mb-2 font-light">
                  MOBILE NUMBER
                </label>
                <input
                  type="text"
                  value={formData.mobile}
                  onChange={(e) =>
                    setFormData({ ...formData, mobile: e.target.value })
                  }
                  placeholder="Mobile Number"
                  className="w-full bg-transparent border border-gray-500 rounded-md px-4 py-3 text-white focus:outline-none focus:border-white"
                />
                {errors.mobile && (
                  <p className="text-red-400 text-sm mt-1">{errors.mobile}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm mb-2 font-light">EMAIL</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="Email"
                className="w-full bg-transparent border border-gray-500 rounded-md px-4 py-3 text-white focus:outline-none focus:border-white"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-sm mb-2 font-light">
                COMPANY NAME
              </label>
              <input
                type="text"
                value={formData.companyName}
                onChange={(e) =>
                  setFormData({ ...formData, companyName: e.target.value })
                }
                placeholder="Company Name"
                className="w-full bg-transparent border border-gray-500 rounded-md px-4 py-3 text-white focus:outline-none focus:border-white"
              />
              {errors.companyName && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.companyName}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm mb-2 font-light">MESSAGE</label>
              <textarea
                rows="5"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Type your message..."
                className="w-full bg-transparent border border-gray-500 rounded-md px-4 py-3 text-white focus:outline-none focus:border-white resize-none"
              />
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {/* Submit */}
            <div className="text-center pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-white cursor-pointer text-black font-semibold px-8 py-3 rounded-md hover:bg-gray-200 transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
