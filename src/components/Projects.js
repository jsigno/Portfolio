import React from "react";
import ChatGPT from "../assets/projects/chatgpt.png";
import Discoverify from "../assets/projects/discoverify.png"
import ChatApp from "../assets/projects/chatapp.png"
import GraceShopper from "../assets/projects/graceshopper.png"


export default function Projects() {
  return (
    <div name="projects" className="w-full md:h-screen bg-[#064e3b] text-white">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pd-8">
          <p className="text-6xl font-bold inline border-b-4 text-white border-red-600">
            Projects
          </p>
          <p className="py-6"> Recent Projects</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
          <div
            style={{ backgroundImage: `url(${ChatGPT})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold tracking-wider"></span>
              <div className="pt-8 text-center">
                <a href="https://chat-sig.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    DEMO
                  </button>
                </a>
                <a href="https://github.com/jsigno/ChatSIG">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    CODE
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Discoverify})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold tracking-wider"></span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    DEMO
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    CODE
                  </button>
                </a>
              </div>
            </div>
            
          </div>
          <div
            style={{ backgroundImage: `url(${ChatApp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold tracking-wider"></span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    DEMO
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    CODE
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${GraceShopper})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold tracking-wider"></span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    DEMO
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    CODE
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}
