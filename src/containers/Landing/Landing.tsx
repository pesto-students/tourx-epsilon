import React from "react";
import HeroComponent from "../../components/HeroComponent/HeroComponent";
import MostViewed from "./component/MostViewed/MostViewed";
import { SectionTitle } from "./style";
import TestimonalSection from "./component/TestimonalSection/TestimonalSection";

const Landing = (): JSX.Element => {
  return (
    <>
      <HeroComponent />
      <SectionTitle>Most Viewed</SectionTitle>
      <MostViewed />
      <SectionTitle>Testimonals</SectionTitle>
      <TestimonalSection />
    </>
  );
};

export default Landing;
