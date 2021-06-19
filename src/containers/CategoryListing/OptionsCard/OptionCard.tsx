import { Checkbox } from "@material-ui/core";
import React from "react";
import { StyledDiv, Header, Hr, Span } from "./style";

const OptionCard: React.FC = () => {
  return (
    <StyledDiv>
      <Header>Options</Header>
      <Hr />
      <Span>
        <Checkbox
          defaultChecked
          color="default"
          inputProps={{ "aria-label": "Sort By Alphabets" }}
        />
        Luxury Deals
      </Span>
      <Span>
        <Checkbox
          defaultChecked={false}
          color="default"
          inputProps={{ "aria-label": "Top Rated" }}
        />
        Budget Options
      </Span>
      <Span>
        <Checkbox
          defaultChecked={false}
          color="default"
          inputProps={{ "aria-label": "Most Reviewed" }}
        />
        Dinner Included
      </Span>
      <Span>
        <Checkbox
          defaultChecked={false}
          color="default"
          inputProps={{ "aria-label": "Trending" }}
        />
        5 Stars Option
      </Span>
      <Span>
        <Checkbox
          defaultChecked={false}
          color="default"
          inputProps={{ "aria-label": "Random" }}
        />
        Breakfast Included
      </Span>
      <Span>
        <Checkbox
          defaultChecked={false}
          color="default"
          inputProps={{ "aria-label": "Random" }}
        />
        Resorts
      </Span>
      <Span>
        <Checkbox
          defaultChecked={false}
          color="default"
          inputProps={{ "aria-label": "Random" }}
        />
        Day out
      </Span>
    </StyledDiv>
  );
};

export default OptionCard;
