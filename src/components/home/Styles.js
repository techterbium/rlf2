import styled from "styled-components";

export const MediaContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  border: 0.5px solid #fafafa;
  box-shadow: 0 1px 2px rgb(0, 0, 0, 0.15);
  border-radius: 10px;
`;

export const TitleContainer = styled.span`
text-align: ${props => props.side};
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
background-color: #afafaf;
`;