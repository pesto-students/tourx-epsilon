import { Checkbox, Switch } from "@material-ui/core";
import React from "react";
import { StyledDiv, Header, Hr, Span } from "./style";

const FilterCard: React.FC = () => {
  return (
    <StyledDiv>
      <Header>Filter</Header>
      <Hr />
      <Span>
        <Checkbox
          defaultChecked
          color="default"
          inputProps={{ "aria-label": "Sort By Alphabets" }}
        />
        Sort by Alphabets ( A to Z)
      </Span>
      <Span>
        <Checkbox
          defaultChecked={false}
          color="default"
          inputProps={{ "aria-label": "Top Rated" }}
        />
        Top Rated
      </Span>
      <Span>
        <Checkbox
          defaultChecked={false}
          color="default"
          inputProps={{ "aria-label": "Most Reviewed" }}
        />
        Most Reviewed
      </Span>
      <Span>
        <Checkbox
          defaultChecked={false}
          color="default"
          inputProps={{ "aria-label": "Trending" }}
        />
        Trending
      </Span>
      <Span>
        <Checkbox
          defaultChecked={false}
          color="default"
          inputProps={{ "aria-label": "Random" }}
        />
        Random
      </Span>
      <Hr />
      <Header>
        Descending Sort{" "}
        <Switch
          defaultChecked={false}
          color="default"
          inputProps={{ "aria-label": "Descending sort" }}
        />
      </Header>
    </StyledDiv>
  );
};

export default FilterCard;
