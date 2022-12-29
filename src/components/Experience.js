import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Experience() {
  return (
    <div name="experience" className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="August 2017 - May 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title font-bold">
            University of North Texas
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Denton, Texas</h4>
          <p>*enter something about UNT*</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="September 2022 - February 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title font-bold">
            Fullstack Acacdemy
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            New York City, New York
          </h4>
          <p>*enter something about Fullstack*</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="October 2020 - March 2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title font-bold">
            Tesla, Inc.
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Plano, Texas</h4>
          <p>*enter something about Tesla*</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="July 2017 - January 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title font-bold">
            Apple, Inc.
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Southlake, Texas
          </h4>
          <p>*enter something about Apple*</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="January 2022 - June 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title font-bold">
            Klarna, Inc.
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            New York City, New York
          </h4>
          <p>*enter something about Klarna*</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
