import React, { Component, Fragment } from "react";
import Slider from "react-slick";
import Loadable from "react-loadable";

import { StatBoxPanel } from "./../common/StatBoxPanel";
import * as Data from "./../common/data";

const cStyle = {
  width: "100%",
  height: "33rem"
};

class Carousel extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    var Images = Data.homecarouselImages.map(img => (
      <Fragment key={img}>
      <div>
        <img style={cStyle} src={img} alt="Rural Library Foundation" />
      </div>
      </Fragment>
    ));

    return (
      <div>
        <Slider {...settings}>{Images}</Slider>
      </div>
    );
  }
}

class HomeStats extends Component {
  render() {
    return <StatBoxPanel data={Data.homeStats} />;
  }
}

export const HomeMediaPanel = Loadable({
  loader: () => import("./HomeMediaPanel" /* webpackChunkName: "HomeMediaPanel" */).then(m => m.HomeMediaPanel),
  loading: () => <div>Loading..</div>
});

export const HomeStatsPanel = Loadable({
  loader: () => Promise.resolve(HomeStats),
  loading: () => <div>Loading..</div>
});

export const CarouselPanel = Loadable({
  loader: () => Promise.resolve(Carousel),
  loading: () => <div>Loading..</div>
});


export const HomeTimeLinePanel = Loadable({
  loader: () => import("./HomeTimeLine" /* webpackChunkName: "HomeTimeLine" */).then(m => m.HomeTimeLine),
  loading: () => <div>Loading..</div>
});

export const HomeTimeLinePanel1 = Loadable({
  loader: () => import("./HomeTimeLine2" /* webpackChunkName: "HomeTimeLine1" */).then(m => m.HomeTimeLine2),
  loading: () => <div>Loading..</div>
});