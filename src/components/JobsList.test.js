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
    return res(ctx.status(200), ctx.json({ greeting: "hello there" }));
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

  expect(result.current.data).toEqual({ greeting: "hello there" });
});
