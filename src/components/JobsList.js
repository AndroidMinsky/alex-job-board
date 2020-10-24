import React from "react";
import styled from "styled-components";
import JobCard from "./JobCard";
import JobTags from "./JobTags";

const Wrapper = styled.div`
  max-width: 120rem;
  margin: auto;
`;

export default function JobsList() {
  return (
    <Wrapper>
      <JobTags />
      <JobCard />
    </Wrapper>
  );
}
