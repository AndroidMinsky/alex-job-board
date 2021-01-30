import { useQuery } from "react-query";

const fetchJobs = (key, filters) => {
  const values = filters.map((value) => value).join(",");
  return fetch(
    `https://gentle-brook-20502.herokuapp.com/jobs?q=${values}`
  ).then((res) => res.json());
};

export const useFetchJobs = (filters) => {
  const { isLoading, error, status, data, isSuccess } = useQuery(
    ["jobs", filters],
    fetchJobs,
    { retry: 0 }
  );
  return { isLoading, error, status, data, isSuccess };
};
