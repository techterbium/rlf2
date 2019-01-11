import React, { Component } from "react";
import { GMapsPanel, LibSearchPanel } from "./LibComponents";

export class Library extends Component {
  render() {
    return (
      <div>
        <GMapsPanel />
        <LibSearchPanel />
      </div>
    );
  }
}
