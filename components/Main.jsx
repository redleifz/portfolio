import Link from "next/link";
import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineContacts } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";

const Main = () => {
  return (
    <div
      id="home"
      className="flex items-center justify-center h-screen mb-3 bg-fixed bg-center bg-cover z-[-2]"
    >
      <div className="absolute h-screen top-0 left-0 right-0 bottom-0 bg-black/70 z-[1]" />
      <div className="absolute h-screen top-0 left-0 right-0 bottom-0 z-[-2] custom-img"></div>
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="z-[2] text-center">
          <p className="uppercase py-4 xs:mt-3 text-sm tracking-wide text-[#EEEEEE]">
            Let&apos;s build something together
          </p>
          <div className="flex items-center justify-center">
            <h1 className="py-4 text-[#EEEEEE]">Hi, I&apos;m&nbsp;&nbsp;</h1>
            <h1>
              <TypeAnimation
                className="text-[#FF8C32]"
                sequence={[
                  "", // Types 'One'
                  500, // Waits 1s
                  "Jong", // Deletes 'One' and types 'Two'
                  500, // Waits 2s
                  "Jongjate",
                  4000, // Types 'Three' without deleting 'Two'
                  () => {},
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: "1em" }}
              />
            </h1>
          </div>
          {/* <span className="text-[#FF8C32]">Jongjate</span> */}

          <h1 className="py-4 text-[#EEEEEE]">A Web Developer</h1>
          <p>
            As a passionate web developer,I have experience with React, MongoDB,
            Node.js, and Express, and have designed and developed web
            applications and APIs using these technologies. I am always eager to
            learn and grow my skill set, and am dedicated to producing
            high-quality, efficient, and maintainable code that meets client
            requirements. I believe that programming languages and frameworks
            are simply tools, and I am always excited about exploring new
            technologies to improve my abilities and provide innovative
            solutions to clients. With a passion for problem-solving and a
            commitment to excellence, I am eager to contribute to the success of
            any project.
            {/* I am an expert in website front-end development. (And there are
            times when I do my own design as I have some experience with
            graphics programs.) I am currently focusing on front-end web
            development. However, I&apos;m also interested in learning about
            back-end development. */}
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-10 mt-10">
            <Link href="https://www.linkedin.com/in/jongjate-choomjairug-352a79211/">
              <div
                className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer 
            hover:scale-110 
            hover:bg-[#EEEEEE]/50
            hover:text-black
            ease-in duration-300"
              >
                <FaLinkedinIn />
              </div>
            </Link>

            <Link href="https://github.com/redleifz">
              <div
                className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110  hover:bg-[#EEEEEE]/50
            hover:text-black ease-in duration-300"
              >
                <FaGithub />
              </div>
            </Link>
            <Link href="#contact" scroll={false}>
              <div
                className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in  hover:bg-[#EEEEEE]/50
            hover:text-black duration-300"
              >
                <AiOutlineContacts size={20} />
              </div>
            </Link>

            <Link href="/resume">
              <div
                className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in  hover:bg-[#EEEEEE]/50
            hover:text-black duration-300"
              >
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
