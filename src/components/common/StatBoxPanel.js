import React, { Component } from "react";
import styled from "styled-components";

const StatBoxesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  box-sizing: border-box;

  @media (max-width: 700px) {
    justify-content: center;
  }
`;

export const StatBoxContainer = styled.div`
  width: 20vw;
  height: 15vw;
  background-color: #afafaf;
  margin: 1vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 4vw;

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
    let Boxes = this.props.data.map(stat => <StatBox data={stat} />);
    return <StatBoxesContainer>{Boxes}</StatBoxesContainer>;
  }
}
