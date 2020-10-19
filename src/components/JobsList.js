import React from "react";
import styled from "styled-components";
import JobCard from "./JobCard";
import JobFilter from "./JobFilter";

const Wrapper = styled.div`
  max-width: 120rem;
  margin: auto;
`;

export default function JobsList() {
  return (
    <Wrapper>
      <JobFilter />
      <JobCard />
    </Wrapper>
  );
}
