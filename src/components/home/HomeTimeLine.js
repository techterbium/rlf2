import React, { Component, Fragment } from "react";
import HorizontalTimeline from "react-horizontal-timeline";
import { homeTimeLineData } from "./../common/data";
import * as Colors from "./../common/colors";
export class HomeTimeLine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    };
  }

  render() {
    let timeLineKeys = Object.keys(homeTimeLineData);

    return (
      <Fragment>
        <div style={{ width: "100%", height: "100px", margin: "0 auto" }}>
          <HorizontalTimeline
            values={timeLineKeys}
            index={this.state.selectedIndex}
            indexClick={index => {
              this.setState({ selectedIndex: index });
            }}
            getLabel={date => date.toString()}
            isTouchEnabled={true}
            isOpenBeginning={false}
            isOpenEnding={false}
            labelWidth={25}
            style={{
              background: "#fafafa",
              foreground: `${Colors.PrimaryColor}`,
              outline: "#adadad"
            }}
          />
        </div>
        <div style={{ textAlign: "center", padding: "50px" }}>
          {
            homeTimeLineData[timeLineKeys[`${this.state.selectedIndex}`]]
              .content
          }
        </div>
      </Fragment>
    );
  }
}
