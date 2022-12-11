import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ title, backgroundImg, projectUrl,techStack }) => {
    return (
        <div className='relative flex items-center justify-center h-auto w-full shadow-md shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5f5f5f] to-[#131313]'>
        <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/' /> 
        <div className='hidden group-hover:block w-[40%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-2xl px-2 text-white tracking-wider text-center'>{title}</h3>
            <p className='pb-4 pt-2 text-white text-center'>{techStack}</p>
            
            <Link href={projectUrl}>
                <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
            </Link>
           
        </div>
     </div>
      )
};

export default ProjectItem;
