import React, { Component, Fragment } from "react";
import Loadable from "react-loadable";

import * as Data from "../common/data";
import { LoadingComponent } from "../async/Comp";


export const GMapsPanel = Loadable({
    loader: () =>
      import("./GMaps" /* webpackChunkName: "GoogleMaps" */).then(
        m => m.GMaps
      ),
    loading: () => LoadingComponent
  });

  export const LibSearchPanel = Loadable({
    loader: () =>
      import("./LibrarySearch" /* webpackChunkName: "LibrarySearch" */).then(
        m => m.LibrarySearch
      ),
    loading: () => LoadingComponent
  });