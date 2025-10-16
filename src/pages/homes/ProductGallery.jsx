import React from "react";

const ProductGallery = () => {
  const products = [
    {
      img: "/home1.png",
      alt: "Living Room",
    },
    {
      img: "/home2.png",
      alt: "Bedroom",
    },
    {
      img: "/home3.png",
      alt: "Kitchen",
    },
  ];
 return (
    <section className="bg-black text-white py-16 px-6 sm:px-10 md:px-20 lg:px-28">
      {/* Top Section: Title Left, Paragraph Right */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12 text-center md:text-left">
        <h1 className="text-5xl sm:text-8xl font-light tracking-wide md:w-1/2">
          Product <br /> <span className="ml-10">Gallery</span>
        </h1>
        <p className="md:w-1/2 text-gray-300 italic text-xl leading-loose">
          Explore our signature collections – <br className="hidden sm:block" />
          where art meets comfort.
        </p>
      </div>

      {/* Image Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
        {products.map((product, i) => (
          <div
            key={i}
            className="rounded-2xl overflow-hidden bg-neutral-800 shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src={product.img}
              alt={product.alt}
              className="w-full h-72 md:h-80 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="mt-16 text-center max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-semibold mb-4">Growth Potential</h2>
        <p className="text-gray-300 text-sm sm:text-xl leading-relaxed">
          The interior design and furniture industry is projected to grow rapidly
          with rising urbanization, higher disposable incomes, and
          lifestyle-focused consumers. Christiano Home is uniquely positioned
          with premium design expertise, scalable manufacturing partnerships, and
          global market ambitions.
        </p>
        <p className="italic text-gray-400 text-sm mt-4">Visual Suggestion:</p>
      </div>
    </section>
  );
};

export default ProductGallery;