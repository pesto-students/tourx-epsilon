/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useEffect } from "react";
import { uuid } from "uuidv4";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import TestimonalCard from "../../../../components/TestimonalCard/TestimonalCard";
import { Container } from "./Style";
import { getTestinomial } from "../CategorySection/action";
import { Anchor, SectionTitle } from "../../style";
import { StyledButton } from "../CategorySection/style";

function TestimonalSection(props) {
  const { padding, testinomials, handleClickOpen, isModal } = props;
  useEffect(() => {
    props.getTestinomial();
  }, []);
  return (
    <Container padding={padding}>
      {!isModal ? <SectionTitle>Testimonals</SectionTitle> : null}
      <Grid container direction="row" justify="center" spacing={3}>
        {testinomials.map((item) => {
          return (
            <Grid item xs={12} lg={4} md={4} sm={6}>
              <TestimonalCard data={item} key={uuid()} />
            </Grid>
          );
        })}
      </Grid>
      {!isModal ? (
        <Anchor>
          <StyledButton onClick={handleClickOpen}>Show More</StyledButton>
        </Anchor>
      ) : null}
    </Container>
  );
}

const mapStateToProps = (state) => ({
  testinomials: state.auth.testinomial,
});

export default connect(mapStateToProps, { getTestinomial })(TestimonalSection);
