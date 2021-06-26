/* eslint-disable no-restricted-globals */
import { Snackbar } from "@material-ui/core";
import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import WarningIcon from "@material-ui/icons/Warning";
import { connect } from "react-redux";
import useGenericState from "../../Library/useGenericState";
import { StepsProps } from "./Stepper.interface";
import { Header, Subheader, Button, ErrorLayout, ErrorSpan } from "./styles";
import { StyledText } from "../../containers/WelcomeGuide/SignUpForm/style";

const Stepper = (props: StepsProps): JSX.Element => {
  const {
    className,
    initial,
    children,
    titleList,
    selectedState,
    selectedCity,
    selectedCategory,
    submit,
  } = props;

  const [state, setState] = useGenericState({
    children: React.Children.toArray(children),
    current: initial || 0,
    showSnackBar: false,
    snackBarMessage: "",
  });

  const { current, children: steps, showSnackBar, snackBarMessage } = state;

  const handleClick = (activeStep: number) => {
    if (activeStep === 1) {
      if (!selectedState || !selectedCity) {
        setState({
          showSnackBar: true,
          snackBarMessage: "Please select the State/City of your choice",
        });
        return;
      }
    }

    if (current === 1) {
      if (selectedCategory.length < 2) {
        setState({
          showSnackBar: true,
          snackBarMessage: "Please select at least 2 Preferences",
        });
        return;
      }
    }

    setState({ current: activeStep });
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setState({ showSnackBar: false });
  };

  const handleOpenLogin = () => {
    localStorage.setItem("showWelcomeDialog", "true");
    submit();
  };
  return (
    <div className={className}>
      <Header>
        <h4 data-test="welcome-header">{titleList[current].title}</h4>
      </Header>
      <Subheader>
        {titleList.map((title, index) => (
          <div key={title.index}>
            <hr className={current === index ? "active" : ""} />
            <div>
              {(current === 1 && index === 0) ||
              (current === 2 && index === 1) ||
              (current === 2 && index === 0) ? (
                <CheckCircleIcon style={{ width: "24px", height: "24px" }} />
              ) : (
                <div className={current === index ? "active" : ""}>
                  {index + 1}
                </div>
              )}
              <span>{title.description}</span>
            </div>
          </div>
        ))}
      </Subheader>
      {steps[state.current]}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <StyledText onClick={handleOpenLogin}>
          Already have an account ? Login Here
        </StyledText>
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
        </div>
      </div>
      <Snackbar
        open={showSnackBar}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <ErrorLayout>
          <WarningIcon />
          <ErrorSpan>{snackBarMessage}</ErrorSpan>
        </ErrorLayout>
      </Snackbar>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  selectedState: state.welcomeGuide.selectedState,
  selectedCity: state.welcomeGuide.selectedCity,
  selectedCategory: state.welcomeGuide.selectedCategory,
});

export default connect(mapStateToProps, {})(Stepper);
