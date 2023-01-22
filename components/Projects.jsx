import findyourtripImg from "../public/assets/projects/findyourtrip.jpg";
import React from "react";
import recipefoodImg from "../public/assets/projects/recipefood.jpg";
import ProjectItem from "./ProjectItem";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="projects" className="w-full mt-6">
      <div className="w-full ">
        <div className="flex max-w-[940px] mx-auto justify-between">
          <ProjectCard
            title="Find Your trip"
            image="https://i.imgur.com/LiG0Rt9.png"
            detail=" I built this application in ReactJS and is hosted on Vercel.
                This app is beautiful responsive landing page about help people to find a special trip in a long week day . Let Check it !"
            demoUrl="https://weekaway-react-tailwind.vercel.app/"
            techstack="React/TailwindCSS"
            codeUrl="https://github.com/redleifz/weekaway-react-tailwind"
          />
          <ProjectCard
            title="Recipe Food"
            image="https://i.imgur.com/qLLMlCT.png"
            detail="I built this application in ReactJS and is hosted on Vercel. This app is about recipe food . People can search recipe food using free API. That tell about Ingredients,Instructions and Vdo to do that Let Check it !"
            demoUrl="https://react-recipe-food.vercel.app/"
            techstack="React/TailwindCSS"
            codeUrl="https://github.com/redleifz/react-recipe-food"
          />

          <ProjectCard
            title="E-commerce"
            image="https://i.imgur.com/hdJsVV6.png"
            detail="I build a E-commerce Website using MERN Stack. This app have user and admin role can sample payment using Paypal sandbox. let check it !"
            demoUrl="https://amazona-frontend.onrender.com/"
            techstack="MERN Stack"
            codeUrl="https://github.com/redleifz/amazona-mern-stack"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
