import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdStar as TimeLineIcon } from "react-icons/md";
// import { TiStarburst as TimeLineIcon } from "react-icons/ti";

import { homeTimeLineData } from "./../common/data";
import * as Colors from "./../common/colors";

export class HomeTimeLine2 extends Component {
  render() {
    
    let timeLineKeys = Object.keys(homeTimeLineData);
    let Events = timeLineKeys.map(timeLinekey => (
      <VerticalTimelineElement
        style={{
          background: "#fff",
          width: "100%",
        }}
        iconStyle={{ background: `${Colors.PrimaryColor}`, color: "#fff" }}
        icon={<TimeLineIcon />}
        key={`timeline-key-${timeLinekey}`}
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
