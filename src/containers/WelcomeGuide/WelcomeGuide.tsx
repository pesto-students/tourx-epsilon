import React from "react";
import { connect } from "react-redux";
import Stepper from "../../components/Stepper/Stepper";
import { showSignupForm } from "./action";
import PickLocation from "./PickLocation/PickLocation";
import PickPreferences from "./PickPreferences/PickPreferences";
import Signup from "./SignUpForm/Signup";
import { Container, Modal } from "./style";

const WelcomeGuide = (props: any): JSX.Element => {
  const { showSignup } = props;
  const titleList = [
    {
      index: 1,
      title: "Please Select Location",
      description: "Select location",
    },
    {
      index: 2,
      title: "Please Select Preferences",
      description: "Select Preferences",
    },
  ];

  return (
    <Container>
      <Modal>
        {!showSignup ? (
          <Stepper
            initial={0}
            titleList={titleList}
            submit={() => props.showSignupForm()}
          >
            <PickLocation />
            <PickPreferences />
          </Stepper>
        ) : (
          <Signup />
        )}
      </Modal>
    </Container>
  );
};

const mapStateToProps = (state: any) => ({
  showSignup: state.welcomeGuide.showSignup,
});

export default connect(mapStateToProps, { showSignupForm })(WelcomeGuide);
