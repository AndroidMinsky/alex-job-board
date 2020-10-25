import React from "react";
import styled from "styled-components";
import { COLORS } from "../css/colors";
import { devices } from "../css/devices";
import { ReactComponent as RemoveIcon } from "../img/icon-remove.svg";

const Filter = styled.div`
  margin: -3.5rem 2rem 5.5rem 2rem;
  background-color: ${COLORS.white};
  border-radius: 5px;
  box-shadow: 5px 15px 30px -15px ${COLORS.darkCyanOpacity};

  @media ${devices.tablet} {
    margin: -3.5rem 2rem 4.5rem 2rem;
  }
`;

const GridContainer = styled.div`
  padding: 1rem 3rem 1rem 2rem;
  display: grid;
  grid-template-columns: auto min-content;
  align-items: center;
  column-gap: 1.5rem;

  @media ${devices.tablet} {
    padding: 2rem 3rem;
  }
`;

const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Remove = styled.div`
  background: ${COLORS.darkCyan};
  padding: 1rem;
  border-radius: 0 4px 4px 0;
`;

const Category = styled.div`
  &:not(:last-child) {
    margin-right: 0.5rem;
  }

  &:hover ${Remove} {
    background: #000;
    transition: all 0.3s ease-out;
  }

  display: flex;
  align-items: center;

  font-size: 1.5rem;
  padding: 1.7rem 0 1.7rem 1rem;
  margin: 1rem;
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
  }
`;

const Label = styled.div`
  font-size: 1.3rem;
  padding-right: 1rem;

  @media ${devices.tablet} {
    font-size: 1.5rem;
  }
`;

const Clear = styled.div`
  justify-self: end;
  color: ${COLORS.darkGrayishCyan};
  font-size: 1.3rem;
  font-weight: 700;

  &:hover {
    color: ${COLORS.darkCyan};
    text-decoration: underline;
    cursor: pointer;
    transition: all 0.3s;
  }

  @media ${devices.tablet} {
    font-size: 1.5rem;
    margin-right: 0.8rem;
  }
`;

export default function JobFilter() {
  return (
    <Filter>
      <GridContainer>
        <Categories>
          <Category>
            <Label>Frontend</Label>
            <Remove>
              <RemoveIcon />
            </Remove>
          </Category>
          <Category>
            <Label>CSS</Label>
            <Remove>
              <RemoveIcon />
            </Remove>
          </Category>
          <Category>
            <Label>JavaScript</Label>
            <Remove>
              <RemoveIcon />
            </Remove>
          </Category>
        </Categories>
        <Clear>Clear</Clear>
      </GridContainer>
    </Filter>
  );
}
