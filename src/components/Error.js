import React from "react";
import styled from "styled-components";
import { COLORS } from "../css/colors";
import { devices } from "../css/devices";

export default function Error() {
  return (
    <Card>
      <GridContainer>
        <TextArea>
          Something went wrong...{" "}
          <Reload onClick={() => document.location.reload()}>Try again</Reload>
        </TextArea>
      </GridContainer>
    </Card>
  );
}

const Card = styled.div`
  margin: 0 2rem 4rem 2rem;
  background-color: #f38181;
  color: #fff;
  border-radius: 5px;
  box-shadow: 5px 15px 30px -15px ${COLORS.darkCyanOpacity};
  @media ${devices.tablet} {
    margin: 0 2rem 3rem 2rem;
  }
`;

const GridContainer = styled.div`
  padding: 2rem;
  display: grid;
  @media ${devices.tablet} {
    padding: 2rem 4rem;
  }
`;

const TextArea = styled.p`
  font-size: 1.3rem;
  @media ${devices.tablet} {
    font-size: 1.5rem;
  }
`;

const Reload = styled.button`
  justify-content: center;
  font-size: 1.3rem;
  font-weight: 700;
  border: none;
  border: none;
  background: none;
  text-decoration: none;
  font-family: inherit;
  color: #fff;
  padding: 0;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
    transition: all 0.3s;
  }

  @media ${devices.tablet} {
    font-size: 1.5rem;
  }
`;
