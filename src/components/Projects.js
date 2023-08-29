import React from "react";
import Terrazzo from "../assets/projects/terrazzo.png";
import Chat from "../assets/projects/chatapp.png"
import Wireframes from "../assets/projects/wireframes.png"
import YAB from "../assets/projects/YAB.png"


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
            style={{ backgroundImage: `url(${Terrazzo})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold tracking-wider"></span>
              <div className="pt-8 text-center">
                <a href="https://terrazzotea.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    DEMO
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Chat})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold tracking-wider"></span>
              <div className="pt-8 text-center">
                <a href="https://discver-it.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    DEMO
                  </button>
                </a>
                <a href="https://github.com/jsigno/ChatApp">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    CODE
                  </button>
                </a>
              </div>
            </div>
            
          </div>
          <div
            style={{ backgroundImage: `url(${Wireframes})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold tracking-wider"></span>
              <div className="pt-8 text-center">
              <a href="https://drive.google.com/file/d/1Yq93Joj3cC-b_Wwcx8ggvlmYzP_l65TD/view">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    DEMO
                  </button>
                </a>
                {/* <a href="https://github.com/jsigno/pretty">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    CODE
                  </button>
                </a> */}
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${YAB})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold tracking-wider"></span>
              <div className="pt-8 text-center">
                <a href="https://you-are-beautiful.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    DEMO
                  </button>
                </a>
                <a href="https://github.com/jsigno/pretty">
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
