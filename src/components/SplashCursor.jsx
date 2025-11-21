"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const SplashCursor = ({ homeRef }) => {
  const followerRef = useRef(null);

  useEffect(() => {
    const follower = followerRef.current;
    const homeSection = homeRef.current;

    if (!follower || !homeSection) return;

    const moveFollower = (e) => {
      const rect = homeSection.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to(follower, {
        x: x - 35,
        y: y - 35,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const show = () => {
      gsap.to(follower, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const hide = () => {
      gsap.to(follower, {
        scale: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    homeSection.addEventListener("mousemove", moveFollower);
    homeSection.addEventListener("mouseenter", show);
    homeSection.addEventListener("mouseleave", hide);

    return () => {
      homeSection.removeEventListener("mousemove", moveFollower);
      homeSection.removeEventListener("mouseenter", show);
      homeSection.removeEventListener("mouseleave", hide);
    };
  }, [homeRef]);

  return (
    <div
      ref={followerRef}
      style={{
        position: "absolute",
        width: "70px",
        height: "70px",
        borderRadius: "50%",
        pointerEvents: "none",
        top: 4,
        left: 4,
        transform: "scale(0)",
        background: "#fff",              // pure white, required for difference
        mixBlendMode: "difference",      // blend mode effect
        zIndex: 9999,
      }}
    />
  );
};

export default SplashCursor;
