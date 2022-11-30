import React from "react";
import Image from "next/image";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto mt-3 md:grid grid-cols-3 gap-8 ">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#FF8C32]">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-slute-100">
            I am develop front-end websites , connecting backend and other
            technologies. I am very motivated to learn new technologies.
            Although I'm most proficient in HTML, CSS, Javascript, and React web
            development, I'm a fast learner. and often spends free time go with
            learning new things with passion always ,For example studying
            technology on the backend side, such as NodeJS-Express,
            DjangoRestframework for develop my potential to a Full-Stack
            Developer, I will be able to use programming tools to solve any
            problem. I don't stick to the language. Because I believe that
            language is just a tool to solve problems and I have to choose the
            right tool for the job and the problem that I have to solve.
            {/* ฉันเป็นพัฒนาเว็บไซต์ส่วนหน้า ที่เชื่อมต่อ backend และเทคโนโลยีอื่น ๆ ฉันมีแรงบัลดาลในในการเรียนรู้เทคโลโยลีใหม่ๆ            
            แม้ว่าฉันจะถนัดในด้านใช้ภาษา HTML CSS Javascript และ React ในการพัฒนา website มากที่สุด ฉันเป็นคนเรียนรู้ได้ไว และมักจะใช้เวลาว่าง
            ไปกับการเรียนรู้สิ่งใหม่ๆ ด้วยความหลงไหลอยู่เสมอ เช่นการศึกษาเทคโนโลยีในฝั่ง backend เช่น  NodeJS-Express ,DjangoRestframework 
            เพื่อพัฒนาศักยภาพตัวเองไปในจุดที่เป็น Full-Stack Developer ฉันจะสามารถใช้เครื่องมือซึ่งคือการเขียนโปรแกรมในการแก้ปัญหาอะไรก็ได้
            ฉันไม่ยึดติดกับภาษา เพราะฉันมีความเชื่อว่าภาษาเป็นเพียงเครื่องมือในการแก้ปัญหาและฉันต้องเลือกใช้เครื่องมือให้เหมาะกับงานและปัญหาที่ฉันต้องแก้ */}
          </p>
          <br />
          <p className="py-2 text-slute-100">
            I started software development in 2018 because I originally worked
            in Computer Technicial Support and I wanted to use my free time from
            support to develop software for my organization. So I began to
            study and practic programming more. Starting from the development of
            existing work systems in the organization. to use more conveniently
            Cover the missing scope of work and reduce the workload of employees
            in the organization. And develop a new work system in the form of a
            web application, and in addition to work, I also practice additional
            languages.
            {/* ฉันเริ่มพัฒนาโปรแกรมในปี 2561 เนื่องจากแต่เดิมฉันทำงานเป็น Computer Technicial Support และฉันต้องการใช้เวลาว่างที่ว่างจากงาน
           support พัฒนาองค์กรในด้านซอฟแวร์บ้าง ฉันจึงเริ่มศึกษาและทบทวนการเขียนโปรแกรมมากขึ้น โดยเริ่มจากการพัฒนาระบบงานเดิมที่มีอยู่ในองค์กร
           ให้ใช้งานได้สะดวกมากขึ้น ครอบครุมขอบเขตงานที่ยังขาดไปและลดภาระการทำงานของพนักงานในองค์กรได้ และพัฒนาระบบงานขึ้นมาใหม่ในลักษณะ
           web application และในนอกเหนือเวลางานฉันยังฝึกฝนภาษาเพิ่มเติมอีกด้วย */}
          </p>
          <p className="py-2 text-slute-100 underline cursor-pointer">
            Check out some of my latest projects.
          </p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
