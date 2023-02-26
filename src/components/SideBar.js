import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

export default function SideBar() {
  return (
    <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
      <ul>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
          <a
            className="flex justify-between items-center w-full text-[#fff] text-xl"
            href="https://www.linkedin.com/in/justin-signo/"
          >
            Linkedin <FaLinkedin size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
          <a
            className="flex justify-between items-center w-full text-[#fff] text-xl"
            href="https://github.com/jsigno"
          >
            GitHub <FaGithub size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#fcd34d]">
          <a
            className="flex justify-between items-center w-full text-[#fff] text-xl"
            href="/"
          >
            Email <HiOutlineMail size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
          <a
            className="flex justify-between items-center w-full text-[#fff] text-xl"
            href="https://www.dropbox.com/s/z7m1cezfxuof1py/Justin%20Signo%20Resume.pdf?dl=0"
          >
            Resume <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
}
