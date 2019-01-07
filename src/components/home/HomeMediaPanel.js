import React, { Component } from "react";
import * as Styles from "./Styles";
import * as Data from "./../common/data";

export class HomeMedia extends Component {
  render() {
    let { data } = this.props;
    let ImageComp = data.imageUrl ? (
      <img src={data.imageUrl} style={Styles.imgStyle} alt="avd"/>
    ) : null;
    let LeftImageComp = data.type === "left" ? ImageComp : null;
    let RightImageComp = data.type === "right" ? ImageComp : null;

    return (
        <Styles.MediaContainer>
          <Styles.MediaImageContainer>
            {LeftImageComp}
          </Styles.MediaImageContainer>
          <Styles.MediaBody>
            <Styles.TitleContainer side={data.type}>
              <span>{data.title}</span>
            </Styles.TitleContainer>
            <p>{data.content}</p>
          </Styles.MediaBody>
          <Styles.MediaImageContainer>
            {RightImageComp}
          </Styles.MediaImageContainer>
        </Styles.MediaContainer>
    );
  }
}

export class HomeMediaPanel extends Component {
  render() {
    let MediaComponents = Data.homeMediaData.map(media => (
      <HomeMedia data={media} key={media.title} />
    ));
    return MediaComponents;
  }
}