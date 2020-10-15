import React from "react";
import styled from "styled-components";
import { COLORS } from "../css/colors";

const Wrapper = styled.div`
  margin: 3rem;
  padding: 1.5rem;
  background-color: ${COLORS.white};
  border-radius: 5px;
  box-shadow: 5px 15px 30px -15px ${COLORS.darkCyanOpacity};
  border-left: 4px solid ${COLORS.darkCyan};
`;

export default function JobCard() {
  return (
    <Wrapper>
      <p>Senior Frontend Developer</p>
    </Wrapper>
  );
}
