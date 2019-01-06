import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdStar } from "react-icons/md";

import { homeTimeLineData } from "./../common/data";

export class HomeTimeLine2 extends Component {
  render() {
    let timeLineKeys = Object.keys(homeTimeLineData);

    let Events = timeLineKeys.map(timeLinekey => (
      <VerticalTimelineElement
        style={{
          background: "#fafaff",
          width: "100%",
        }}
        iconStyle={{ background: "#ab2708", color: "#fff" }}
        icon={<MdStar />}
      >
        <h3>{timeLinekey}</h3>
        <p>{homeTimeLineData[`${timeLinekey}`].content}</p>
      </VerticalTimelineElement>
    ));

    return (
      <div>
        <VerticalTimeline>{Events}</VerticalTimeline>
      </div>
    );
  }
}
