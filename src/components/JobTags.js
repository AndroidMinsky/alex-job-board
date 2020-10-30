import React, { useRef } from "react";
import Tags from "@yaireo/tagify/dist/react.tagify";
import "@yaireo/tagify/dist/tagify.css";
import styled from "styled-components";
import { COLORS } from "../css/colors";
import { devices } from "../css/devices";
import RemoveIcon from "../img/icon-remove.svg";

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
  padding: 2rem;
  display: grid;
  grid-template-columns: auto min-content;
  align-items: center;
  column-gap: 2rem;

  @media ${devices.tablet} {
    padding: 1.5rem 3.8rem;
    column-gap: 3rem;
  }
`;

const StyledTags = styled(Tags)`
  --tag-bg: #fff;
  --tag-hover: #fff;
  --tags-border-color: #fff;
  --tag-invalid-bg: #fff;
  --tag-remove-bg: #fff;
  border: 0;

  .tagify__tag {
    margin: 0 1.5rem 1.5rem 0;
    align-self: center;

    @media ${devices.tablet} {
      margin: 0.5rem 1.6rem 0.5rem 0;
    }

    &:hover {
      div:before {
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }
      .tagify__tag__removeBtn {
        background: #000;
      }
    }

    &-text {
      font-weight: 700;
      color: ${COLORS.darkCyan};
      font-size: 1.3rem;

      @media ${devices.tablet} {
        font-size: 1.5rem;
      }
    }

    &__removeBtn {
      background: ${COLORS.darkCyan};
      padding: 1.85rem 1.8rem;
      margin: 0;
      border-radius: 0 4px 4px 0;

      &:after {
        content: url(${RemoveIcon});
      }
    }

    div {
      padding: 1.1rem 1rem;
      margin: 0;
      background: ${COLORS.lightGrayishCyan};
      border-radius: 4px 0 0 4px;
      border: 0;
    }
  }

  .tagify__input {
    font-size: 1.3rem;
    height: 100%;
    line-height: 3rem;
    border: 1px solid ${COLORS.gray};
    border-radius: 4px;
    min-width: 23.5rem;
    margin: 0;

    @media ${devices.tablet} {
      font-size: 1.5rem;
      margin: 1rem 0;
    }

    &:before {
      line-height: 3rem;
      height: 100%;
    }
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
  }
`;

const baseTagifySettings = {
  blacklist: ["xxx", "yyy", "zzz"],
  maxTags: 6,
  editTags: 0,
  placeholder: "Type something here",
  dropdown: {
    enabled: 0,
  },
};

export default function JobTags({ filters, updateFilters }) {
  const tagifyRef = useRef();

  const settings = {
    ...baseTagifySettings,
  };

  function clearAll() {
    // tagifyRef.current && tagifyRef.current.removeAllTags();
    updateFilters([]);
  }

  return (
    <Filter>
      <GridContainer>
        <StyledTags
          tagifyRef={tagifyRef}
          settings={settings}
          value={filters}
          onChange={(e) => (
            e.persist(), console.log("CHANGED:", e.target.value)
          )}
        />
        <Clear onClick={clearAll}>Clear</Clear>
      </GridContainer>
    </Filter>
  );
}
