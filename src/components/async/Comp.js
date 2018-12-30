import React from 'react';
import Loadable from "react-loadable";

export const Home = Loadable({
  loader: () => import("../home/Home" /* webpackChunkName: "Home" */).then(m => m.Home),
  loading: () => <div>Loading..</div>
});

export const Library = Loadable({
    loader: () => import("../libraries/Library" /* webpackChunkName: "Library" */).then(m => m.Library),
    loading: () => <div>Loading..</div>
  });


  export const RLFFooter = Loadable({
    loader: () => import("../common/RLFFooter" /* webpackChunkName: "RLFFooter" */).then(m => m.RLFFooter),
    loading: () => <div>Loading..</div>
  });