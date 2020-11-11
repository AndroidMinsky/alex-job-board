import styled from "styled-components";
import { COLORS } from "../css/colors";

const AppHeader = styled.header`
  padding: 7.8rem;
  background-image: url(${process.env.PUBLIC_URL +
  "/img/bg-header-desktop.svg"});
  background-color: ${COLORS.darkCyan};
  background-position: center;
`;

export default AppHeader;
