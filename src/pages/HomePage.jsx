import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Projects from "../components/Projects";
import InvestorZone from "../components/InvestorZone";
import Footer from "../components/Footer";
import SplashCursor from "../components/SplashCursor";


const HomePage = () => {

const homeRef = useRef(null);

  return (
    <div className="bg-black text-white">
    
      {/* HERO SECTION */}
   <section
       ref={homeRef}
        className="relative h-[50vh] md:min-h-screen overflow-hidden"
      >
          <SplashCursor homeRef={homeRef}/>
        <div
          className="absolute inset-0 bg-cover h-[60vh] md:h-full bg-center opacity-60"
          style={{ backgroundImage: "url('/home.png')" }}
        ></div>

        <Navbar />

        <div className="mt-16 relative z-10 px-6 flex flex-col justify-between h-full">
          <h1 className="absolute top-12 md:top-14 left-5 md:left-8 text-4xl md:text-6xl font-light leading-tight">
            EMPOWERING <br />
            <span className="font-semibold">INNOVATION</span>
          </h1>
          <h2 className="absolute md:bottom-28 bottom-16 right-6 md:right-10 text-4xl md:text-6xl font-light text-right">
            ACROSS <br />
            <span className="font-semibold">INDUSTRY</span>
          </h2>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section >
        <About />
      </section>

      {/* PROJECTS SECTION */}
      <section id="businesses">
        <Projects />
      </section>

      {/* INVESTOR SECTION */}
      <section id="investors">
        <InvestorZone />
      </section>
      
      <section>
        <Footer/>
      </section>
    </div>
  );
};

export default HomePage;


//   const sceneUrl = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";

{/* <div className="absolute inset-0 flex items-center justify-center">
          
            <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-full md:h-full">
              <SplineScene scene={sceneUrl} className="w-full h-full" />
            </div>
          </div> */}