import styled from "styled-components";

export const WrapperContainer = styled.div`
  width: 100%;
  margin: 2rem 0rem;
  cursor: pointer;
`;

export const Container = styled.div`
  width: 100%;
  height: 250px;
  background: #f2f4f8;
  border-radius: 10px;
  display: flex;
  padding: 1rem;
  @media screen and (max-width: 1024px) {
    //code
  }
  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
    height: auto;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
`;

export const HeaderTitle = styled.p`
  font-size: 20px;
  margin: 0px;
  color: black;
`;

export const SubTitle = styled.p`
  font-size: 14px;
  margin-top: 0.2rem;
  color: #808b96;
  margin-bottom: 0.75rem;
`;

export const ImageContainer = styled.div`
  width: 30%;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const DetailsContainer = styled.div`
  width: 45%;
  padding: 0rem 1.5rem;
  @media screen and (max-width: 1024px) {
    width: 50%;
  }
  @media screen and (max-width: 767px) {
    width: 55%;
    margin-top: 1rem;
  }
  @media screen and (max-width: 420px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
  :hover {
    transition: all 0.2s;
    transform: scale(1.2);
  }
`;

export const Title = styled.p`
  margin-top: 0.8rem;
  font-size: 15px;
`;

export const CountContainer = styled.p`
  margin-top: 0rem;
  display: flex;
`;

export const CountView = styled.span`
  font-size: 14px;
  color: #999faa;
`;

export const ReviewContainer = styled.div`
  width: 25%;
  padding: 0rem 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 1024px) {
    width: 25%;
  }
  @media screen and (max-width: 767px) {
    width: 40%;
    margin-top: 1rem;
  }

  @media screen and (max-width: 420px) {
    display: none;
  }
`;

export const RatingHeader = styled.p`
  font-size: 14px;
  margin-top: 1rem;
  color: black;
  font-weight: 500;
  margin-bottom: 0.75rem;
`;

export const ReviewText = styled.span`
  text-align: justify;
  font-size: 12px;
  margin: 1rem 0rem;
  color: ;
`;

export const ChipContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
