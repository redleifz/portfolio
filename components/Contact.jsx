import React, { useState } from "react";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Image from "next/image";
import ContactImg from "../public/assets/contact.jpeg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    await axios
      .post(`https://react-linenotify-backend.onrender.com/sendline`, {
        name: name,
        phoneNumber: phoneNumber,
        email: email,
        subject: subject,
        message: message,
      })
      .then(function (response) {
        setName("");
        setPhonenumber("");
        setEmail("");
        setSubject("");
        setMessage("");

        toast.success("Your Message have beed sent!"),
          {
            position: "bottom-center",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          };
      })
      .catch(function (error) {
        toast.error(error);
      });
  };

  const awake = async () => {
    const respone = await axios.get(
      `https://react-linenotify-backend.onrender.com/`
    );
    // console.log(respone);
  };

  return (
    <div id="contact" className="w-screen mt-6 lg:h-screen">
      <div className="max-w-[1240px] flex flex-col justify-center m-auto py-16 w-full">
        <p className="text-xl ml-5 tracking-widest uppercase text-[#FF8C32]">
          Contact
        </p>
        <h2 className="py-4 ml-5">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-lg shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full rounded-xl">
              <Image
                className="rounded-xl shadow-sm shadow-gray-400 hover:scale-105 ease-in duration-300"
                src={ContactImg}
                alt="/"
                // objectFit="fill"
              />
              <div>
                <h2 className="py-2 mt-2 text-[#FF8C32]">Jongjate</h2>
                <p>Software developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Contact with me</p>
                <div className="flex flex-col max-w-[330px] ml-5 mt-8">
                  <div className="flex">
                    <span className="mr-3 flex items-center">
                      <BsFillTelephoneFill />
                    </span>
                    <span>085-832-1114</span>
                  </div>
                  <div className="mt-3 flex items-center">
                    <span className="mr-3">
                      <AiTwotoneMail />
                    </span>
                    <span>Jongjate.ch@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-3 w-full h-auto shadow-lg shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form onSubmit={(e) => submitHandler(e)}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      value={name}
                      onFocus={() => awake()}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      className="border-2 rounded-lg p-3 flex text-black border-gray-300"
                      required
                      type="text"
                    ></input>
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      value={phoneNumber}
                      onChange={(e) => {
                        setPhonenumber(e.target.value);
                      }}
                      required
                      className="border-2 rounded-lg p-3 flex text-black border-gray-300"
                      type="text"
                    ></input>
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    required
                    className="border-2 rounded-lg p-3 flex text-black border-gray-300"
                    type="email"
                  ></input>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    required
                    value={subject}
                    onChange={(e) => {
                      setSubject(e.target.value);
                    }}
                    className="border-2 rounded-lg p-3 flex text-black border-gray-300"
                    type="text"
                  ></input>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    className="border-2 rounded-lg p-3 text-black border-gray-300 resize-none"
                    rows="6"
                    required
                  ></textarea>
                </div>
                <button
                  className="w-full border py-2 mt-3 rounded-md shadow-md shadow-gray-400
                  hover:bg-[#eee]
                  hover:text-black
                  duration-300"
                  type="submit"
                >
                  Send Message
                </button>
              </form>
              <ToastContainer
                position="bottom-center"
                autoClose={1000}
                theme="dark"
              />
            </div>
          </div>
        </div>
        {/* <div className="flex justify-center py-12">
          <Link href="">
            <div
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in  hover:bg-[#EEEEEE]/50
            hover:text-black duration-300"
            >
              <HiOutlineChevronDoubleUp className="text-[#EEE]" size={30} />
            </div>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
