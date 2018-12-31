import React, { Component } from "react";
import styled from "styled-components";
import MediaQuery from "react-responsive";

const MediaContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  border: 0.5px solid #fafafa;
  box-shadow: 0 1px 2px rgb(0, 0, 0, 0.15);
  border-radius: 10px;
`;

const TitleContainer = styled.span`
text-align: ${props => props.side};
`;

const MediaImageContainer = styled.div`
  max-width: 30%;
  width: auto;
  max-height: 100px;
  height: auto;
`;

const MediaBody = styled.div`
  width: auto;
  height: auto;
  margin: 10px;
`;

const imgStyle = {
  width: "100%",
  height: "auto",
  borderRadius: "25px"
};

export class HomeMedia extends Component {
  render() {
    let { data } = this.props;
    let ImageComp = data.imageUrl ? <img src={data.imageUrl} style={imgStyle} /> : null;
    let LeftImageComp = this.props.type === "left" ? ImageComp : null;
    let RightImageComp = this.props.type === "right" ? ImageComp : null;

    return (
      <MediaQuery query="(min-device-width: 24px)">
        <MediaContainer>
          <MediaImageContainer>{LeftImageComp}</MediaImageContainer>
          <MediaBody>
            <TitleContainer side={this.props.type}> <h3>Media Title</h3> </TitleContainer>
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
          <MediaImageContainer>{RightImageComp}</MediaImageContainer>
        </MediaContainer>
      </MediaQuery>
    );
  }
}
