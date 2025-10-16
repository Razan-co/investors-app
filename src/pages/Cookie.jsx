import React from "react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Cookie = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-24 py-10 md:py-16">
      {/* Back Button + Heading */}
      <div className="flex items-center space-x-3 mb-6 md:mb-10">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-300 cursor-pointer hover:text-white transition"
        >
          <ChevronLeft size={28} />
        </button>
        <h1 className="text-2xl md:text-8xl ml-0 md:ml-5 font-bold tracking-wide">
          COOKIE POLICY
        </h1>
      </div>

      {/* Intro */}
      <p className="text-gray-300 text-sm md:text-lg leading-relaxed max-w-7xl">
        At <span className="font-semibold text-white">Khateep Group</span> we
        value your privacy and are committed to providing transparency about how
        we use cookies and similar technologies on our website. This Cookie
        Policy explains what cookies are, how we use them, and the choices
        available to you.
      </p>

      {/* Section: Information We Collect */}
      <div className="mt-10">
        <h2 className="text-xl md:text-3xl font-semibold text-gray-200 mb-3">
          What Are Cookies?
        </h2>
        <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
          Cookies are small text files that are placed on your device (computer,
          tablet, or mobile) when you visit our website. They help us improve
          your browsing experience, analyze site performance, and provide
          relevant content.
        </p>
      </div>

      {/* Section: How We Use Your Information */}
      <div className="mt-10">
        <h2 className="text-xl md:text-3xl font-semibold text-gray-200 mb-8">
          Types of Cookies We Use
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li className="text-lg md:text-xl font-semibold text-gray-200">
            Strictly Necessary Cookies
          </li>
          <p className="md:text-lg text-sm mb-5">
            {" "}
            These cookies are essential for the website to function and cannot
            be switched off. They enable basic features like secure login and
            page navigation.
          </p>

          <li className="text-lg md:text-xl font-semibold text-gray-200">
            Analytical & Performance Cookies
          </li>
          <p className="md:text-lg text-sm mb-5">
            These cookies allow us to measure visitor traffic, analyze user
            behavior, and improve site performance.
          </p>

          <li className="text-lg md:text-xl font-semibold text-gray-200">
            Functional Cookies
          </li>
          <p className="md:text-lg text-sm mb-5">
            {" "}
            These cookies help us remember your preferences and provide
            enhanced, personalized features.
          </p>

          <li className="text-lg md:text-xl font-semibold text-gray-200">
            Targeting & Advertising Cookies
          </li>
          <p className="md:text-lg text-sm mb-5">
            {" "}
            These may be used to deliver relevant investment-related
            information, opportunities, and updates based on your interests.
          </p>
        </ul>
      </div>

      {/* Section: Sharing of Information */}
      <div className="mt-10">
        <h2 className="text-xl md:text-3xl font-semibold text-gray-200 mb-3">
       Why We Use Cookies
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li className="text-sm md:text-lg">
          To ensure secure access to investor-related materials and dashboards.
          </li>
          <li className="text-sm md:text-lg">To enhance your user experience by remembering preferences.</li>
          <li className="text-sm md:text-lg">To analyze site traffic and improve our services.</li>
          <li className="text-sm md:text-lg">To provide relevant investment opportunities and updates.</li>
        </ul>
      </div>

      {/* Section: Data Security */}
      <div className="mt-10">
        <h2 className="text-xl md:text-3xl font-semibold text-gray-200 mb-3">
         Third-Party Cookies
        </h2>
        <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
         We may use trusted third-party services (e.g., analytics tools, advertising networks) that also place cookies on your device to help us measure and improve our services.
        </p>
      </div>

      {/* Section: Changes to Policy */}
      <div className="mt-10">
        <h2 className="text-xl md:text-3xl font-semibold text-gray-200 mb-3">
         Managing Cookies
        </h2>
        <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
        You have the option to accept or reject cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of the website, including access to secure investor areas.
        </p>
      </div>
      <div className="mt-10">
        <h2 className="text-xl md:text-3xl font-semibold text-gray-200 mb-3">
       Updates to This Policy
        </h2>
        <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
       We may update this Cookie Policy from time to time to reflect changes in technology, law, or our services. Any updates will be posted on this page.
        </p>
      </div>
    </div>
  );
};

export default Cookie;
