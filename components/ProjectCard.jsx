import Link from "next/link";
import React from "react";
import {GrReactjs} from 'react-icons/gr'
import {SiTailwindcss} from 'react-icons/si'
import {SiMongodb} from 'react-icons/si'
import {SiExpress} from 'react-icons/si'
import {GrNode} from 'react-icons/gr'
import {SiFirebase} from 'react-icons/si'





const ProjectCard = ({ image, title, detail, techstack, demoUrl, codeUrl }) => {
  return (
    <div>
      <div className="h-[430px] w-[280px]  shadow-md shadow-gray-400 rounded-t-[20px] hover:scale-105 ease-in duration-300">
        <div className="w-full h-[50%]">
          <img src={image} className="w-full h-full rounded-t-[20px]"></img>
        </div>
        <div className="w-full h-[32%] px-3 pt-1 whitespace-normal truncate">
          <p className="text-red-300 font-bold text-[15px]">{title}</p>
          <p className=" text-white text-[12px] ">{detail}</p>
        </div>
        <div className="h-[8%] flex flex-row items-center">
          <div>
            <span className="p-2 font-bold text-white text-[15px]">Tech Stack : </span>
          </div>
          <div className="flex flex-row">
            {techstack.map((tech) => {
              if (tech === "React") {
                return <GrReactjs className="text-blue-500 mr-[3px]" />;
              } else if (tech === "Tailwind") {
                return <SiTailwindcss className="text-blue-300 mr-[3px]" />;
              } else if (tech === "MongoDB") {
                return <SiMongodb className="text-green-500 mr-[3px]" />;
              } else if (tech === "Express") {
                return <SiExpress className="text-slate-200 mr-[3px]" />;
              }else if (tech === "NodeJs") {
                return <GrNode className="text-yellow-200 mr-[3px]" />;
              }else if (tech === "Firebase") {
                return <SiFirebase className="text-orange-400 mr-[3px]" />;
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
              className="p-1 h-[30px] px-3 rouned bg-black rounded text-white shadow-md shadow-gray-400  hover:bg-[#eee]
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
