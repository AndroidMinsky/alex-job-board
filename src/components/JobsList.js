import React, { useState } from "react";
import styled from "styled-components";
import JobCard from "./JobCard";
import JobTags from "./JobTags";
import { useQuery } from "react-query";

const Wrapper = styled.div`
  max-width: 120rem;
  margin: auto;
`;

const fetchJobs = (key) => {
  return fetch("https://gentle-brook-20502.herokuapp.com/jobs").then((res) =>
    res.json()
  );
};

export default function JobsList() {
  const { isLoading, error, status, data } = useQuery("jobs", fetchJobs);

  return (
    <Wrapper>
      <JobTags />
      {isLoading && "Loading..."}
      {error && "Something went wrong..."}
      {status === "success" &&
        data.map((job) => <JobCard key={job.id} job={job} />)}
    </Wrapper>
  );
}
