/* eslint-disable import/prefer-default-export */
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0rem 10rem;
  margin: 4rem 30px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @media screen and (max-width: 1024px) {
    padding: 0rem 3rem;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0rem 6rem;
  }
  @media screen and (max-width: 540px) {
    flex-direction: column;
    padding: 0rem 0.5rem;
  }
`;

export const BannerWrapper = styled.div`
  width: 60%;
  position: relative;
  @media screen and (max-width: 1024px) {
    width: 50%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-width: 540px) {
    width: 100%;
  }
`;

export const Header = styled.h2`
  color: white;
  font-size: 32px;
  margin: 0.5rem 0rem;
  @media screen and (max-width: 540px) {
    font-size: 24px;
  }
`;

export const BigHeader = styled.h1`
  color: white;
  font-size: 108px;
  color: #fecf24;
  margin: 0.5rem 0rem;
  @media screen and (max-width: 540px) {
    font-size: 64px;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 568px;
  border-radius: 20px;
  overflow: hidden;
  @media screen and (max-width: 540px) {
    width: 100%;
    height: 350px;
  }
`;

export const Banner = styled.div`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: flex-start;
  padding: 0rem 2rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border-radius: 20px;
`;

export const InnerWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  height: 588px;
  margin-left: 18px;
  flex: 1;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 18px;
    margin-left: 0px;
    align-items: center;
  }
  @media screen and (max-width: 540px) {
    width: 100%;
    height: 470px;
  }
`;
export const CatagoryCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 38.09%;
  width: 150px;
  position: relative;
  border-radius: 20px;
  box-shadow: 0 0 27px 0 rgb(0 0 0 / 15%);

  overflow: hidden;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${(props: any) => props["data-bg"]});
  &:nth-child(2) {
    height: 26%;
  }
  &:nth-child(3) {
    height: 26%;
  }
  &:nth-child(4) {
    height: 26%;
  }
  &:nth-child(6) {
    height: 26%;
  }
  &:nth-child(7) {
    height: 43.53%;
  }
  nth-child(8) {
    height: 43.53%;
  }
  &:not(:nth-child(3n-2)) {
    margin-top: 18px;
  }

  &:hover {
    transition: all 0.2s;
    transition-timing-function: ease-in-out;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${(props: any) => props["data-bg"]});
  }

  &:hover p {
    transform: scale(1.2);
    transition: all 0.2s;
    transition-timing-function: ease-in-out;
  }
  @media screen and (max-width: 1024px) {
    width: 120px;
  }
  @media screen and (max-width: 768px) {
    width: 150px;
  }
  @media screen and (max-width: 540px) {
    width: 90px;
  }
`;

export const ImageContainer = styled.div`
  height: 90px;
  width: 90px;
  border-radius: 10px;
  overflow: hidden;
  margin-right: 12px;
  transition: all 0.1s;
  &.active {
    height: 65px;
    width: 65px;
    padding: 0.35rem;
    background: #d5d8dc;
  }
`;

export const Text = styled.p`
  color: white;
  @media screen and (max-width: 540px) {
    font-size: 12px;
  }
`;
export const Image = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 10px;
`;

export const Title = styled.p`
  font-size: 20px;
  margin: 0px;
`;

export const SubTitle = styled.p`
  font-size: 14px;
  margin: 8px 0px;
  color: #808b96;
`;

export const SkeletonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 38.09%;
  width: 150px;
  position: relative;
  border-radius: 20px;
  box-shadow: 0 0 27px 0 rgb(0 0 0 / 15%);

  overflow: hidden;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${(props: any) => props["data-bg"]});
  &:nth-child(2) {
    height: 26%;
  }
  &:nth-child(3) {
    height: 26%;
  }
  &:nth-child(4) {
    height: 26%;
  }
  &:nth-child(6) {
    height: 26%;
  }
  &:nth-child(7) {
    height: 43.53%;
  }
  nth-child(8) {
    height: 43.53%;
  }
  &:not(:nth-child(3n-2)) {
    margin-top: 18px;
  }
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${(props: any) => props["data-bg"]});

  @media screen and (max-width: 1024px) {
    width: 120px;
  }
  @media screen and (max-width: 768px) {
    width: 150px;
  }
  @media screen and (max-width: 540px) {
    width: 90px;
  }
`;

export const StyledButton = styled(Button)`
  width: 150px !important;
  color: white !important;
  margin-top: 18px !important;
  background: black !important;
  padding: 0.75rem 0.5rem !important;
  border-radius: 20px !important;
  @media screen and (max-width: 1024px) {
    width: 120px !important;
  }
  @media screen and (max-width: 768px) {
    width: 150px !important;
  }
  @media screen and (max-width: 540px) {
    width: 90px !important;
    font-size: 12px !important;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
