import React from "react";
import ProjectCard from "./ProjectCard";

const projectSet = [
  {
    _id: "1",
    title: "Find our trip",
    image: "https://i.imgur.com/LiG0Rt9.png",
    techstack: ["React", "Tailwind"],
    detail:
      "I built this application in ReactJS and is hosted on Vercel.This app is beautiful responsive landing page about help people to find a special trip in a long week day . Let Check it !",
    demoUrl: "https://weekaway-react-tailwind.vercel.app/",
    codeUrl: "https://github.com/redleifz/weekaway-react-tailwind",
  },
  {
    _id: "2",
    title: "Recipe food",
    image: "https://i.imgur.com/qLLMlCT.png",
    techstack: ["React", "Tailwind"],
    detail:
      "I built this application in ReactJS and is hosted on Vercel. This app is about recipe food . People can search recipe food using free API. That tell about Ingredients,Instructions and Vdo to do that Let Check it !",
    demoUrl: "https://react-recipe-food.vercel.app/",
    codeUrl: "https://github.com/redleifz/react-recipe-food",
  },
  {
    _id: "3",
    title: "E-commerce",
    image: "https://i.imgur.com/hdJsVV6.png",
    techstack: ["MongoDB", "Express", "React", "NodeJs"],
    detail:
      "I build a E-commerce Website using MERN Stack. This app have user and admin role can sample payment using Paypal sandbox. let check it !",
    demoUrl: "https://amazona-frontend.onrender.com/",
    codeUrl: "https://github.com/redleifz/amazona-mern-stack",
  },
  {
    _id: "4",
    title: "Netflix",
    image: "https://i.imgur.com/NAm3IUb.png",
    techstack: ["React", "Tailwind", "Firebase"],
    detail:
      "I built this application in React JS. This app features user authentication with firebase as well as the firestore cloud storage database. This application is pulling movie data from an the IMDB movie API and displaying different categories. It features horizontal sliding and a featured selection. The useContext hook is also being implemented for app-wide state management.",
    demoUrl: "https://netflix-react-tailwind-4dp6cukej-redleifz.vercel.app/",
    codeUrl: "",
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-screen mt-6  mx-auto max-w-[1240px] flex justify-center flex-col"
    >
      <p className="text-xl mx-5 py-5  tracking-widest uppercase text-[#FF8C32]">
        My Projects
      </p>
      <div className="grid px-3 w-full items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {projectSet.map((tech) => (
          <div key={tech._id} className="flex justify-center">
            <ProjectCard
              key={tech._id} // Assign a unique key to the ProjectCard component
              title={tech.title}
              image={tech.image}
              techstack={tech.techstack}
              detail={tech.detail}
              demoUrl={tech.demoUrl}
              codeUrl={tech.codeUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
