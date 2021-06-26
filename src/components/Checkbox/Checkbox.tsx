import React from "react";
import { Checkbox, SquareOutline } from "react-ionicons";
import useGenericState from "../../Library/useGenericState";

const StyledCheckbox = (): JSX.Element => {
  const [state, setState] = useGenericState({
    checked: false,
  });

  const { checked } = state;
  return (
    <>
      {checked ? (
        <Checkbox
          height="24px"
          width="24px"
          onClick={() => setState({ checked: false })}
        />
      ) : (
        <SquareOutline
          height="24px"
          width="24px"
          onClick={() => setState({ checked: true })}
        />
      )}
    </>
  );
};

export default StyledCheckbox;
