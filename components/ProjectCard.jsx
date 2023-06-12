import Link from "next/link";
import React from "react";
import { GrReactjs } from "react-icons/gr";
import { SiTailwindcss } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { GrNode } from "react-icons/gr";
import { SiFirebase } from "react-icons/si";

const ProjectCard = ({
  _id,
  image,
  title,
  detail,
  techstack,
  demoUrl,
  codeUrl,
}) => {
  return (
    <div>
      <div className="h-[430px] w-[88vw] sm:w-[45vw] lg:w-[19vw] max-w-[1240px]  rounded-md  shadow-md shadow-gray-400 hover:scale-105 ease-in duration-300">
        <div className="w-full h-[50%]">
          <img src={image} className="w-full h-full "></img>
        </div>
        <div className="w-full h-[32%] flex flex-col px-3 pt-1 whitespace-normal overflow-hidden truncate">
          <span className="text-red-300 font-bold text-[15px] ">{title}</span>
          <span className=" text-white text-[12px] text-justify ">{detail}</span>
        </div>
        <div className="h-[8%] flex flex-row items-center">
          <div>
            <span className="p-2 font-bold text-white text-[15px]">
              Tech Stack :{" "}
            </span>
          </div>
          <div className="flex flex-row">
            {techstack.map((tech) => {
          
              if (tech === "React") {
                return (
                  <GrReactjs key={_id} className="text-blue-500 mr-[3px]" />
                );
              } else if (tech === "Tailwind") {
                return (
                  <SiTailwindcss
                    key={tech}
                    className="text-blue-300 mr-[3px]"
                  />
                );
              } else if (tech === "MongoDB") {
                return (
                  <SiMongodb key={tech} className="text-green-500 mr-[3px]" />
                );
              } else if (tech === "Express") {
                return (
                  <SiExpress key={tech} className="text-slate-200 mr-[3px]" />
                );
              } else if (tech === "NodeJs") {
                return (
                  <GrNode key={tech} className="text-green-200 mr-[3px]" />
                );
              } else if (tech === "Firebase") {
                return (
                  <SiFirebase key={tech} className="text-orange-400 mr-[3px]" />
                );
              }
            })}
          </div>
        </div>
        <div className="h-[12%] text-black flex justify-center">
          <Link href={demoUrl}>
            <button
              className="p-1 h-[30px] px-3 mr-5 rounded  text-white shadow-md shadow-gray-400
           hover:bg-[#eee]
           hover:text-black
           duration-300"
            >
              Demo
            </button>
          </Link>
          <Link href={codeUrl}>
            <button
              className="p-1 h-[30px] px-3 bg-black rounded text-white shadow-md shadow-gray-400  hover:bg-[#eee]
                  hover:text-black
                  duration-300"
            >
              Code
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
