import React, { Component } from "react";
import Slider from "react-slick";

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
