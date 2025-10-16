import React, { Suspense, lazy, useEffect, useState, useRef } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

export default function SplineScene({ scene, className = "" }) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Start loading slightly before the section comes fully into view
        if (entry.isIntersecting) setIsVisible(true);
      },
      { rootMargin: "200px", threshold: 0.1 } // preload 200px before visible
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  // Mobile fallback
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <div ref={containerRef} className={className}>
      {isMobile ? (
        <img
          src="/robot.png"
          alt="Hero Robot"
          className="w-full h-full object-contain"
        />
      ) : (
        isVisible && (
          <Suspense
            fallback={
              <div className="w-full h-full flex items-center justify-center">
                <span className="loader" />
              </div>
            }
          >
            <Spline scene={scene} className="w-full h-full" />
          </Suspense>
        )
      )}
    </div>
  );
}
