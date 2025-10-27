import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link


const projectsData = [
  { src: "/glass.png", label: "Eyewear", path: "/glass", logo: "/glass logo.png" },
  { src: "/food.png", label: "Food", path: "/food", logo: "/food logo.png" },
  { src: "/cloth.png", label: "Cloth", path: "/cloth", logo: "/cloth logo.png" },
  { src: "/sofa.png", label: "Sofa", path: "/sofa", logo: "/home logo.png" },
];

const ProjectImage = ({ src, label, path, logo, className }) => (
  <Link
    to={path}
    className={`relative group ${className} overflow-hidden block`}
  >
    <img
      src={src}
      alt={label}
      className="w-full object-cover rounded border border-gray-700 transition-transform duration-500 group-hover:scale-105"
    />

    {/* Overlay with logo + label */}
    <div className="absolute inset-0 gap-10 flex flex-col items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded text-center">
      {logo && (
        <img
          src={logo}
          alt={`${label} logo`}
          className="w-10 h-10 rounded-full md:w-30 md:h-30 mb-2 object-contain"
        />
      )}
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
  {projectsData.slice(0, 2).map((project) => (
    <ProjectImage key={project.label} {...project} />
  ))}
</div>
        </div>

        {/* RIGHT COLUMN */}
     <div className="md:w-1/3 flex justify-center items-start">
  <ProjectImage {...projectsData[2]} />
</div>
      </div>

      {/* BOTTOM WIDE IMAGE */}
    <div className="w-full flex justify-center">
  <ProjectImage {...projectsData[3]} className="w-full md:w-5/6" />
</div>
    </div>
  );
};

export default Projects;
