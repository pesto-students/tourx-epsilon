/* eslint-disable react/prop-types */
import { Checkbox } from "@material-ui/core";
import React from "react";
import { StyledDiv, Header, Hr, Span } from "./style";

interface OptionProps {
  filters: [];
  onChange: (checked: boolean, filter: any) => void;
}

const OptionCard: React.FC<OptionProps> = (props) => {
  const { filters, onChange } = props;
  return (
    <StyledDiv>
      <Header>Options</Header>
      <Hr />

      {filters.map((filter: any) => (
        <Span key={filter.id}>
          <Checkbox
            defaultChecked={false}
            color="default"
            inputProps={{ "aria-label": filter.id }}
            onChange={(checked) => onChange(checked.target.checked, filter)}
          />
          {filter.title}
        </Span>
      ))}
    </StyledDiv>
  );
};

export default OptionCard;
