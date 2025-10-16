import React from "react";

const SummarySection = () => {
  return (
    <section className="w-full bg-black text-white px-6 sm:px-10 md:px-20 py-16">
      {/* Summary Section */}
      <div className="max-w-8xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6">
          Summary
        </h2>

        <p className="text-gray-300 text-sm sm:text-lg leading-relaxed mb-4">
          Kriziano Home is the interior design and lifestyle division of Khatip Group, 
          specializing in premium furniture, home décor, and turnkey interior solutions. 
          We deliver customized living spaces that embody elegance, comfort, and innovation.
        </p>

        <p className="text-gray-300 text-sm sm:text-lg leading-relaxed">
          We cater to residential, commercial, and luxury hospitality markets, 
          providing solutions that resonate with both modern minimalism 
          and timeless sophistication.
        </p>
      </div>

      {/* Market Reach Section */}
      <div className="max-w-8xl mx-auto mt-12">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6">
          Market Reach & Customer Base
        </h3>

        <ul className="text-gray-300 text-sm sm:text-lg space-y-2 list-disc list-inside">
          <li>
            Operating across India and Middle East with expanding presence in GCC countries.
          </li>
          <li>
            Growing clientele including urban homeowners, corporate offices, and boutique hotels.
          </li>
          <li>
            Established partnerships with architects, builders, and real estate developers.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SummarySection;
