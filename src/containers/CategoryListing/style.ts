/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modal } from "@material-ui/core";
import styled from "styled-components";
import banner from "../../static/images/category_banner.png";

export const CategoryBanner = styled.div`
  width: 100vw;
  overflow: hidden;
  height: 550px;
  background-image: url("${(props: any) => props["data-bg"] ?? banner}");
  background-size: contain;
  background-attachment: fixed;
  margin-top: 80px;

  @media only screen and (max-width: 620px) {
    /* For mobile phones: */
    height: 250px;
  }
`;

export const Container = styled.div`
  width: 100%;
  padding: 2rem 12rem;

  @media screen and (max-width: 1366px) {
    padding: 2rem 4rem;
  }

  @media screen and (max-width: 1024px) {
    padding: 2rem 2rem;
  }
  @media screen and (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;
export const CategorySeach = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0rem;
  position: sticky;
  position: -webkit-sticky;
  margin-top: 2rem;
  top: 80px; /* required */
  background: white;
  z-index: 10;
  @media screen and (max-width: 540px) {
    top: 65px;
  }
`;

export const ScrollDiv = styled.div`
  width: 100%;
  margin-top: 20px;
`;

export const Header = styled.div`
  font-size: ${(props) => props.theme.fonts.header.size};
  font-weight: ${(props) => props.theme.fonts.header.weight};
  line-height: ${(props) => props.theme.fonts.header.lineHeight};
  margin: 0px;
`;

export const FilterContainer = styled.div`
  width: 40%;
  margin: 0px 1rem;
  @media screen and (max-width: 1024px) {
    width: 50%;
  }
  @media screen and (max-width: 768px) {
    width: 60%;
  }
  @media screen and (max-width: 540px) {
    width: 60%;
  }
  @media screen and (max-width: 420px) {
    display: none;
  }
`;

export const Tag = styled.span`
  display: flex;
  padding: 4px 8px;
  border-radius: 5px;
  border: 2px solid #e8eaee;
  font-size: 14px;
  align-items: center;
  justify-content: space-between;
  margin: 0px 0.25rem;
  cursor: pointer;
  width: fit-content;
  &.remove_all {
    background: #f2f4f8;
  }
`;

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  grid-column-gap: 40px;
  height: 480px;
  justify-content: center;
  overflow-y: auto;
  padding: 0.75rem 0rem;
  margin-top: 0.75rem;
`;

export const ListingSection = styled.div`
  display: flex;
`;

export const FilterSection = styled.div`
  width: 30%;
  padding: 2rem 0.75rem;

  @media screen and (max-width: 768px) {
    display: ${(props: any) => props["data-display"] ?? "none"};
    width: 100%;
  }
`;

export const DisplaySection = styled.div`
  width: 70%;
  padding: 0rem 2rem;
  @media screen and (max-width: 1024px) {
    padding: 0rem 0rem;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const HeaderTitle = styled.p`
  font-size: 18px;
  margin: 0px;
  color: black;
  margin-top: 5rem;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0rem;
`;

export const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
  outline: 0;
  align-items: center;
`;

export const Body = styled.div`
  width: 50%;
  min-height: 450px;
  border-radius: 12px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background: white;
  padding: 24px 48px;
  padding-bottom: 48px;
  @media screen and (max-width: 1024px) {
    width: 80%;
  }
  @media screen and (max-width: 540px) {
    width: 100%;
    position: absolute;
  }
  @media screen and (max-width: 320px) {
    bottom: -100px;
  }
`;

export const SkeletonWrapper = styled.div`
  width: 100%;
  height: 280px;
  background: #f2f4f8;
  border-radius: 10px;
  display: flex;
  padding: 1rem;
  background: #eaecee;
  margin: 1rem 0rem;
  @media screen and (max-width: 1024px) {
    //code
  }
  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
    height: auto;
  }
`;
