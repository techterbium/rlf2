import React, { Component } from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100%;
  text-align: center;
  height: auto;
  background-color: #ab2708;
  color: #fff;
`;

export class RLFFooter extends Component {
  render() {
    return (
      <FooterContainer>
        <div>Rural Library Foundation, Hyderabad, India</div>
        <div> Phone No: +91-949-238-3100</div>
        <div>www.rlfindia.org, &copy; All rights reserved. </div>
      </FooterContainer>
    );
  }
}
