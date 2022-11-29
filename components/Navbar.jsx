import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill, BsWindowSidebar } from "react-icons/bs";
import { useRouter } from "next/router";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === "/property" ||
      router.asPath === "/crypto" ||
      router.asPath === "/netflix" ||
      router.asPath === "/twitch"
    ) {
      setNavBg("transparent");
      setLinkColor("#f8f8f8");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };



  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ background: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      {/* //web home */}
      <div className="flex justify-between bg-black items-center w-full h-full px-2 2xl:px-16 shadow-sm shadow-gray-400">
        <span className="text-4xl text-[#FF8C32] font-bold cursor-pointer ease-in duration-200 sm:ml-2 xs:ml-1 ">
          Jongjate
        </span>
        <div className="py-3">
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            {" "}
            <Link href="/">
              <li className="text-[#FF8C32] p-3 mx-2 text-sm uppercase hover:bg-orange-400 hover:text-black duration-200">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="text-[#FF8C32] p-3 mx-2  text-sm uppercase hover:bg-orange-400 hover:text-black duration-200">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="text-[#FF8C32] p-3  mx-2 text-sm uppercase hover:bg-orange-400 hover:text-black duration-200">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="text-[#FF8C32] p-3  mx-2  text-sm uppercase hover:bg-orange-400 hover:text-black duration-200">
                Projects
              </li>
            </Link>
            <Link href="/resume">
              <li className="text-[#FF8C32] p-3 text-sm mx-2  uppercase hover:bg-orange-400 hover:text-black duration-200">
                Resume
              </li>
            </Link>
            <Link href="/#contact">
              <li className="text-[#FF8C32] p-3 text-sm mx-2  uppercase hover:bg-orange-400 hover:text-black duration-200">
                contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden cursor-pointer">
            <span className="text-[#ff9545]">
              <AiOutlineMenu size={35} />
            </span>
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0  w-[80%] sm:w-[60%] h-screen md:w-[45%] bg-black p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="flex w-full items-center justify-between">
            <Link href="/">
              <span className="text-4xl text-[#ff9545] font-bold">
                Jongjate
              </span>
            </Link>

            <div
              onClick={handleNav}
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="border-b border-gray-300 my-4">
            <p className="w-[85%] md:w-[90%] py-4">
              Let&apos;s build something legendary together
            </p>
          </div>

          <div className="flex py-4 ml-4">
            <ul className="uppercase flex flex-col">
              <Link href="/">
                <li
                  onClick={() => setNav(false)}
                  className="text-sm text-[#ff9545]

                  "
                >
                  <p className="py-5 pl-3">Home</p>

                </li>
              </Link>
              <Link href="/#about">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm pl-2 text-[#ff9545]"
                >
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm pl-2 text-[#ff9545]"
                >
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm pl-2 pr-3 text-[#ff9545]"
                >
                  Projects
                </li>
              </Link>
              <Link href="/resume">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm pl-2 text-[#ff9545]"
                >
                  Resume
                </li>
              </Link>
              <Link href="/#contact">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm pl-2 text-[#ff9545]"
                >
                  Contact
                </li>
              </Link>
            </ul>
          </div>
          <div className="pt-20 xs:hidden">
            <p className="uppercase tracking-wide text-[#ff9545]">
              Let&apos;s Connect
            </p>
            <div className="flex items-center justify-between pt-4 my-4 w-full sm:w-[80%]">
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 hover:bg-[#EEEEEE]/50 hover:text-black ease-in duration-300">
                <FaLinkedinIn />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 hover:bg-[#EEEEEE]/50 hover:text-black ease-in duration-300">
                <FaGithub />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 hover:bg-[#EEEEEE]/50 hover:text-black ease-in duration-300">
                <AiOutlineMail />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 hover:bg-[#EEEEEE]/50 hover:text-black ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
