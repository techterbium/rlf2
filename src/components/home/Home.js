import React, { Component } from "react";
import { CarouselPanel, HomeMediaPanel, HomeStatsPanel, HomeTimeLinePanel1 } from "./HomeComponents";

export class Home extends Component {
  render() {
    return (
      <div>
        <CarouselPanel />
        <HomeMediaPanel />
        <HomeStatsPanel />
        <HomeTimeLinePanel1 />
      </div>
    );
  }
}