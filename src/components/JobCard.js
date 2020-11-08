import React from "react";
import styled from "styled-components";
import { COLORS } from "../css/colors";
import { devices } from "../css/devices";
import Photosnap from "../img/photosnap.svg";

export default function JobCard({ job, updateFilters }) {
  return (
    <ul style={{ listStyleType: "none" }}>
      <Card featured={job.featured}>
        <GridContainer>
          <LogoSection>
            <Logo src={Photosnap} />
          </LogoSection>
          <MainInfo>
            <CompanyNameSection>
              <CompanyName>{job.company}</CompanyName>
              <Tags>
                {job.new && <Tag backgroundColor={COLORS.darkCyan}>New!</Tag>}
                {job.featured && (
                  <Tag backgroundColor={COLORS.veryDarkGrayishCyan}>
                    Featured
                  </Tag>
                )}
              </Tags>
            </CompanyNameSection>
            <Title>{job.position}</Title>
            <MiscInfo>
              {job.postedAt} <Dot /> {job.contract} <Dot /> {job.location}
            </MiscInfo>
            <Divider />
          </MainInfo>
          <Categories>
            <Category>{job.role}</Category>
            <Category>{job.level}</Category>
            {job.languages.map((language) => (
              <Category key={language} onClick={() => updateFilters(language)}>
                {language}
              </Category>
            ))}
            {job.tools.map((tool) => (
              <Category key={tool}>{tool}</Category>
            ))}
          </Categories>
        </GridContainer>
      </Card>
    </ul>
  );
}

const Card = styled.li`
  margin: 0 2rem 4rem 2rem;
  background-color: ${COLORS.white};
  border-radius: 5px;
  box-shadow: 5px 15px 30px -15px ${COLORS.darkCyanOpacity};
  border-left: ${(props) =>
    props.featured ? `5px solid ${COLORS.darkCyan}` : "5px solid #fff"};
  @media ${devices.tablet} {
    margin: 0 2rem 3rem 2rem;
  }
`;

const GridContainer = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr;

  @media ${devices.tablet} {
    grid-template-columns: min-content max-content auto;
    align-items: center;
    column-gap: 2.5rem;
    padding: 3rem;
  }
`;

const LogoSection = styled.div``;

const Logo = styled.img`
  margin: -4.5rem 0 1rem 0;
  width: 5rem;
  height: 5rem;

  @media ${devices.tablet} {
    margin: 0.8rem;
    width: 10rem;
    height: 10rem;
  }
`;

const MainInfo = styled.div``;

const CompanyNameSection = styled.div`
  display: flex;
  align-items: center;
`;

const CompanyName = styled.p`
  margin-right: 1.5rem;
  color: ${COLORS.darkCyan};
  font-size: 1.5rem;
  font-weight: 700;
`;

const Tags = styled.div`
  display: flex;
`;

const Tag = styled.div`
  margin-right: 0.8rem;
  padding: .7rem;
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${COLORS.white}};
  background-color: ${(props) => props.backgroundColor};
  border-radius: 2rem;
  height: 3rem;
  line-height: 2rem;
`;

const Title = styled.p`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 1.5rem 0 2rem 0;
  &:hover {
    color: ${COLORS.darkCyan};
    cursor: pointer;
    transition: all 0.3s;
  }
`;

const MiscInfo = styled.p`
  font-size: 1.5rem;
  color: ${COLORS.darkGrayishCyan};
`;

const Dot = styled.span`
  &:after {
    content: "•";
  }
  margin: 0 0.5rem;
  font-size: 1.5rem;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${COLORS.gray};
  margin-top: 1.8rem;

  @media ${devices.tablet} {
    display: none;
  }
`;

const Categories = styled.div`
  @media ${devices.tablet} {
    justify-self: end;
  }
`;

const Category = styled.div`
  &:not(:last-child) {
    margin-right: 1.5rem;
  }

  &:active {
    transform: scale(0.95);
  }

  &:hover {
    background: ${COLORS.darkCyan};
    color: ${COLORS.lightGrayishCyan};
  }

  display: inline-block;
  font-size: 1.3rem;
  padding: 1.7rem 1rem;
  margin-top: 1.5rem;
  border-radius: 4px;
  font-weight: 700;
  color: ${COLORS.darkCyan};
  background: ${COLORS.lightGrayishCyan};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  height: 1rem;
  line-height: 0.3rem;

  @media ${devices.tablet} {
    &:not(:last-child) {
      margin-right: 0.8rem;
    }

    margin: 0.8rem;
    font-size: 1.5rem;
  }
`;
