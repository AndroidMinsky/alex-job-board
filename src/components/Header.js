import React from "react";
import styled from "styled-components";
import HeaderBackground from "../img/bg-header-desktop.svg";
import { COLORS } from "../css/colors";

const AppHeader = styled.header`
  padding: 4.8rem;
  background-image: url(${HeaderBackground});
  background-color: ${COLORS.darkCyan};
  background-position: center;
`;

export default AppHeader;
