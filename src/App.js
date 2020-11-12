import React, { Fragment } from "react";
import Header from "./components/Header";
import JobsList from "./components/JobsList";
import GlobalStyles from "./css/globalStyles";
import { ReactQueryDevtools } from "react-query-devtools";

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Header />
      <JobsList />
      {process.env.NODE_ENV === "development" && (
        <ReactQueryDevtools panelProps={{ style: { fontSize: "10rem" } }} />
      )}
    </Fragment>
  );
}

export default App;
