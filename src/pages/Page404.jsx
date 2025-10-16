import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  const [gifSrc, setGifSrc] = useState(
    "https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
  );

  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);

    // Force GIF to restart by resetting src
    setGifSrc(""); // remove src
    const timer = setTimeout(() => {
      setGifSrc(
        "https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
      );
    }, 50); // tiny delay

    return () => clearTimeout(timer); // cleanup
  }, []);

  return (
    <section className="flex items-center justify-center min-h-screen bg-white font-serif px-4">
      <div className="text-center max-w-2xl">
        {/* Background GIF */}
        <div
          className="bg-center bg-no-repeat bg-contain h-80 sm:h-96 mb-8"
          style={{
            backgroundImage: `url('${gifSrc}')`,
          }}
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-center text-black mt-20 sm:mt-16">
            404
          </h1>
        </div>

        {/* Content */}
        <div className="-mt-12 sm:-mt-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-gray-800">
            Looks like you're lost
          </h2>
          <p className="text-gray-600 mb-6">
            The page you are looking for is not available!
          </p>
          <Link
            to="/"
            className="inline-block px-4 py-2 bg-green-600 text-white font-medium hover:bg-green-700 transition"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Page404;
