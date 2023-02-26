import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

export default function About() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div name="about" className="w-full h-screen bg-[#064e3b] text-white">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-6xl font-bold inline border-b-4 border-red-600">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-1">
          <p
            className="sm:text-right text-4xl font-bold"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
          >
            Hello! I'm Justin, a developer based in New York City.
          </p>

          <p className="text-xl">
            This past year has been a rollercoaster of emotions which
            ultimately sparked my interest in development. At the beginning of
            the year, I accepted a new job in New York City and moved from Texas
            in March 2022. I was learning new skills, meeting new people, and
            generally excited about my future. In May, however, my dreams were
            quickly extinguished when I was laid off due to economic reasons.
            Never one to be discouraged, I used this time to explore new
            interests that I did not have time for previously, including
            software development. I was immediately drawn to this field because
            of how it combines
            <RoughNotationGroup show={true}>
              <RoughNotation type="underline" color="red">
                {" "}
                creativity,{" "}
              </RoughNotation>
              <RoughNotation type="circle" color="red">
                {" "}
                complexity{" "}
              </RoughNotation>
            </RoughNotationGroup>
            and
            <RoughNotationGroup show={true}>
              <RoughNotation type="highlight" color="red">
                {" "}
                curiosity{" "}
              </RoughNotation>
            </RoughNotationGroup>
            . After talking with multiple people who currently work in the
            field, I saw additional benefits: work-life balance, the opportunity
            to freelance, and the{" "}
            <RoughNotation type="box" color="red" show={true}>
              indefinite growth of the industry.
            </RoughNotation>
          </p>
        </div>
      </div>
    </div>
  );
}
