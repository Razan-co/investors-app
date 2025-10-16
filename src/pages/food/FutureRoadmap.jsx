import React from "react";

const FutureRoadmap = () => {
  return (
    <section className="bg-black text-white px-6 md:px-16 lg:px-32 py-16">
      {/* Title */}
      <h2 className="text-center text-3xl md:text-5xl font-light leading-tight mb-12">
        FUTURE ROADMAP
      </h2>

      {/* Content Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/map.png"
            alt="Future Roadmap"
            className="rounded-xl shadow-xl w-full max-w-lg object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Right Text */}
        <div className="w-full md:w-1/2">
          <p className="text-gray-300 text-base md:text-lg lg:text-xl text-justify leading-relaxed">
            Our future roadmap is focused on steady growth and global expansion.
            In the short term, we aim to strengthen our presence with new product
            lines and enhanced customer experiences. Over the next few years, we
            plan to expand into international markets, with a strong emphasis on
            the Middle East. Strategic partnerships, franchises, and sustainable
            design solutions will drive our mid-term growth. Ultimately, our
            vision is to become a global leader, combining innovation,
            technology, and eco-friendly practices to create long-term value.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FutureRoadmap;
