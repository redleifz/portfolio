import React from "react";
import Image from 'next/image';

const About = () => {
  return (
    <div id='about' className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto mt-3 md:grid grid-cols-3 gap-8 ">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#FF8C32]">About</p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-slute-100">I am not your normal developer</p>
          <p className="py-2 text-slute-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur atque dolore magnam, quasi rem et nihil qui eveniet
            iure minus quos consequatur asperiores deserunt ab eaque numquam
            dignissimos reprehenderit totam.
          </p>
          <br />
          <p className="py-2 text-slute-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            ducimus dolore accusantium cum mollitia magnam quod quae quaerat
            repellat quasi laboriosam consequatur veritatis impedit, fugiat qui
            deserunt ipsa obcaecati rerum?
          </p>
          <p className="py-2 text-slute-100 underline cursor-pointer">Check out some of my latest projects.</p>
        </div>
        <div className="w-full h-auto m-auto shadow-lg shadow-gray-500 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            layout='fill'
            src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1506&q=80"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
