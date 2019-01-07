import styled from "styled-components";
import * as Colors from "./../common/colors";

export const MediaContainer = styled.div`
  width: auto;
  height: 250px;
  display: flex;
  flex-wrap: wrap;
  margin: 2vw 1vw 0px 1vw;
  border: 0.5px solid ${Colors.SecondaryColor};
  box-shadow: 0 1px 2px rgb(0, 0, 0, 0.15);
  border-radius: 10px;
  @media (max-width: 700px) {
    height: auto;
    margin: 12vw 1vw 0px 1vw;
  }
`;

export const TitleContainer = styled.span`
text-align: ${props => props.side};
font-size: 3em;
color: ${Colors.PrimaryColor};
background-color: #fff;
`;

export const MediaImageContainer = styled.div`
  max-width: 30%;
  width: auto;
  max-height: 100px;
  height: auto;
`;

export const MediaBody = styled.div`
  width: auto;
  height: auto;
  margin: 10px;
`;

export const imgStyle = {
  width: "100%",
  height: "auto",
  borderRadius: "25px"
};



export const StatsContainer = styled.div`
width: 100%;
height: 350px;
border-size: 1px;
background-color: ${Colors.PrimaryColor};
`;