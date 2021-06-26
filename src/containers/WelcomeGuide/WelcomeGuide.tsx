import { Dialog, DialogContent } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import Login from "../../components/LoginForm/Login";
import Stepper from "../../components/Stepper/Stepper";
import { RootState } from "../../redux/index.interface";
import { showSignupForm } from "./action";
import PickLocation from "./PickLocation/PickLocation";
import PickPreferences from "./PickPreferences/PickPreferences";
import Signup from "./SignUpForm/Signup";
import { Container, Modal } from "./style";

const WelcomeGuide = (): JSX.Element => {
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

  const [loginOpen, setLoginOpen] = React.useState(false);

  React.useEffect(() => {
    document.title = "Welcome To TOURX";
  }, []);

  return (
    <Container>
      {!loginOpen && !localStorage.getItem("showWelcomeDialog") ? (
        <Modal data-test="welcome-modal">
          <Stepper
            initial={0}
            titleList={titleList}
            submit={() => setLoginOpen(true)}
          >
            <PickLocation />
            <PickPreferences />
            <Signup isModal />
          </Stepper>
        </Modal>
      ) : (
        <Dialog
          open={loginOpen}
          onClose={() => setLoginOpen(false)}
          scroll="paper"
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
          fullWidth
          maxWidth="sm"
        >
          <DialogContent>
            <Login
              padding="2rem 2rem"
              isModal
              handleDrawerClose={() => setLoginOpen(false)}
            />
          </DialogContent>
        </Dialog>
      )}
    </Container>
  );
};

const mapStateToProps = (state: RootState) => ({
  showSignup: state.welcomeGuide.showSignup,
});

export default connect(mapStateToProps, { showSignupForm })(WelcomeGuide);
