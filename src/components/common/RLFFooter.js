import React, { Component } from "react";
import styled from "styled-components";
import * as Colors from "./../common/colors";

const FooterContainer = styled.div`
  width: auto;
  height: auto;
  background-color: ${Colors.PrimaryColor};
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const FooterContentContainer = styled.div`
  width: auto;
  text-align: center;
  height: auto;
  color: #fff;
  font-size: 1rem;
  margin-right: auto;
`;

const FooterImageContainer = styled.img`
  margin-left: auto;
  margin-right: 30px;
`;

export class RLFFooter extends Component {
  render() {
    return (
      <FooterContainer>
        <FooterImageContainer src="./images/rlf_logo.png" alt="RLF Logo" />
        <FooterContentContainer>
          <div>&copy; Rural Library Foundation, Hyderabad, India. </div>
          <div> All rights reserved.</div>
          <div> www.rlfindia.org </div>
          <div> (+91) 949-238-3100 </div>
        </FooterContentContainer>
      </FooterContainer>
    );
  }
}
