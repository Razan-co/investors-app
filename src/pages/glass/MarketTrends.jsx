import React from "react";

const MarketTrends = () => {
  return (
    <section className="bg-black text-white px-6 md:px-16 lg:px-30 py-20">
      {/* Title */}
      <h1 className="text-4xl md:text-8xl font-light text-start mb-16 leading-tight">
        MARKET TRENDS <br /> AND DEMANDS
      </h1>

      {/* Section 1 */}
      <div className="flex md:flex-row flex-col-reverse items-center gap-8 mb-14">
        <div className="flex-shrink-0">
          <img
            src="/glassl.png"
            alt="Global Eyewear Industry Growth"
            className="w-40 h-28 md:w-48 md:h-32 rounded-xl object-cover"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-lg font-semibold mb-2">
            Global Eyewear Industry Growth
          </h2>
          <p className="text-gray-300 leading-relaxed">
            The eyewear market is witnessing consistent global growth, driven by
            rising screen time, awareness of eye health, and the demand for stylish
            accessories. Industry reports project that the global market will reach
            hundreds of billions of dollars within the next decade, ensuring a strong
            future outlook.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-8 mb-14">
        <div className="flex-shrink-0">
          <img
            src="/glassl2.png"
            alt="Regional & Global Demand"
            className="w-40 h-28 md:w-48 md:h-32 rounded-xl object-cover"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-lg font-semibold mb-2">
            Regional & Global Demand
          </h2>
          <p className="text-gray-300 leading-relaxed">
            In the Middle East, luxury and designer eyewear are in high demand,
            reflecting the region’s preference for premium lifestyle products.
            Globally, younger consumers are driving demand for affordable yet trendy
            frames, creating opportunities in both premium and mass-market categories.
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-8">
        <div className="flex-shrink-0">
          <img
            src="/glassl3.png"
            alt="Investment Potential"
            className="w-40 h-28 md:w-48 md:h-32 rounded-xl object-cover"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-lg font-semibold mb-2">Investment Potential</h2>
          <p className="text-gray-300 leading-relaxed">
            With rapid urbanization, increased disposable incomes, and digital
            adoption, the demand for eyewear will only rise. For investors, this
            sector represents a future-proof, scalable opportunity with strong
            margins and continuous consumer interest.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MarketTrends;
