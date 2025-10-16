import React from "react";

const ProductRange = () => {
  return (
    <section className="bg-black text-white py-16 px-6 sm:px-10 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Top section: heading + text */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            PRODUCT RANGE
          </h2>

          <p className="text-gray-300 text-sm sm:text-base md:w-2/3 leading-relaxed">
            Kriziano Eyewear is more than an accessory—it's a vision of style
            and innovation. From precision-crafted prescription glasses to bold
            fashion sunglasses, our range is designed for individuals who see
            the world differently and want the world to see them the same way.
          </p>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="/glass1.png"
              alt="Red Sunglasses"
              className="w-full h-[400px] object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="overflow-hidden rounded-2xl">
            <img
              src="/glass2.png"
              alt="Clear Glasses"
              className="w-full h-[400px] object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="overflow-hidden rounded-2xl">
            <img
              src="/glass3.png"
              alt="White Frame Glasses"
              className="w-full h-[400px] object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductRange;
