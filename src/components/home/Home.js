import React, { Component } from "react";
import { Carousel, HomeMedia, HomeStats } from "./HomeComponents";

export class Home extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <HomeMedia type="left" data={{}} />
        <HomeMedia type="right" data={{}} />
        <HomeMedia type="left" data={{}} />
        <HomeMedia type="right" data={{}} />
        <HomeStats />
      </div>
    );
  }
}
