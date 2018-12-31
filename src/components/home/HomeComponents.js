import React, { Component } from "react";
import Slider from "react-slick";
import MediaQuery from "react-responsive";
import * as HomeStyles from "./Styles"

export class Carousel extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img
              style={{ width: "100%", height: "400px" }}
              src={"images/carasoul1.jpg"}
              alt="Rural Library Foundation"
            />
          </div>
          <div>
            <img
              style={{ width: "100%", height: "400px" }}
              src={"images/carasoul2.jpg"}
              alt="Rural Library Foundation"
            />
          </div>
          <div>
            <img
              style={{ width: "100%", height: "400px" }}
              src={"images/carasoul3.jpg"}
              alt="Rural Library Foundation"
            />
          </div>
          <div>
            <img
              style={{ width: "100%", height: "400px" }}
              src={"images/carasoul4.jpg"}
              alt="Rural Library Foundation"
            />
          </div>
          <div>
            <img
              style={{ width: "100%", height: "400px" }}
              src={"images/carasoul5.jpg"}
              alt="Rural Library Foundation"
            />
          </div>
        </Slider>
      </div>
    );
  }
}

export class HomeMedia extends Component {
  render() {
    let { data } = this.props;
    let ImageComp = data.imageUrl ? <img src={data.imageUrl} style={HomeStyles.imgStyle} /> : null;
    let LeftImageComp = this.props.type === "left" ? ImageComp : null;
    let RightImageComp = this.props.type === "right" ? ImageComp : null;

    return (
      <MediaQuery query="(min-device-width: 24px)">
        <HomeStyles.MediaContainer>
          <HomeStyles.MediaImageContainer>{LeftImageComp}</HomeStyles.MediaImageContainer>
          <HomeStyles.MediaBody>
            <HomeStyles.TitleContainer side={this.props.type}> <h3>Media Title</h3> </HomeStyles.TitleContainer>
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
          </HomeStyles.MediaBody>
          <HomeStyles.MediaImageContainer>{RightImageComp}</HomeStyles.MediaImageContainer>
        </HomeStyles.MediaContainer>
      </MediaQuery>
    );
  }
}