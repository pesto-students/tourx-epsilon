import React from "react";
import { Container, Flex, Image, Profile, ProfileImage, Span } from "./style";
import logo from "../../static/logo.png";

export default function About() {
  return (
    <Container>
      <Image src={logo} />
      <h4>Holidays Best Experience for the travelers </h4>
      <h2>Founders</h2>
      <Flex>
        <Profile>
          <ProfileImage src="https://ca.slack-edge.com/TANRWLALE-U020J47CLMN-f2cb95d7c74e-512" />
          <Span>Mohhamad Hashim</Span>
        </Profile>
        <Profile>
          <ProfileImage src="https://ca.slack-edge.com/TANRWLALE-U01UX66S4NB-6e82d64ba398-512" />
          <Span>Mayank Mahajan</Span>
        </Profile>
        <Profile>
          <ProfileImage src="https://ca.slack-edge.com/TANRWLALE-U0208FHCS00-f2e2b5a4ab66-512" />
          <Span>Krishna Sharma</Span>
        </Profile>
      </Flex>
    </Container>
  );
}
