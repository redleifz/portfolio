import Image from "next/image";
import React from "react";
import Html from "../public/assets/skills/html.png";
import Css from "../public/assets/skills/css.png";
import Javascript from "../public/assets/skills/javascript.png";
import ReactImg from "../public/assets/skills/react.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import Github from "../public/assets/skills/github1.png";
import MySQL from "../public/assets/skills/mysql.png";
import NodeJs from "../public/assets/skills/nodejs.png";
import MongoDB from "../public/assets/skills/mongodb.png"

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl  tracking-widest uppercase text-[#FF8C32]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-lg bg-white/90  shadow-gray-400 rounded-xl hover:scale-105 hover:bg-white/100 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Html} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col text-black items-center justify-center">
                <h3 className="xs:text-sm sm:text-2xl">HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-lg bg-white/90  shadow-gray-400 rounded-xl hover:scale-105 hover:bg-white/100 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Css} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex text-black flex-col items-center justify-center">
                <h3 className="xs:text-sm sm:text-2xl">CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-lg bg-white/90  shadow-gray-400 rounded-xl hover:scale-105 hover:bg-white/100 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Javascript} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col text-black items-center justify-center">
                <h3 className="xs:text-sm sm:text-2xl">JavaScript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-lg bg-white/90  shadow-gray-400 rounded-xl hover:scale-105 hover:bg-white/100 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={ReactImg} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col text-black items-center justify-center">
                <h3 className="xs:text-sm sm:text-2xl">React</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-lg bg-white/90  shadow-gray-400 rounded-xl hover:scale-105 hover:bg-white/100 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Tailwind} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col text-black items-center justify-center">
                <h3 className="xs:text-sm sm:text-2xl">Tailwind</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-lg bg-white/90   shadow-gray-400 rounded-xl hover:scale-105 hover:bg-white/100 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4  h-full justify-center items-center">
              <div className="m-auto">
                <Image src={MySQL} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col text-black items-center justify-center">
                <h3 className="xs:text-sm sm:text-2xl">MySQL</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-lg bg-white/90  shadow-gray-400 rounded-xl hover:scale-105 hover:bg-white/100 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={NodeJs} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col text-black items-center justify-center">
                <h3 className="xs:text-sm sm:text-2xl">NodeJS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-lg bg-white/90  shadow-gray-400 rounded-xl hover:scale-105 hover:bg-white/100 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Github} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex text-black flex-col items-center justify-center">
                <h3 className="xs:text-sm sm:text-2xl">Github</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-lg bg-white/90  shadow-gray-400 rounded-xl hover:scale-105 hover:bg-white/100 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={MongoDB} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex text-black flex-col items-center justify-center">
                <h3 className="xs:text-sm sm:text-2xl">MongoDB</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
