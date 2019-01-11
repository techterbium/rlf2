import React, { Component } from "react";
import Iframe from "react-iframe";

export class GMaps extends Component {
  render() {
    return (
      <div>
        <Iframe
          url="https://www.google.com/maps/d/embed?mid=1kQW8nxO7k9cgDxCqYlDv1efnqpASbd55"
          width="100%"
          height="400px"
          id="mmyId"
          display="initial"
          position="relative"
          allowFullScreen
        />
      </div>
    );
  }
}
