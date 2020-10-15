import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { COLORS } from "../css/colors";
import Photosnap from "../img/photosnap.svg";

const Card = styled.div`
  margin: 1.5rem;
  margin-top: 4rem;
  padding: 2rem;
  background-color: ${COLORS.white};
  border-radius: 5px;
  box-shadow: 5px 15px 30px -15px ${COLORS.darkCyanOpacity};
  border-left: 4px solid ${COLORS.darkCyan};
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: max-content auto;
  align-items: center;
  column-gap: 1.5rem;

  @media (max-width: 665px) {
    grid-template-columns: 1fr;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  margin-right: 1.5rem;
  width: 6rem;
  height: 100%;

  @media (max-width: 665px) {
    width: 3.5rem;
    height: 3.5rem;
    // margin-top: -13rem;
    position: absolute;
    top: 12rem;
    left: 3rem;
  }
`;

const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const CompanyNameSection = styled.div`
  display: flex;
  align-items: center;
`;

const CompanyName = styled.h2`
  margin: 0;
  margin-right: 0.8rem;
  color: ${COLORS.darkCyan};
`;

const Tags = styled.div`
  display: flex;
  align-items: center;
`;

const Tag = styled.h2`
  margin: 0;
  margin-right: 0.5rem;
  font-size: 0.7rem;
  padding: 0.4rem;
  color: ${COLORS.white}};
  background-color: ${(props) => props.theme.main};
  border-radius: 1rem;
`;

Tag.defaultProps = {
  theme: {
    main: COLORS.darkCyan,
  },
};

const theme = {
  main: COLORS.veryDarkGrayishCyan,
};

const Title = styled.h1`
  &:hover {
    color: ${COLORS.darkCyan};
    cursor: pointer;
    transition: all 0.3s;
  }
`;

const MiscInfo = styled.p`
  margin: 0;
  font-size: 1rem;
  color: ${COLORS.darkGrayishCyan};
`;

const Dot = styled.span`
  &:after {
    content: "•";
  }
  margin: 0 0.5rem;
`;

const Categories = styled.div`
  justify-self: end;
`;

const Category = styled.button`
  &:not(:last-child) {
    margin-right: 0.8rem;
  }

  &:active {
    transform: scale(0.95);
  }

  &:hover {
    background: ${COLORS.darkCyan};
    color: ${COLORS.lightGrayishCyan};
  }

  border: none;
  outline: none;
  text-decoration: none;
  display: inline-block;
  font-size: 0.9rem;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border-radius: 5px;
  font-weight: 700;
  color: ${COLORS.darkCyan};
  background: ${COLORS.lightGrayishCyan};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`;

export default function JobCard() {
  return (
    <Card>
      <GridContainer>
        <Info>
          <Logo src={Photosnap} />
          <MainInfo>
            <CompanyNameSection>
              <CompanyName>Photosnap </CompanyName>
              <Tags>
                <Tag>NEW!</Tag>
                <ThemeProvider theme={theme}>
                  <Tag>FEATURED</Tag>
                </ThemeProvider>
              </Tags>
            </CompanyNameSection>
            <Title>Senior Frontend Developer</Title>
            <MiscInfo>
              1d ago <Dot /> Full Time <Dot /> USA only
            </MiscInfo>
          </MainInfo>
        </Info>
        <Categories>
          <Category>Frontend</Category>
          <Category>Senior</Category>
          <Category>HTML</Category>
          <Category>CSS</Category>
          <Category>JavaScript</Category>
        </Categories>
      </GridContainer>
    </Card>
  );
}
