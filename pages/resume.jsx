import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const resume = () => {
  return (
    <>
      <Head>
        <title>Jongjate | Resume</title>
        <meta name="description" content="I’m a front-end web developer" />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Jongjate Choomjairug</h2>
          <div className="flex">
            <Link href="https://www.linkedin.com/in/jongjate-choomjairug-352a79211/">
              <div
                className="rounded-full shadow-md shadow-gray-400 p-2 mr-2 cursor-pointer 
            hover:scale-110 
            hover:bg-[#EEEEEE]/50
            hover:text-black
            ease-in duration-300"
              >
                <FaLinkedinIn />
              </div>
            </Link>
            <div
              className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-110  hover:bg-[#EEEEEE]/50
            hover:text-black ease-in duration-300"
            >
              <FaGithub />
            </div>
          </div>
        </div>
        <div className="text-center py-4 w-full text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Computer Technicial Support<span className="px-1">|</span>Web
              Developer<span className="px-1"></span>
            </p>
          </div>
          <div className="block sm:hidden">
          <p>
              Computer Technicial Support<span className="px-1">|</span>Web
              Developer<span className="px-1"></span>
            </p>
          </div>
        </div>
        <p></p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span> HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>Tailwind
            
            <span className="px-2">|</span>React
            <span className="px-2">|</span> NextJS
            <span className="px-2">|</span>MySQL
            <span className="px-2">|</span>NodeJS
            <span className="px-2">|</span>Nginx
            <span className="px-2">|</span>Github
            <span className="px-2">|</span>Swift
          </p>
          {/* <p className='py-2'>
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>React
            <span className="px-2">|</span>NextJS
            <span className="px-2">|</span>MySql
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span>NodeJS
            <span className="px-2">|</span>Express
            <span className="px-2">|</span>Github
            <span className="px-2">|</span>Swift
          </p> */}
          <p className="py-2">
            <span className="font-bold">Design Skills</span>
            <span className="px-2">|</span>Adobe Photoshop
            <span className="px-2">|</span>Adobe Animate
            <span className="px-2">|</span>Adobe Premiere Pro
            <span className="px-2">|</span>Vegas Pro
            <span className="px-2">|</span>Figma
          </p>
          <p className="py-2">
            <span className="font-bold">Other Skills</span>
            <span className="px-2">|</span>Slack
            <span className="px-2">|</span>Trello
            <span className="px-2">|</span>InvisonApp
            <span className="px-2">|</span>Drawing io
          </p>
          <p className="py-2">
            <span className="font-bold">Speaks</span>
            <span className="px-2">|</span>Thai : Native
            <span className="px-2">|</span>English : Basic
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-2">
          Work Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Court of justice</span>
            <span className="px-2">|</span> Thailand
          </p>
          <p className="py-1 italic">
            Computer Technicial Support (2017 - Current)
          </p>
          <ul className="list-disc list-outside px-7 py-2 leading-relaxed">
            <li>
              Install Computer Equipment ,Computer accessory , Network
              Equipment ,Server computer , Central Database,Application Programs
              , Computer Systems , Operating system , Driver and some electronic
              devices within the organization
            </li>
            {/* <li>
              ติดตั้ง อุปกรณ์คอมพิวเตอร์ อุปกรณ์ต่อพ่วง อุปกรณ์เครือข่าย
              คอมพิวเตอร์แม่ข่าย ฐานข้อมูลกลาง โปรแกรม ระบบงานคอมพิวเตอร์
              ระบบปฏิบัติการ และอุปกรณ์อิเล็กทรอนิกส์บางประเภทภายในองค์กร
            </li> */}
            <li>
              Analyze and solve problems arising from computer usage. And
              peripherals in the work of users within the organization
            </li>
            {/* <li>
              วิเคราะห์ และแก้ปัญหาที่เกิดจากการใช้งานคอมพิวเตอร์
              และอุปกรณ์ต่อพ่วงในการทำงานของผู้ใช้งานภายในองค์กร
            </li> */}
            <li>
              Teaching how to use computers ,computer accessory,computer programs and
              some electronic devices within the organization
              {/* สอนใช้งานคอมพิวเตอร์ อุปกรณ์ต่อพ่วง สอนใช้งานโปรแกรมคอมพิวเตอร์
              และอุปกรณ์อิเล็กทรอนิกส์บางประเภท ภายในองค์กร */}
            </li>
            <li>
              Analyze, design, develop, test, maintain, set of commands and work
              systems within the organization as assigned.
              {/* วิเคราะห์ความต้องการ ออกแบบ พัฒนา ทดสอบ ดูแลรักษา ชุดคำสั่ง
              และระบบงานภายในองค์กรตามที่รับมอบหมาย */}
            </li>
            <li>
              Consulting, analyzing, designing, procuring, making purchase
              orders technology or system to develop the potential of working
              within the organization
              {/* ให้คำปรึกษา วิเคราะห์ ออกแบบ จัดหา จัดทำคำสังซื้อ
              เทคโนโลยีหรือระบบ เพื่อพัฒนาศักยภาพในการทำงานภายในองค์กร */}
            </li>
            <li>
              Analysis Process statistical data, prepare reports and present as
              assigned.
              {/* วิเคราะห์ความต้องการ ประมวลผลข้อมูลทางสถิติ จัดทำรายงาน และนำเสนอ
              ตามที่ได้รับมอบหมาย */}
            </li>
            <li>
              Installation, maintenance, preparation of audio equipment,
              projection equipment, conference rooms, conference room systems
              meeting room via monitor
              {/* ติดตั้ง ซ่อมบำรุง จัดเตรียม เครื่องเสียง อุปกรณ์ฉายภาพ ห้องประชุม
              ระบบห้องประชุม ห้องประชุมผ่านจอภาพ */}
            </li>
            <li>
              Contact and coordinate with external agencies computer system
              {/* ติดต่อ ประสานงานกับหน่วยงานภายนอกด้าน ระบบสารสนเทศ */}
            </li>
            <li>
              Planning, designing, controlling, organizing, editing information
              media, both still graphic and movie video as assigned
              {/* วางแผน ออกแบบ ควบคุม จัดทำ ตัดต่อ
              สื่อสารสนเทศทั้งภาพนิ่งและภาพเคลื่อนไหว ตามที่ได้รับมอบหมาย */}
            </li>
            <li>
              Perform other tasks as assigned
              {/* ปฏิบัติงานอื่นๆ ตามที่ได้รับมอบหมาย */}
            </li>
          </ul>
        </div>

        {/* Education */}
        <h5 className="text-center underline text-lg py-2">Education</h5>
        <div className="py-6">
          <div className="flex">
            <div className="w-[15%]">2012 - 2014</div>
            <div>
              <p className="py-1 font-bold italic">
                Master Degree of Business Administration
              </p>
              <p className="italic">
                <span className="">Ramkhamhaeng University</span>
                <span className="px-2">|</span>Bangkok Thailand
              </p>
            </div>
          </div>
          <div className="flex pt-3 ">
            <div className="w-[15%]">2007 - 2010</div>
            <div>
              <p className="py-1 font-bold italic">
                Bachelor Degree of Computer Science (Second-class honors)
              </p>
              <p className="italic">
                <span className="">Thepsatri Rajabhat University</span>
                <span className="px-2">|</span>Lopburi Thailand
              </p>
            </div>
          </div>
        </div>

        <h5 className="text-center underline text-[18px] py-2">Certificate</h5>
        <div className="py-6">
          <div className="flex">
            <div className="w-[15%]">2021</div>
            <div>
              <a
                href="https://www.udemy.com/certificate/UC-16589a0b-4828-451c-aeed-61eede59d7ae/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <p className="py-1 font-bold italic">
                  iOS & Swift - The Complete iOS App Development Bootcamp
                </p>
                <span className="">Dr. Angela Yu</span>
                <span className="px-2">|</span>Udemy
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default resume;
