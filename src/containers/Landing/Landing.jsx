/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-boolean-value */
import React from "react";
import { connect } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { SectionTitle, Anchor } from "./style";
import MostViewed from "./component/MostViewed/MostViewed";
import HeroComponent from "../../components/HeroComponent/HeroComponent";

import TestimonalSection from "./component/TestimonalSection/TestimonalSection";
import WelcomeGuide from "../WelcomeGuide/WelcomeGuide";

const Landing = (props) => {
  const { showWelcomeDialog } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  return (
    <>
      <HeroComponent />
      <SectionTitle>Most Viewed</SectionTitle>
      <MostViewed padding={true} margin={true} />
      <SectionTitle>Testimonals</SectionTitle>

      <TestimonalSection />
      <Anchor onClick={handleClickOpen}>Show More</Anchor>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        fullWidth={true}
        maxWidth="lg"
      >
        <DialogTitle id="scroll-dialog-title">Testimonals</DialogTitle>
        <DialogContent dividers>
          <TestimonalSection padding="10px 10px" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      {showWelcomeDialog ? <WelcomeGuide /> : null}
    </>
  );
};

const mapStateToProps = (state) => ({
  showWelcomeDialog: state.welcomeGuide.showWelcomeModal,
});

export default connect(mapStateToProps, {})(Landing);
