/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/prefer-default-export */
import styled from "styled-components";
import { motion } from "framer-motion";

export const Section = styled(motion.div)`
  background: url(${(props) => props.bg}), rgba(0, 0, 0, 0.6);
  /* left: 0;
  position: absolute;
  top: 0; */
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-blend-mode: saturation;
  display: block;
  height: 100vh;
  width: auto;
  /* @media screen and (max-width: 1024px) and (min-width: 860px) {
    height: 70vh;
  } */
`;
// export const Container = styled.img`
//   width: 100vw;
//   height: 100vh;
//   position: absolute;
//   object-fit: cover;
//   opacity: 0.5;
// `;

export const Wrapper = styled.div`
  /* max-width: 1500px; */
  margin: 0 auto;
  position: relative;
  display: flex;
  height: 100%;
  padding: 15% 0px 10% 40px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: space-around;
    padding: 15% 0px 10px 0px;
  }
`;

export const InfoWrapper = styled(motion.div)`
  width: 40%;
  @media (max-width: 1024px) {
    width: 100%;
    padding: 0px 30px;
  }
`;
export const Title = styled(motion.h1)`
  font-size: 48px;
  font-weight: 500;
  letter-spacing: 1px;
  color: ${(props) => props.theme.colors.white};
  line-height: 1;
  @media (max-width: 700px) {
    font-size: 30px;
  }
  @media (max-width: 540px) {
    font-size: 22px;
  }
`;

export const Info = styled(motion.div)`
  font-size: 18px;
  width: 100%;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 20px;
  line-height: 1.3;
  @media (max-width: 540px) {
    font-size: 14px;
  }
`;

export const Button = styled(motion.div)`
  width: 200px;
  color: ${(props) => props.theme.colors.white};
`;
