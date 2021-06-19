/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0px 30px;
  margin: 0px 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 540px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CatagoryCard = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0.5rem 0.75rem;
  border-radius: 12px;
  margin: 1rem 1.5rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  :hover {
    transition: all 0.3s;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
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
  margin: 0px;
  color: #808b96;
`;
