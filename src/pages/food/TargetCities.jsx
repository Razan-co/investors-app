import React from "react";

const TargetCities = () => {
  return (
    <section className="bg-black text-white px-6 md:px-16 lg:px-32 py-10 space-y-16">
      {/* Row 1 */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Text */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-light mb-4 leading-tight">
            TARGET CITIES <br /> AND USER BASE
          </h2>
          <p className="text-gray-300 text-justify leading-relaxed">
            We are initially launching in major metro cities with a rapidly growing
            urban population and expanding to tier-2 cities to tap into new demand.
            The app is designed for busy professionals, families, and students who
            value convenience and speed.
          </p>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/target1.png"
            alt="Target Cities"
            className="rounded-xl shadow-lg w-full max-w-xl object-cover"
          />
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-10">
        {/* Right Text */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-light mb-4 leading-tight">
            COMPETITIVE EDGE
          </h2>
          <p className="text-gray-300 text-justify leading-relaxed">
            With faster delivery times, AI-powered food suggestions, and exclusive
            restaurant partnerships, our platform stands out from existing players.
            A focus on customer loyalty programs and affordable delivery fees ensures
            higher retention.
          </p>
        </div>

        {/* Left Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/target2.png"
            alt="Competitive Edge"
            className="rounded-xl shadow-lg w-full max-w-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default TargetCities;
