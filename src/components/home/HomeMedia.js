import React, { Component } from "react";
import styled from "styled-components";
import MediaQuery from "react-responsive";

const MediaContainer = styled.div`
width:100%
height: 100%;
display: flex;
padding: 10px;
box-shadow: 1px;
margin: 10px;
`;

const MediaImageContainer = styled.div`
  width: 100%;
  height: 100px;
`;

const MediaBody = styled.div`
  width: auto;
  height: auto;
  padding: 10px;
`;

const imgStyle = {
  width: "30%",
  height: "100%",
  borderRadius: "5px",
  padding: "10px"
};

export class HomeMedia extends Component {
  render() {
    let ImageComp = <img src={"/images/carasoul1.jpg"} style={imgStyle} />;
    let LeftImageComp = this.props.type === "left" ? ImageComp : null;
    let RightImageComp = this.props.type === "right" ? ImageComp : null;

    return (
      <MediaQuery query="(min-device-width: 24px)">
        <MediaContainer>
          {LeftImageComp}
          <MediaBody>
            <h3>Thi is title of Media Element</h3>
            <p>
              Et amet dolor magna reprehenderit quis nisi. Tempor voluptate
              officia officia ad sit quis sint. Eiusmod incididunt laboris irure
              officia sit veniam ut. Officia elit consectetur cupidatat amet
              consectetur labore aute occaecat consectetur ipsum. Nisi qui
              veniam ex commodo magna id irure veniam dolore tempor. Do laboris
              aliquip consectetur et dolore mollit minim cupidatat. Magna qui
              deserunt ipsum in laborum cillum veniam ut excepteur officia
              proident.
            </p>
          </MediaBody>
          {RightImageComp}
        </MediaContainer>
      </MediaQuery>
    );
  }
}
