import React, { Component } from "react";
import { Carousel } from "./Carousel";
import { HomeMedia } from "./HomeMedia";
import styled from "styled-components";

const HomeContainer = styled.div`
  width: 100%;
`;

export class Home extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <HomeMedia type="left" />
        <HomeMedia type="right" />
        <HomeMedia type="left" />
        <HomeMedia type="right" />
      </div>
    );
  }
}
