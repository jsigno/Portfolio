import React, { useEffect } from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Sequelize from "../assets/sequelize.png";
import Firebase from "../assets/firebase.png";
import Vite from "../assets/vite.png";


import AOS from "aos";
import "aos/dist/aos.css";

export default function Skills() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div name="skills" className="w-full h-screen bg-[#064e3b] text-white pt-32 overflow-auto">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-6xl font-bold inline border-b-4 border-red-600 ">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8">
          <div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-4">CSS</p>
          </div>
          <div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            data-aos="fade-right"
            data-aos-delay="600"
          >
            <img className="w-20 mx-auto" src={JavaScript} alt="JS icon" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            data-aos="fade-right"
            data-aos-delay="800"
          >
            <img className="w-20 mx-auto" src={ReactImg} alt="REACT icon" />
            <p className="my-4">REACT</p>
          </div>
          <div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <img className="w-20 mx-auto" src={GitHub} alt="GIT icon" />
            <p className="my-4">GITHUB</p>
          </div>
          <div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <img className="w-20 mx-auto" src={Node} alt="NODE icon" />
            <p className="my-4">NODE JS</p>
          </div>
          <div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            data-aos="fade-right"
            data-aos-delay="600"
          >
            <img className="w-20 mx-auto" src={Tailwind} alt="TAILWIND icon" />
            <p className="my-4">TAILWIND</p>
          </div>
          <div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            data-aos="fade-right"
            data-aos-delay="800"
          >
            <img className="w-20 mx-auto" src={Sequelize} alt="SEQ icon" />
            <p className="my-4">SEQUELIZE</p>
          </div>
          <div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <img className="w-20 mx-auto" src={Firebase} alt="FIREBASE icon" />
            <p className="my-4">FIREBASE</p>
          </div>
          <div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <img className="w-20 mx-auto" src={Vite} alt="VITE icon" />
            <p className="my-4">VITE</p>
          </div>
        </div>
      </div>
    </div>
  );
}
