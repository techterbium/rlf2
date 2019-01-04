import React, { Component } from "react";
import { CarouselPanel, HomeMediaPanel, HomeStatsPanel } from "./HomeComponents";

export class Home extends Component {
  render() {
    return (
      <div>
        <CarouselPanel />
        <HomeMediaPanel />
        <HomeStatsPanel />
      </div>
    );
  }
}