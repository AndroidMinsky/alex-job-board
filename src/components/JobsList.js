import React from "react";
import styled from "styled-components";
import JobCard from "./JobCard";

const Wrapper = styled.div`
  max-width: 120rem;
  margin: auto;
`;

export default function JobsList() {
  return (
    <Wrapper>
      <JobCard />
    </Wrapper>
  );
}
