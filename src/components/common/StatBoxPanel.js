import React, { Component, Fragment } from "react";
import styled from "styled-components";
import * as Colors from "./../common/colors";

const StatBoxHeader = styled.div`
font-size: 3em;
color: ${Colors.PrimaryColor};
`;

const StatBoxesContainer = styled.div`
  width: auto;
  display: flex;
  flex-wrap: wrap;
  margin: 2vw 2vw 0 2vw;
  justify-content: space-between;
  box-sizing: border-box;

  @media (max-width: 700px) {
    justify-content: center;
  }
`;

export const StatBoxContainer = styled.div`
  width: 20vw;
  height: 15vw;
  background-color: ${Colors.PrimaryColor};
  margin: 1vw;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 3vw;

  @media (max-width: 700px) {
    width: 80vw;
    height: 80vw;
    margin: 5vw 10vw 5vw 10vw;
    font-size: 15vw;
  }
`;

export const StatBox = ({ data }) => {
  return (
    <StatBoxContainer>
      <div>{data.count}</div>
      <div>{data.title}</div>
    </StatBoxContainer>
  );
};

export class StatBoxPanel extends Component {
  render() {
    let Boxes = this.props.data.map(stat => (
      <StatBox data={stat} key={stat.title} />
    ));
    return (
      <Fragment>
        {/* <StatBoxHeader>Highlights of RLF..</StatBoxHeader> */}
      <StatBoxesContainer>
        {Boxes}
      </StatBoxesContainer>
      </Fragment>
    );
  }
}
