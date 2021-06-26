/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import SelectBox from "../../../components/SelectBox/SelectBox";
import { RootState } from "../../../redux/index.interface";
import {
  fetchStates,
  fetchCities,
  setCurrentState,
  setCurrentCity,
} from "../action";
import { Container } from "./style";

const PickLocation = (props: any): JSX.Element => {
  const { states, cities, selectedCity, selectedState } = props;

  useEffect(() => {
    props.fetchStates();
  }, []);

  const handleSelectedState = (value: string) => {
    props.setCurrentState(value);
    const selectedStateId = states.find((state: any) => state.title === value);
    props.fetchCities({ value, stateId: selectedStateId._id });
  };

  const handleSelectedCity = (value: string) => {
    props.setCurrentCity(value);
  };

  return (
    <Container>
      <SelectBox
        type="input"
        placeholder="Please Select State"
        options={states}
        onChange={handleSelectedState}
        value={selectedState}
      />
      <SelectBox
        type="input"
        placeholder="Please Select City"
        options={cities}
        onChange={handleSelectedCity}
        value={selectedCity}
        disabled={selectedState === ""}
      />
    </Container>
  );
};

const mapStateToProps = (state: RootState) => ({
  states: state.welcomeGuide.states,
  cities: state.welcomeGuide.cities,
  selectedState: state.welcomeGuide.selectedState,
  selectedCity: state.welcomeGuide.selectedCity,
});

export default connect(mapStateToProps, {
  fetchStates,
  fetchCities,
  setCurrentState,
  setCurrentCity,
})(PickLocation);
