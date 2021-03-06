import React, { useRef } from "react";
import { useClickAway } from "react-use";
import styled from "styled-components";
import { COLORS } from "../css/colors";
import { devices } from "../css/devices";

export default function Tags({ filters, addFilter, setFilters, removeFilter }) {
  const inputRef = useRef();

  useClickAway(inputRef, () => {
    addFilter(inputRef.current.value);
    inputRef.current.value = "";
  });

  const addTag = (e) => {
    if (e.key === "Enter") {
      addFilter(e.target.value);
      e.target.value = "";
    }
  };

  const clearTags = () => {
    setFilters([]);
  };

  return (
    <>
      <Filter>
        <GridContainer>
          <MainSection>
            {filters.map((tag) => (
              <Category key={tag}>
                {tag}
                <Remove onClick={() => removeFilter(tag)}>
                  <img
                    src={process.env.PUBLIC_URL + "/img/icon-remove.svg"}
                    alt="Remove"
                  ></img>
                </Remove>
              </Category>
            ))}
            <Input
              type="text"
              size="4"
              ref={inputRef}
              onKeyUp={addTag}
              placeholder="Enter tags here"
            ></Input>
          </MainSection>
          <Clear onClick={clearTags}>Clear</Clear>
        </GridContainer>
      </Filter>
    </>
  );
}

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
  padding: 1rem;
  display: grid;
  grid-template-columns: auto min-content;
  align-items: center;
  column-gap: 1rem;

  @media ${devices.tablet} {
    padding: 1.5rem 3rem;
    column-gap: 3rem;
  }
`;

const MainSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  width: 100%;
  font-size: 1.6rem;
`;

const Remove = styled.div`
  background: ${COLORS.darkCyan};
  padding: 1rem;
  border-radius: 0 4px 4px 0;
  margin-left: 1rem;
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

  font-size: 1.3rem;
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
    font-size: 1.5rem;
  }
`;

const Input = styled.input`
  font-size: 1.3rem;
  font-family: inherit;
  height: 100%;
  border: 1px solid ${COLORS.gray};
  border-radius: 4px;
  min-width: 19rem;
  align-self: center;
  padding: 0.8rem;
  margin: 0.8rem;
  flex-grow: 1;

  &::placeholder {
    transform: translate3d(0, 2px, 0);
  }

  @media ${devices.tablet} {
    font-size: 1.5rem;
  }

  &:focus {
    outline: none;

    &::placeholder {
      color: #ccc;
    }
  }
`;

const Clear = styled.div`
  justify-self: end;
  color: ${COLORS.darkGrayishCyan};
  font-size: 1.3rem;
  font-weight: 700;
  margin-right: 1rem;

  &:hover {
    color: ${COLORS.darkCyan};
    text-decoration: underline;
    cursor: pointer;
    transition: all 0.3s;
  }

  @media ${devices.tablet} {
    font-size: 1.5rem;
    margin-right: 1.8rem;
  }
`;
