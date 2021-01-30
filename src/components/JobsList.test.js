import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import { rest } from "msw";
import { setupServer } from "msw/node";

import JobsList from "./JobsList";
import { useFetchJobs } from "./useFetchJobs";

const server = setupServer(
  rest.get("https://gentle-brook-20502.herokuapp.com/jobs", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: 1,
        new: true,
        logo: "./img/photosnap.svg",
        role: "Frontend",
        level: "Senior",
        tools: [],
        company: "Photosnap",
        contract: "Full Time",
        featured: true,
        location: "USA Only",
        position: "Senior Frontend Developer",
        postedAt: "1d ago",
        languages: ["HTML", "CSS", "JavaScript"],
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("should fetch jobs", async () => {
  const queryCache = new QueryCache();
  const wrapper = ({ children }) => (
    <ReactQueryCacheProvider queryCache={queryCache}>
      {children}
    </ReactQueryCacheProvider>
  );

  const { result, waitFor } = renderHook(() => useFetchJobs([]), { wrapper });

  await waitFor(() => {
    return result.current.isSuccess;
  });

  expect(result.current.data).toEqual({
    id: 1,
    new: true,
    logo: "./img/photosnap.svg",
    role: "Frontend",
    level: "Senior",
    tools: [],
    company: "Photosnap",
    contract: "Full Time",
    featured: true,
    location: "USA Only",
    position: "Senior Frontend Developer",
    postedAt: "1d ago",
    languages: ["HTML", "CSS", "JavaScript"],
  });
});

test("should show an error message", async () => {
  server.use(
    rest.get(
      "https://gentle-brook-20502.herokuapp.com/jobs",
      (req, res, ctx) => {
        return res(ctx.status(500));
      }
    )
  );

  const queryCache = new QueryCache();
  const wrapper = ({ children }) => (
    <ReactQueryCacheProvider queryCache={queryCache}>
      {children}
    </ReactQueryCacheProvider>
  );

  const { waitFor } = renderHook(() => useFetchJobs([]), { wrapper });
  const { getByText } = render(<JobsList />);

  await waitFor(() => {
    expect(getByText(/Something went wrong.../i)).toBeInTheDocument();
  });
});
