import React from "react";

const DesignPhilosophy = () => {
  return (
    <section className="bg-black text-white px-6 md:px-16 lg:px-32 md:py-20 py-10">
      {/* Title */}
      <h1 className="text-4xl md:text-8xl font-light text-center mb-16">
        Design Philosophy
      </h1>

      {/* Section 1 */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-14 gap-5">
        <div className="md:w-3/2">
          <h2 className="text-xl font-semibold mb-3">Form Meets Function</h2>
          <p className="text-gray-300 leading-relaxed">
            At Kriziano Eyewear, every design begins with a simple principle — style
            should never sacrifice comfort. Our frames are engineered with lightweight
            materials, ergonomic curves, and precision fitting, ensuring that each pair
            feels as effortless to wear as it looks stunning.
          </p>
        </div>
        <div className="md:w-2/5 flex justify-center md:justify-end">
          <img
            src="/Ellipse1.png"
            alt="Form Meets Function"
            className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-between mb-14 gap-10">
        <div className="md:w-3/2">
          <h2 className="text-xl font-semibold mb-3">Bold Minimalism</h2>
          <p className="text-gray-300 leading-relaxed">
            We believe in the power of simplicity with an edge. Our frames carry clean
            lines, timeless silhouettes, and subtle yet daring twists. Whether it’s a
            sharp geometric cut or a delicate gold accent, Christiano Eyewear celebrates
            confidence through understated luxury.
          </p>
        </div>
        <div className="md:w-2/5 flex justify-center md:justify-start">
          <img
            src="/Ellipse2.png"
            alt="Bold Minimalism"
            className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-14 gap-10">
        <div className="md:w-3/2">
          <h2 className="text-xl font-semibold mb-3">Craft & Innovation</h2>
          <p className="text-gray-300 leading-relaxed">
            Every frame tells a story of expert craftsmanship and advanced technology.
            From scratch-resistant, anti-glare lenses to sustainable materials and
            3D-printed prototypes, innovation is woven into every stage of production.
            Our design labs constantly experiment with future-forward concepts that keep
            us ahead of the trend curve.
          </p>
        </div>
        <div className="md:w-2/5 flex justify-center md:justify-end">
          <img
            src="/Ellipse3.png"
            alt="Craft & Innovation"
            className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Section 4 */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-10">
        <div className="md:w-3/2">
          <h2 className="text-xl font-semibold mb-3">Identity in Frames</h2>
          <p className="text-gray-300 leading-relaxed">
            Kriziano Eyewear isn’t just about helping people see better — it’s about
            helping them be seen better. Each collection is designed to reflect
            individuality, empower self-expression, and align with modern lifestyle
            choices. Wearing Kriziano means carrying a piece of art that mirrors who you
            are.
          </p>
        </div>
        <div className="md:w-2/5 flex justify-center md:justify-start">
          <img
            src="/Ellipse4.png"
            alt="Identity in Frames"
            className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default DesignPhilosophy;
