import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { Container, Flex, Icon, StyledHR, Wrapper, P, Span } from "./style";

const Footer: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Flex>
          <StyledHR />
          <h2>TOURX</h2>
          <StyledHR />
        </Flex>
        <Flex>
          <Icon>
            <FacebookIcon style={{ color: "#2e343d" }} />
          </Icon>
          <Icon>
            <InstagramIcon style={{ color: "#2e343d" }} />
          </Icon>
          <Icon>
            <TwitterIcon style={{ color: "#2e343d" }} />
          </Icon>
          <Icon>
            <LinkedInIcon style={{ color: "#2e343d" }} />
          </Icon>
          <Icon>
            <YouTubeIcon style={{ color: "#2e343d" }} />
          </Icon>
        </Flex>
        <P>© 2021 TOURX.com All rights reserved.</P>
        <Span>
          The content and images used on this site are copyright protected and
          copyrights vests with the respective owners. The usage of the content
          and images on this website is intended to promote the works and no
          endorsement of the artist shall be implied. Unauthorized use is
          prohibited and punishable by law.
        </Span>
      </Wrapper>
    </Container>
  );
};

export default Footer;
