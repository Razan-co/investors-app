"use client";
import { useEffect, useRef } from "react";

const SplashCursor = ({ containerRef }) => {
  const cursorRef = useRef(null);
  const requestRef = useRef();

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!containerRef.current || !cursor) return;

    const container = containerRef.current;
    let mouseX = 0;
    let mouseY = 0;
    let posX = 0;
    let posY = 0;
    let hue = 0;

    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    container.addEventListener("mousemove", onMouseMove);

    const animate = () => {
      // Smooth follow
      posX += (mouseX - posX) * 0.2;
      posY += (mouseY - posY) * 0.2;

      // Change color over time
      hue = (hue + 2) % 360;
      cursor.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;

      cursor.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
      requestRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      container.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, [containerRef]);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        pointerEvents: "none",
        transform: "translate3d(0,0,0)",
        mixBlendMode: "difference",
      }}
    />
  );
};

export default SplashCursor;
