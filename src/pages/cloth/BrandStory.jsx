import React from "react";

const BrandStory = () => {
  return (
    <section className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 sm:px-10 md:px-16 py-12">
      {/* Main Content (Text + Image Side by Side) */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          {/* Heading */}
         <div className="flex justify-end">
        <h1 className="text-4xl sm:text-5xl md:text-8xl font-light leading-tight mb-6">
          Brand Story <br /> <span className="flex justify-end"> & USP</span>
        </h1>
        </div>

          {/* Paragraphs */}
          <div className="space-y-5 text-gray-300 text-sm sm:text-xl text-justify leading-relaxed mt-6">
            <p>
              <span className="font-semibold text-white">Kriziano Clothing</span> was born from a vision to dress ambition, confidence, and individuality. We don’t just create garments—we sculpt style statements for people who refuse to blend in. Every silhouette, every fabric choice, every detail is designed to elevate the everyday into the extraordinary.
            </p>

            <p>
              Our collections celebrate the modern global citizen—someone bold enough to stand out, yet refined enough to stay timeless. Kriziano Clothing is where luxury meets edge, and elegance meets attitude.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src="/brand.png"
            alt="Brand Fashion Dress"
            className="w-full h-auto md:h-[90vh] object-cover"
          />
        </div>
      </div>

      {/* Bottom Quote - Centered Below Both */}
      <div className="mt-12 text-center max-w-4xl">
        <p className="italic text-gray-200 text-sm sm:text-base uppercase tracking-wide leading-relaxed">
          Christiano Clothing is not just worn—it’s experienced. It’s a brand for those who want their wardrobe to whisper class and shout confidence at the same time.
        </p>
      </div>
    </section>
  );
};

export default BrandStory;
