import findyourtripImg from "../public/assets/projects/findyourtrip.jpg";
import React from "react";
import recipefoodImg from "../public/assets/projects/recipefood.jpg";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full mt-6">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#FF8C32]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Find Your Trip"
            backgroundImg={findyourtripImg}
            projectUrl="/findyourtrip"
            techStack="React/Tailwind"
          />

          <ProjectItem
            title="Recipt Food"
            backgroundImg={recipefoodImg}
            projectUrl="/recipefood"
            techStack="React/Tailwind"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
