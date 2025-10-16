import React from "react";

const ApparelOverview = () => {
  return (
    <section className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 sm:px-10 md:px-20 py-12">
      {/* Top section: Title left, Paragraph right */}
      <div className="w-full flex flex-col md:flex-row md:items-start md:justify-between gap-0">
        {/* Left side - Heading */}
        <div className="md:w-2/3 ">
          <h1 className="text-4xl max-w-90 sm:text-6xl font-bold leading-tight">
            Apparel Line <br /> <span className="flex justify-end">Overview</span>
          </h1>
        </div>

        {/* Right side - Paragraph */}
        <div className="md:w-full text-gray-300 text-sm sm:text-2xl text-justify leading-relaxed mt-4 md:mt-0">
          <p>
            Kriziano Clothing is the fashion division of Khatip Group, offering
            a curated range of menswear, womenswear, and accessories. Our designs
            blend modern trends with timeless tradition, appealing to
            style-conscious customers across diverse markets.
          </p>
        </div>
      </div>

      {/* Collections Section */}
      <div className="w-full max-w-8xl mt-16">
        <h2 className="text-lg sm:text-3xl font-semibold mb-4">
          Our collections include:
        </h2>
        <ul className="list-disc list-inside md:ml-16 ml-8 text-gray-300 text-sm sm:text-xl space-y-1">
          <li>Menswear: Smart casuals, formal wear, and ethnic styles.</li>
          <li>
            Womenswear: Contemporary dresses, luxury ethnic wear, and everyday
            essentials.
          </li>
          <li>Accessories: Handbags, scarves, and fashion jewelry.</li>
        </ul>
      </div>

      {/* Target Demographics Section */}
      <div className="w-full max-w-8xl mt-14">
        <h2 className="text-lg sm:text-3xl font-semibold mb-4">
          Target Demographics
        </h2>
        <ul className="list-disc list-inside md:ml-16 ml-8 text-gray-300 text-sm sm:text-xl space-y-1">
          <li>
            Primary Audience: Urban millennials and Gen Z who value both style
            and comfort.
          </li>
          <li>
            Secondary Audience: Working professionals and luxury fashion
            seekers.
          </li>
          <li>
            Geographic Reach: India, Middle East, and expanding into Europe and
            North America.
          </li>
        </ul>
      </div>

      {/* Market Insight */}
      <div className="w-full max-w-8xl mt-8">
        <p className="text-sm sm:text-xl text-gray-300">
          <span className="font-semibold text-white">Market Insight:</span> The
          global apparel market is projected to reach{" "}
          <span className="font-semibold text-white">$2 trillion by 2030</span>,
          offering huge growth opportunities.
        </p>
      </div>
    </section>
  );
};

export default ApparelOverview;
