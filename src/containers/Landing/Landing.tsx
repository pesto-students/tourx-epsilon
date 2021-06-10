import React from "react";
import { connect } from "react-redux";
import HeroComponent from "../../components/HeroComponent/HeroComponent";
import MostViewed from "./component/MostViewed/MostViewed";
import { SectionTitle } from "./style";
import TestimonalSection from "./component/TestimonalSection/TestimonalSection";
import WelcomeGuide from "../WelcomeGuide/WelcomeGuide";

const Landing = (props: any): JSX.Element => {
  const { showWelcomeDialog } = props;

  return (
    <>
      <HeroComponent />
      <SectionTitle>Most Viewed</SectionTitle>
      <MostViewed />
      <SectionTitle>Testimonals</SectionTitle>
      <TestimonalSection />
      {showWelcomeDialog ? <WelcomeGuide /> : null}
    </>
  );
};

const mapStateToProps = (state: any) => ({
  showWelcomeDialog: state.welcomeGuide.showWelcomeModal,
});

export default connect(mapStateToProps, {})(Landing);
