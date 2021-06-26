import styled from "styled-components";
import { NavigateCircleOutline } from "react-ionicons";

export const PageWrapper = styled.div`
  padding: 30px 70px 0px 70px;
  margin: auto;
  @media screen and (max-width: 768px) {
    padding: 30px 30px 0px 30px;
  }
  @media screen and (max-width: 560px) {
    padding: 20px 20px 0px 20px;
  }
`;

export const InfoContainer = styled.section`
  padding: 30px 0px;
  max-width: 1600px;
  margin: auto;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  align-items: flex-start;
`;

export const Title = styled.div`
  font-size: 32px;
  color: ${(props) => props.theme.colors.black};
  font-weight: 600;
  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
`;

export const Location = styled.div`
  font-size: 18px;
  color: ${(props) => props.theme.colors.text_4};
  display: flex;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    margin-top: 3px;
  }
`;

export const ReviewsContainer = styled.div`
  display: flex;
`;

export const Reviews = styled.div`
  font-size: 18px;
  color: ${(props) => props.theme.colors.text_4};
  margin-right: 20px;
`;

export const Ratings = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.black};
  display: flex;
  .MuiSvgIcon-root {
    color: red !important;
  }
`;

export const OverviewTitle = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 500;
  padding-left: 5px;
  color: ${(props) => props.theme.colors.black};
  border-left: 5px solid #6181f3;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const OverviewDesc = styled.div`
  font-size: 18px;
  /* width: 70%; */
  line-height: 1.6;
  letter-spacing: 1px;
  color: ${(props) => props.theme.colors.black};
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const HighlightsDesc = styled.div`
  font-size: 18px;
  /* width: 60%; */
  line-height: 1.6;
  letter-spacing: 1px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const HighLightIcon = styled(NavigateCircleOutline)`
  margin-right: 7px;
  /* margin-top: 3px; */
`;

export const Wrapper = styled.div`
  display: flex;
  /* align-items: flex-start; */
  margin: 20px 0px;
`;

export const ReviewSection = styled.div`
  margin-right: 20px;
  /* display: flex;
  justify-content: space-between; */
`;
