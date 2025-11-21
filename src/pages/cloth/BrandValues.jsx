import React from "react";

const BrandValues = () => {
  return (
    <section className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 py-12">
      {/* Image Section */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6">
        {/* Left Image */}
        <img
          src="/clothl.png" // replace with your actual image path
          alt="Bridal Design"
          className="w-full md:w-xl rounded-2xl object-cover h-[400px] sm:h-[500px] md:h-[650px]"
        />

        {/* Right Image */}
        <img
          src="/clothl1.png" // replace with your actual image path
          alt="Floral Design"
          className="w-full md:w-xl rounded-2xl object-cover h-[400px] sm:h-[500px] md:h-[650px]"
        />
      </div>

      {/* Text Section */}
      <div className="max-w-6xl text-md md:text-xl mt-10 space-y-4 text-left text-gray-300">
        <p>
          <span className="font-semibold text-white">
            Signature Sophistication:
          </span>{" "}
          Each piece combines sleek tailoring with expressive design, making
          fashion a form of identity.
        </p>

        <p>
          <span className="font-semibold text-white">
            Effortless Versatility:
          </span>{" "}
          Styles crafted to move seamlessly from day to night, boardroom to
          after-party.
        </p>

        <p>
          <span className="font-semibold text-white">Fashion with a Future:</span>{" "}
          Sustainable fabrics, ethical processes, and conscious luxury built for
          tomorrow’s world.
        </p>

        <p>
          <span className="font-semibold text-white">The Global Pulse:</span>{" "}
          Designs inspired by international trends but redefined with
          Kriziano’s unique creative DNA.
        </p>

        <p>
          <span className="font-semibold text-white">Luxury Made Personal:</span>{" "}
          A shopping experience that feels tailor-made—because style should
          never be one-size-fits-all.
        </p>
      </div>
    </section>
  );
};

export default BrandValues;
