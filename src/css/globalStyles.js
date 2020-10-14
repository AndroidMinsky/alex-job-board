import { createGlobalStyle } from "styled-components";
import { COLORS } from "../css/colors";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Notable');

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${COLORS.lightGrayishCyan};
    font-family: 'Spartan', sans-serif;
    font-size: 62.5%;
  }
`;

export default GlobalStyles;
