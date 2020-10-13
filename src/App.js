import React, { Fragment } from "react";
import Header from "./components/Header";
import JobsList from "./components/JobsList";
import GlobalStyles from "./css/globalStyles";

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Header />
      <JobsList />
    </Fragment>
  );
}

export default App;
