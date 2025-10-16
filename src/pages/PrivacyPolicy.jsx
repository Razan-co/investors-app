import React from "react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
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
          PRIVACY POLICY
        </h1>
      </div>

      {/* Intro */}
      <p className="text-gray-300 text-sm md:text-lg leading-relaxed max-w-7xl">
        At <span className="font-semibold text-white">Khateep Group</span> we
        value your privacy and are committed to protecting your personal
        information. This Privacy Policy explains how we collect, use, and
        safeguard your data when you visit our website, use our services, or
        interact with us.
      </p>

      {/* Section: Information We Collect */}
      <div className="mt-10">
        <h2 className="text-xl md:text-3xl font-semibold text-gray-200 mb-3">
          INFORMATION WE COLLECT
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
           <li className="text-sm md:text-lg">
            Personal details such as name, email, phone number, and address when
            you register or contact us.
          </li>
            <li className="text-sm md:text-lg">Payment and billing information for order processing.</li>
            <li className="text-sm md:text-lg">
            Browsing data such as IP address, device details, and cookies to
            improve user experience.
          </li>
        </ul>
      </div>

      {/* Section: How We Use Your Information */}
      <div className="mt-10">
        <h2 className="text-xl md:text-3xl font-semibold text-gray-200 mb-3">
          HOW WE USE YOUR INFORMATION
        </h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
           <li className="text-sm md:text-lg">To process and deliver your orders or services.</li>
           <li className="text-sm md:text-lg">To personalize your experience and recommend relevant products.</li>
          <li className="text-sm md:text-lg">
            To communicate updates, promotions, or important notifications.
          </li>
           <li className="text-sm md:text-lg">To ensure security and prevent fraudulent activities.</li>
        </ul>
      </div>

      {/* Section: Sharing of Information */}
      <div className="mt-10">
        <h2 className="text-xl md:text-3xl font-semibold text-gray-200 mb-3">
          SHARING OF INFORMATION
        </h2>
        <p className="text-gray-300 text-sm md:text-lg mb-3">
          We do not sell or rent your personal information. Data may be shared
          only with:
        </p>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
           <li className="text-sm md:text-lg">
            Trusted partners (such as payment gateways, logistics providers) to
            fulfill services.
          </li>
           <li className="text-sm md:text-lg">Legal authorities, if required by law.</li>
        </ul>
      </div>

      {/* Section: Data Security */}
      <div className="mt-10">
        <h2 className="text-xl md:text-3xl font-semibold text-gray-200 mb-3">
          DATA SECURITY
        </h2>
        <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
          We use industry-standard security measures (encryption, firewalls,
          secure servers) to protect your information against unauthorized
          access, disclosure, or misuse.
        </p>
      </div>

      {/* Section: Changes to Policy */}
      <div className="mt-10">
        <h2 className="text-xl md:text-3xl font-semibold text-gray-200 mb-3">
          CHANGES TO POLICY
        </h2>
        <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
          We may update this Privacy Policy from time to time. Any changes will
          be posted here with a revised “last updated” date.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
