import React from "react";
import useGenericState from "../../Library/useGenericState";
import { StepsProps } from "./Stepper.interface";
import { Header, Subheader, Button } from "./styles";

export default function Stepper(props: StepsProps): JSX.Element {
  const { className, initial, children, titleList, submit } = props;

  const [state, setState] = useGenericState({
    children: React.Children.toArray(children),
    current: initial || 0,
  });

  const { current, children: steps } = state;

  const handleClick = (activeStep: number) => {
    setState({ current: activeStep });
  };
  const handleSubmit = () => {
    submit();
  };

  return (
    <div className={className}>
      <Header>
        <h4>{titleList[current].title}</h4>
      </Header>
      <Subheader>
        {titleList.map((title, index) => (
          <div key={title.index}>
            <hr className={current === index ? "active" : ""} />
            <div>
              <div className={current === index ? "active" : ""} />
              <span>Select location</span>
            </div>
          </div>
        ))}
      </Subheader>
      {steps[state.current]}
      <div style={{ textAlign: "right" }}>
        {current !== children.length - 1 ? (
          <Button
            type="button"
            disabled={current === steps.length - 1 && true}
            onClick={() => handleClick(current + 1)}
          >
            Next
          </Button>
        ) : (
          ""
        )}
        {current !== 0 ? (
          <Button
            type="button"
            disabled={!current}
            onClick={() => handleClick(current - 1)}
          >
            Previous
          </Button>
        ) : (
          ""
        )}
        {current === children.length - 1 ? (
          <Button type="button" onClick={handleSubmit}>
            Sign Up
          </Button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
