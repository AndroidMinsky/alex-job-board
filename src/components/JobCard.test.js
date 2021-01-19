import React from "react";
import { render } from "@testing-library/react";

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

test("should render correctly", () => {
  const { getByRole, getByText } = render(<JobCard job={job} />);
  getByRole("img");
  getByText("Photosnap");
});
