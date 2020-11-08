import React, { useState } from "react";
import styled from "styled-components";
import JobCard from "./JobCard";
import Tags from "./Tags";
import Spinner from "./Spinner";
import Error from "./Error";
import { useQuery } from "react-query";
import useFilters from "./useFilters";

const fetchJobs = (key, filters) => {
  const values = filters.map((value) => value).join(",");
  return fetch(
    `https://gentle-brook-20502.herokuapp.com/jobs?q=${values}`
  ).then((res) => res.json());
};

export default function JobsList() {
  const { filters, setFilters, addFilter, removeFilter } = useFilters();

  const { isLoading, error, status, data } = useQuery(
    ["jobs", filters],
    fetchJobs
  );

  return (
    <Wrapper>
      <Tags
        filters={filters}
        addFilter={addFilter}
        setFilters={setFilters}
        removeFilter={removeFilter}
      />
      {isLoading && !error && <Spinner />}
      {error && <Error />}
      {status === "success" &&
        data.map((job) => (
          <JobCard key={job.id} job={job} addFilter={addFilter} />
        ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 120rem;
  margin: auto;
`;
