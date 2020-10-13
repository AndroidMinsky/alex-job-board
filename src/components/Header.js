import React from "react";
import styled from "styled-components";
import HeaderBackground from "../img/bg-header-desktop.svg";

const AppHeader = styled.header`
  padding: 4.8rem;
  background-image: url(${HeaderBackground});
  background-color: #5da5a4;
  background-position: center;
`;

export default function Header() {
  return <AppHeader />;
}
