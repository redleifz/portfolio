import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill, BsFillPersonsFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div
      id="home"
      className="flex items-center justify-center h-screen mb-3 bg-fixed bg-center bg-cover  z-[-2] "
    >
      {/* <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[1]" /> */}
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="z-[2] text-center">
          <p className="uppercase py-4 text-sm tracking-wide text-[#EEEEEE]">
            Let&apos;s build something together
          </p>
          <h1 className="py-4 text-[#EEEEEE]">
            Hi, I&apos;m <span className="text-[#FF8C32]">Jongjate</span>
          </h1>
          <h1 className="py-4 text-[#EEEEEE]">A Front-End Web Developer</h1>
          <p>
            I&apos;m a front-end web developer specializing in building (and
            occasionally designing) experiences. Currently, I&apos;m focused on
            building responsive front-end web application while learning
            back-end technoloies.
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

            <div
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110  hover:bg-[#EEEEEE]/50
            hover:text-black ease-in duration-300"
            >
              <FaGithub />
            </div>
            <div
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in  hover:bg-[#EEEEEE]/50
            hover:text-black duration-300"
            >
              <AiOutlineMail />
            </div>
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
