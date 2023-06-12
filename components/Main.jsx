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
        <div className="z-[2] text-center mt-10">
          <p className="uppercase xs:hidden lg:block py-4 xs:mt-3 text-md tracking-wide text-[#EEEEEE]">
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

          <h1 className="text-[#EEEEEE] xs:text-[20px] xs:py-0 lg:py-4 lg:text-[40px]">
            A Software developer
          </h1>
          <span className="xs:text-[12px] sm:text-[15px] md:text-[18px] lg:text-[22px] text-justify">
            As a passionate software developer, I have experience with React,
            MongoDB, Node.js, and Express, and have designed and developed web
            applications and APIs using these technologies. I often spend my
            free time learning new things with passion. I don't stick to any
            particular language because I believe that a language is just a tool
            to solve problems, and I have to choose the right tool for the job
            and the problem that I have to solve.
          </span>
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
