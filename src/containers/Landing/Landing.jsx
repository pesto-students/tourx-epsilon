/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-boolean-value */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { SectionTitle } from "./style";
import MostViewed from "./component/MostViewed/MostViewed";
import HeroComponent from "../../components/HeroComponent/HeroComponent";
import TestimonalSection from "./component/TestimonalSection/TestimonalSection";
import WelcomeGuide from "../WelcomeGuide/WelcomeGuide";
import CategorySection from "./component/CategorySection/CategorySection";
import { getLoggedInUser } from "./component/CategorySection/action";
import CategorySearch from "../CategorySearch/CategorySearch";

const Landing = (props) => {
  const { showWelcomeDialog } = props;
  const [open, setOpen] = React.useState(false);
  const [categoryModalOpen, setCategoryModalOpen] = React.useState(false);

  useEffect(() => {
    if (showWelcomeDialog) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "none";
    }
  }, [showWelcomeDialog]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    document.title = "TOURX | Explore the best";
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  React.useEffect(() => {
    props.getLoggedInUser();
  }, []);
  return (
    <>
      <HeroComponent />
      <SectionTitle>Popular Categories</SectionTitle>
      <CategorySection handleClickOpen={() => setCategoryModalOpen(true)} />
      <SectionTitle>Most Viewed</SectionTitle>
      <MostViewed padding={true} margin={true} />
      <TestimonalSection handleClickOpen={handleClickOpen} />
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
          <TestimonalSection padding="10px 10px" isModal />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      {showWelcomeDialog ? <WelcomeGuide /> : null}
      <CategorySearch
        open={categoryModalOpen}
        onClose={() => setCategoryModalOpen(false)}
        ariaDescribedby="Category Search"
        ariaLabelledby="Category Search Modal"
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  showWelcomeDialog: state.welcomeGuide.showWelcomeModal,
});

export default connect(mapStateToProps, { getLoggedInUser })(Landing);
