import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div name="home" className="w-full h-screen bg-[#064e3b]">
      <div className="max-w-[1000px]  mx-auto px-8 flex flex-col justify-center h-full">
        <p
          className="text-red-600 text-3xl"
          data-aos="fade-down-left"
          data-aos-delay="1000"
        >
          Hello, my name is
        </p>
        <h1
          className="text-7xl sm:text-9xl font-bold text-white"
          data-aos="flip-down"
          data-aos-delay="500"
        >
          Justin Signo
        </h1>
      </div>
    </div>
  );
}
