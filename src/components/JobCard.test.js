import React from "react";
import { render, fireEvent } from "@testing-library/react";

import JobCard from "./JobCard";

const job = {
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
};

const jobFeatured = {
  id: 1,
  new: false,
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
};

test("should render needed information", () => {
  const { getByRole, getByText } = render(<JobCard job={job} />);
  expect(getByRole("img")).toBeVisible();
  expect(getByText("Photosnap")).toBeInTheDocument();
  expect(getByText(/1d ago/i)).toBeInTheDocument();
});

test("should show 'New' and 'Featured' flags", () => {
  const { getByText } = render(<JobCard job={job} />);
  expect(getByText("New!")).toBeInTheDocument();
  expect(getByText("Featured")).toBeInTheDocument();
});

test("should only show 'Featured' flag", () => {
  const { queryByText } = render(<JobCard job={jobFeatured} />);
  expect(queryByText("New!")).not.toBeInTheDocument();
  expect(queryByText("Featured")).toBeInTheDocument();
});

test("should fire 'addFilter' function on 'Language' tag click", () => {
  const addFilter = jest.fn();
  const { getByText } = render(<JobCard job={job} addFilter={addFilter} />);
  fireEvent.click(getByText("CSS"));
  expect(addFilter).toBeCalledWith("CSS");
});
