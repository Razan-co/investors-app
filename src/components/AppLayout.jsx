// AppLayout.jsx
import React, { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export let locomotiveScrollInstance = null; // 👈 export the instance

const AppLayout = () => {
  const scrollRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (!scrollRef.current) return;

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.1,
      multiplier: 1.1,
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });

    locomotiveScrollInstance = scroll; // 👈 assign globally

    // update on route change
    setTimeout(() => {
      scroll.update();
    }, 500);

    return () => {
      scroll.destroy();
      locomotiveScrollInstance = null;
    };
  }, [location.pathname]);

  return (
    <div
      ref={scrollRef}
      data-scroll-container
      className="bg-black text-white overflow-hidden"
    >
      <Outlet />
    </div>
  );
};

export default AppLayout;
