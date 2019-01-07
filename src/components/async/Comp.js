import React from "react";
import Loadable from "react-loadable";
import ReactLoading from "react-loading";
import styled from "styled-components";
import * as Colors from "./../common/colors";

const LoadingComponentContainer = styled.div`
  widht: auto;
  height: auto;
  margin: 5vw 0 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadingComponent = (
  <LoadingComponentContainer>
    <ReactLoading
      type="spinningBubbles"
      color={Colors.PrimaryColor}
      height={200}
      width={200}
    />
  </LoadingComponentContainer>
);

export const Home = Loadable({
  loader: () =>
    import("../home/Home" /* webpackChunkName: "Home" */).then(m => m.Home),
  loading: () => LoadingComponent
});

export const Library = Loadable({
  loader: () =>
    import("../libraries/Library" /* webpackChunkName: "Library" */).then(
      m => m.Library
    ),
  loading: () => LoadingComponent
});

export const RLFFooter = Loadable({
  loader: () =>
    import("../common/RLFFooter" /* webpackChunkName: "RLFFooter" */).then(
      m => m.RLFFooter
    ),
  loading: () => LoadingComponent
});
