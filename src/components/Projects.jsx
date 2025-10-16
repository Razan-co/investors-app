import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link

const projectsData = [
  { src: "/glass.png", label: "Glass", path: "/glass" },
  { src: "/food.png", label: "Food", path: "/food" },
  { src: "/cloth.png", label: "Cloth", path: "/cloth" },
  { src: "/sofa.png", label: "Sofa", path: "/sofa" },
];

const ProjectImage = ({ src, label, path, className }) => (
  <Link
    to={path} // ✅ React Router navigation
    className={`relative group ${className} overflow-hidden block`}
  >
    <img
      src={src}
      alt={label}
      className="w-full object-cover rounded border border-gray-700 transition-transform duration-500 group-hover:scale-105"
    />

    {/* Overlay label */}
    <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded">
      <span className="text-white text-xl md:text-3xl font-semibold transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
        {label}
      </span>
    </div>
  </Link>
);

const Projects = () => {
  return (
    <div className="bg-black text-white min-h-screen px-6 md:px-16 py-12">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 mb-10">
        {/* LEFT COLUMN */}
        <div className="flex flex-col md:w-2/3 gap-6">
          <h1 className="text-5xl md:text-9xl tracking-widest font-light mb-4 md:mb-8">
            PROJECTS
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
            <ProjectImage src="/glass.png" label="Glass" path="/glass" />
            <ProjectImage src="/food.png" label="Food" path="/food" />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="md:w-1/3 flex justify-center items-start">
          <ProjectImage src="/cloth.png" label="Cloth" path="/cloth" />
        </div>
      </div>

      {/* BOTTOM WIDE IMAGE */}
      <div className="w-full flex justify-center">
        <ProjectImage
          src="/sofa.png"
          label="Sofa"
          path="/sofa"
          className="w-full md:w-5/6"
        />
      </div>
    </div>
  );
};

export default Projects;
