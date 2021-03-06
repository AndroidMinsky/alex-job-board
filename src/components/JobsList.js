import React from "react";
import styled from "styled-components";
import JobCard from "./JobCard";
import Tags from "./Tags";
import Spinner from "./Spinner";
import Error from "./Error";
import useFilters from "./useFilters";
import { useFetchJobs } from "./useFetchJobs";

export default function JobsList() {
  const { filters, setFilters, addFilter, removeFilter } = useFilters();
  const { isLoading, error, status, data } = useFetchJobs(filters);

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
