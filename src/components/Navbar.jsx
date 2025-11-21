import React, { useState, useRef, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);
  const [offset, setOffset] = useState(0);

  // Measure navbar height dynamically
  useEffect(() => {
    if (navbarRef.current) {
      setOffset(navbarRef.current.offsetHeight);
    }
    const handleResize = () => {
      if (navbarRef.current) setOffset(navbarRef.current.offsetHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Native smooth scroll (no locomotive)
const handleScrollTo = (targetId) => {
  const target = document.querySelector(`#${targetId}`);
  if (!target) return;

  const elementTop = target.getBoundingClientRect().top + window.scrollY;
  const finalPosition = elementTop - offset;

  window.scrollTo({
    top: finalPosition,
    behavior: "smooth",
  });

  setIsOpen(false);
};

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.25, ease: "easeIn" } },
  };

  return (
    <header
      ref={navbarRef}
      className="fixed top-0 left-0 w-full z-20 flex items-center justify-between px-6 md:px-16 py-4 bg-black/50 backdrop-blur-md"
    >
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Logo" className="w-20 h-16 md:w-28 md:h-20 object-contain" />
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-10 text-sm uppercase font-medium tracking-wide text-white">
        <Link to="/about" className="hover:text-gray-300">
          About Us
        </Link>
        <button onClick={() => handleScrollTo("businesses")} className="hover:text-gray-300">
          BUSINESSES
        </button>
        <button onClick={() => handleScrollTo("investors")} className="hover:text-gray-300">
          INVESTOR ZONE
        </button>
        <Link to={"/contact"} className="hover:text-gray-300">
          Contact
        </Link>
      </nav>

      {/* Mobile Toggle Button */}
      <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX className="w-7 h-7" /> : <FiMenu className="w-7 h-7" />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-md text-white flex flex-col items-center space-y-6 py-8 md:hidden"
          >
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-300 text-lg"
            >
              About Us
            </Link>

            <button
              onClick={() => handleScrollTo("businesses")}
              className="hover:text-gray-300 text-lg"
            >
              Businesses
            </button>

            <button
              onClick={() => handleScrollTo("investors")}
              className="hover:text-gray-300 text-lg"
            >
              Investor Zone
            </button>

            <Link
              to={"/contact"}
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-300 text-lg"
            >
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;


// import React, { useState, useRef, useEffect } from "react";
// import { FiMenu, FiX } from "react-icons/fi";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from "react-router-dom";
// import { locomotiveScrollInstance } from "./AppLayout"; // 👈 Import Locomotive instance

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const navbarRef = useRef(null);
//   const [offset, setOffset] = useState(0);

//   // Measure navbar height dynamically
//   useEffect(() => {
//     if (navbarRef.current) {
//       setOffset(navbarRef.current.offsetHeight);
//     }
//     const handleResize = () => {
//       if (navbarRef.current) setOffset(navbarRef.current.offsetHeight);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Scroll handler
//   const handleScrollTo = (targetId) => {
//     const target = document.querySelector(`#${targetId}`);
//     if (!target) return;

//     // Scroll with Locomotive
//     if (locomotiveScrollInstance) {
//       locomotiveScrollInstance.scrollTo(target, {
//         offset: -offset, // 👈 dynamically offset by navbar height
//         duration: 1.2,
//         easing: [0.25, 0.00, 0.35, 1.00],
//       });
//     } else {
//       // fallback if locomotive isn't active
//       window.scrollTo({
//         top: target.offsetTop - offset,
//         behavior: "smooth",
//       });
//     }
//     setIsOpen(false);
//   };

//   const menuVariants = {
//     hidden: { opacity: 0, y: -20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
//     exit: { opacity: 0, y: -10, transition: { duration: 0.25, ease: "easeIn" } },
//   };

//   return (
//     <header
//       ref={navbarRef}
//       className="fixed top-0 left-0 w-full z-20 flex items-center justify-between px-6 md:px-16 py-4 bg-black/50 backdrop-blur-md"
//     >
//       {/* Logo */}
//       <div className="flex items-center space-x-2">
//         <img src="/logo.png" alt="Logo" className="w-20 h-16 md:w-28 md:h-20 object-contain" />
//       </div>

//       {/* Desktop Menu */}
//       <nav className="hidden md:flex space-x-10 text-sm uppercase font-medium tracking-wide text-white">
//         <Link to="/about" className="hover:text-gray-300">
//           About Us
//         </Link>
//         <button onClick={() => handleScrollTo("businesses")} className="hover:text-gray-300">
//          BUSINESSES
//         </button>
//         <button onClick={() => handleScrollTo("investors")} className="hover:text-gray-300">
//          INVESTOR ZONE
//         </button>
//         <Link to={"/contact"} className="hover:text-gray-300">
//           Contact
//         </Link>
//       </nav>

//       {/* Mobile Toggle Button */}
//       <button
//         className="md:hidden text-white focus:outline-none"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {isOpen ? <FiX className="w-7 h-7" /> : <FiMenu className="w-7 h-7" />}
//       </button>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             key="mobile-menu"
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             variants={menuVariants}
//             className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-md text-white flex flex-col items-center space-y-6 py-8 md:hidden"
//           >
//             <Link
//               to="/about"
//               onClick={() => setIsOpen(false)}
//               className="hover:text-gray-300 text-lg transition-colors duration-200"
//             >
//               About Us
//             </Link>
//             <button
//               onClick={() => handleScrollTo("businesses")}
//               className="hover:text-gray-300 text-lg"
//             >
//               Businesses
//             </button>
//             <button
//               onClick={() => handleScrollTo("investors")}
//               className="hover:text-gray-300 text-lg"
//             >
//                Investor Zone
//             </button>
//             <Link
//               to={"/contact"}
//               onClick={() => setIsOpen(false)}
//               className="hover:text-gray-300 text-lg"
//             >
//               Contact
//             </Link>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };

// export default Navbar;
