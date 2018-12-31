import React, { Component } from "react";
import { Carousel, HomeMedia } from "./HomeComponents";

export class Home extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <HomeMedia type="left" data={{}} />
        <HomeMedia type="right" data={{}} />
        <HomeMedia type="left" data={{}} />
        <HomeMedia type="right" data={{}} />
      </div>
    );
  }
}
