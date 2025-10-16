import React from "react";

const InvestorZone = () => {
  return (
    <section className="bg-black text-white py-16 px-6 sm:px-10 md:px-20 lg:px-32">
      {/* Heading */}
      <h1 className="text-5xl text-center sm:text-8xl font-extrabold mb-6 tracking-wide">
        INVESTOR ZONE
      </h1>

      {/* Intro paragraph */}
      <p className="text-gray-300 text-center text-base sm:text-xl leading-relaxed max-w-7xl">
        We are proud to be backed by visionary investors and trusted brands that
        believe in our mission and long-term growth. Their continued support
        fuels our ability to innovate, expand, and deliver sustainable value.
      </p>

      {/* Mid Section: Paragraph left, Image right */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 mt-12 mb-16">
        {/* Left Text */}
        <p className="text-gray-200 text-base sm:text-xl leading-relaxed md:w-2/3">
          Partnering with this company has been one of the best decisions. Their
          innovation, strategy, and execution create unmatched growth
          opportunities.
        </p>

        {/* Right Image */}
        <div className="md:w-1/3 w-full flex justify-center md:justify-end">
          <img
            src="/investors.png"
            alt="Investors team"
            className="rounded-2xl shadow-lg object-cover w-full max-w-sm"
          />
        </div>
      </div>

      {/* WHY THEY INVESTED */}
      <div className="mb-12">
        <h2 className="text-xl sm:text-3xl font-semibold mb-4">
          WHY THEY INVESTED
        </h2>
        <ul className="space-y-2 text-gray-300 text-sm sm:text-lg leading-relaxed">
          <li>
            <span className="font-semibold text-white">
              Proven Market Growth –
            </span>{" "}
            A strong track record of consistent expansion and revenue growth.
          </li>
          <li>
            <span className="font-semibold text-white">
              Strategic Expansion –
            </span>{" "}
            Entering new markets with scalable solutions that attract global
            opportunities.
          </li>
          <li>
            <span className="font-semibold text-white">Trusted Brand –</span>{" "}
            Recognized for quality, innovation, and customer satisfaction.
          </li>
          <li>
            <span className="font-semibold text-white">Sustainable Model –</span>{" "}
            A future-focused business built on integrity and responsible growth.
          </li>
        </ul>
      </div>

      {/* WAYS TO INVEST */}
      <div className="mb-16">
        <h2 className="text-xl sm:text-3xl font-semibold mb-4">
          WAYS TO INVEST
        </h2>
        <ul className="space-y-2 text-gray-300 text-sm sm:text-lg leading-relaxed">
          <li>
            <span className="font-semibold text-white">Equity / Shares –</span>{" "}
            Be part of our growth as a shareholder.
          </li>
          <li>
            <span className="font-semibold text-white">Direct Funding –</span>{" "}
            Support projects and initiatives with high growth potential.
          </li>
          <li>
            <span className="font-semibold text-white">Franchise Model –</span>{" "}
            Expand our brand presence while building profitable local businesses.
          </li>
          <li>
            <span className="font-semibold text-white">
              Partnerships / Joint Ventures –
            </span>{" "}
            Collaborate to create long-term value and impact.
          </li>
        </ul>
      </div>

      {/* Footer CTA */}
      <p className="text-center italic text-lg sm:text-xl text-gray-200 leading-relaxed">
        Join us in shaping the future of design and innovation. Partner with us
        today to unlock opportunities and be part of our success story.
      </p>
    </section>
  );
};

export default InvestorZone;
