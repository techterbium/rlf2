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
        <div>&copy; Rural Library Foundation, Hyderabad, India</div>
        <div>www.rlfindia.org</div>
        <div> Phone No: +91-999-999-9999</div>
      </FooterContainer>
    );
  }
}
