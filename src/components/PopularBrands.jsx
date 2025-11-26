import React from "react";
import { motion, useAnimationFrame } from "framer-motion";

export default function PopularBrands() {
  const brands = [
    "/scroll1.png",
    "/scroll2.png",
    "/scroll3.png",
    "/scroll4.png",
    "/scroll5.png",
    "/scroll6.png",
    "/scroll7.png",
    "/scroll8.png",
    "/scroll9.png",
  ];

  // Combine twice for seamless looping
  const brandLogos = [...brands, ...brands];

  // Custom scroll animation using Framer Motion’s `useAnimationFrame`
  const [x, setX] = React.useState(0);

  useAnimationFrame((t, delta) => {
    setX((prev) => {
      const newX = prev - delta * 0.04; // adjust speed here
      return newX <= -100 * brands.length ? 0 : newX;
    });
  });

  return (
    <section className="w-full py-0 md:pb-10 bg-black overflow-hidden">
      <div className="w-full mx-auto">
        {/* <h2 className="text-lg md:text-2xl font-semibold text-white mb-6">
          POPULAR BRANDS
        </h2> */}

        {/* Scroll Container */}
        <div className="relative w-full overflow-hidden bg-white py-2 md:py-3 ">
          <motion.div
            className="flex gap-12 md:gap-24"
            style={{
              x: `${x}px`,
              width: `${brandLogos.length * 150}px`,
            }}
          >
            {brandLogos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="brand"
                className="h-10 md:h-12 object-contain flex-shrink-0 grayscale hover:grayscale-0 transition duration-300"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
