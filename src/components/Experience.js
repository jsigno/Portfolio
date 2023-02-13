import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Experience() {
  return (
    <>
      <div name="experience" className="bg-[#064e3b]">
        <div className="lg:pl-80 sm:text-left pt-24 pb-12">
          <p className="text-6xl font-bold inline border-b-4 border-red-600 text-white">
            Experience
          </p>
        </div>
        <VerticalTimeline lineColor="#fff">
          <VerticalTimelineElement
            className="vertical-timeline-element--education text-white"
            date="August 2017 - May 2020"
            iconStyle={{ background: "red" }}
          >
            <div className="text-black">
              <h3 className="vertical-timeline-element-title font-bold">
                University of North Texas
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Denton, Texas
              </h4>
              <p>
                • Graduated Cum Laude with a BBA in Marketing with a
                Concertation in B2B Selling
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education text-white"
            date="September 2022 - February 2023"
            iconStyle={{ background: "red" }}
          >
            <div className="text-black">
              <h3 className="vertical-timeline-element-title font-bold">
                Fullstack Acacdemy
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                New York City, New York
              </h4>
              <p>
                • An intensive fullstack JavaScript development training program
                that provides hands-on learning experience through daily
                projects and pair-programming. We started by mastering computer
                science fundamentals and progress to frontend and backend web
                development, while building multiple large-scale projects
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education text-white"
            date="October 2020 - March 2021"
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
          >
            <div className="text-black">
              <h3 className="vertical-timeline-element-title font-bold">
                Tesla, Inc.
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Plano, Texas
              </h4>
              <p>
                • Provided the highest level of customer service throughout the
                full sales and delivery cycle & installation process, as well as
                continued support throughout ownership
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education text-white"
            date="July 2017 - January 2022"
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
          >
            <div className="text-black">
              <h3 className="vertical-timeline-element-title font-bold">
                Apple, Inc.
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Southlake, Texas
              </h4>
              <p>
                • Drove sales and improved customer experience while maintaining
                a 99.5% accuracy in the store inventory via SAP systems.
                <br />• Successfully grew the Apple brand, surpassing sales
                goals and resulting in 80+ small business connections and $1M in
                revenue while providing a great customer experience.
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education text-white"
            date="January 2022 - June 2022"
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
          >
            <div className="text-black">
              <h3 className="vertical-timeline-element-title font-bold">
                Klarna, Inc.
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                New York City, New York
              </h4>
              <p>
                • Created personalized outreaches, facilitated enterprise
                discussions, utilized networks to win over key merchants, and
                developed and implemented strategic projects to drive growth in
                the US and Canada resulting in over $3B in annual sales volume.
              </p>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
}

export default Experience;
