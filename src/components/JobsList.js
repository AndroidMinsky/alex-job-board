import React from "react";
import styled from "styled-components";
import JobCard from "./JobCard";
import JobFilter from "./JobFilter";
import JobTags from "./JobTags";

const Wrapper = styled.div`
  max-width: 120rem;
  margin: auto;
`;

export default function JobsList() {
  return (
    <Wrapper>
      {/* <JobFilter /> */}
      <JobTags />
      <JobCard />
    </Wrapper>
  );
}
