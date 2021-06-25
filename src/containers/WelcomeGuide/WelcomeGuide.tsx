import React from "react";
import { connect } from "react-redux";
import Stepper from "../../components/Stepper/Stepper";
import { RootState } from "../../redux/index.interface";
import { showSignupForm } from "./action";
import PickLocation from "./PickLocation/PickLocation";
import PickPreferences from "./PickPreferences/PickPreferences";
import Signup from "./SignUpForm/Signup";
import { Container, Modal } from "./style";

const WelcomeGuide = (props: any): JSX.Element => {
  const titleList = [
    {
      index: 1,
      title: "Please Select Location",
      description: "Select Location",
    },
    {
      index: 2,
      title: "Please Select Preferences",
      description: "Select Preferences",
    },
    {
      index: 3,
      title: "Sign up for Tourx",
      description: "Signup",
    },
  ];

  React.useEffect(() => {
    document.title = "Welcome To TOURX";
  }, []);

  return (
    <Container>
      <Modal>
        <Stepper
          initial={0}
          titleList={titleList}
          submit={() => props.showSignupForm()}
        >
          <PickLocation />
          <PickPreferences />
          <Signup isModal />
        </Stepper>
      </Modal>
    </Container>
  );
};

const mapStateToProps = (state: RootState) => ({
  showSignup: state.welcomeGuide.showSignup,
});

export default connect(mapStateToProps, { showSignupForm })(WelcomeGuide);
