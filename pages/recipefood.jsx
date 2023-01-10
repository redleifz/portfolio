import React from "react";
import recipefoodImg from "../public/assets/projects/recipefood.jpg";
import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";

const recipefood = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute pt-20 z-1"
          layout="fill"
          objectFit="cover"
          src={recipefoodImg}
          alt="/"
        />

        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Recipe Food</h2>
          <h3>ReactJs/Tailwind</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="mt-5">
            I built this application in ReactJS and is hosted on Vercel. This
            app is about recipe food . People can search recipe food using free
            API. That tell about Ingredients,Instructions and Vdo to do that Let
            Check it !
          </p>
          <div className="mt-2">
            <Link href="https://react-recipe-food.vercel.app/">
              <button
                className="px-8 py-2 mt-4 mr-8 border rounded-md 
          hover:bg-slate-200
          hover:text-black
          duration-300"
              >
                Demo
              </button>
            </Link>

            <Link href="https://github.com/redleifz/react-recipe-food">
              <button
                className="px-8 py-2 mt-4 mr-8 border rounded-md 
          hover:bg-slate-200
          hover:text-black
          duration-300"
              >
                Code
              </button>{" "}
            </Link>
          </div>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-md shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Tailwind
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default recipefood;
