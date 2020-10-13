import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 30px;
  padding: 15px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 5px 15px 30px -15px rgba(91, 164, 164, 0.5);
  border-left: 4px solid #5aa6a2;
`;

export default function JobCard() {
  return (
    <Wrapper>
      <p>Senior Frontend Developer</p>
    </Wrapper>
  );
}
