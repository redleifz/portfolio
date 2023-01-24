import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="projects" className="w-full mt-6">
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
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

          <ProjectCard
            title="Netflix"
            image="https://i.imgur.com/NAm3IUb.png"
            detail="  I built this application in React JS.
            This app features user authentication with firebase as well as the
            firestore cloud storage database. This application is pulling movie
            data from an the IMDB movie API and displaying different categories.
            It features horizontal sliding and a featured selection. The
            useContext hook is also being implemented for app-wide state
            management."
            demoUrl="https://netflix-react-tailwind-4dp6cukej-redleifz.vercel.app/"
            techstack="React-TailwindCSS-Firebase"
            codeUrl=""
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
