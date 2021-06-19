import styled from "styled-components";

export const ReviewCardWrap = styled.div`
  position: relative;
  padding-top: 33.5px;
  margin: 20px;
`;
export const Wrapper = styled.div`
  background-color: #fff;
  padding: 16px 16px 23.6px;
  box-shadow: 0px 1px 4px rgb(0 0 0 / 25%);
  border-radius: 10px;
`;

export const TopSection = styled.div`
  justify-content: space-between;
  margin-bottom: 53px;
  display: flex;
`;
export const Date = styled.div`
  color: #848484;
  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const RatingWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;
export const RatingWrapper = styled.div`
  margin-right: 5px;
`;
export const Rating = styled.div`
  margin-bottom: 6px;
  color: #000;
`;

export const UserDetail = styled.div`
  position: absolute;
  top: 0;
  left: calc(50% - 45px);
`;

export const ImageWarp = styled.div`
  height: 74px;
  width: 74px;
  background-color: #fff;
  border-radius: 50%;
  margin-bottom: 20px;
`;
export const Img = styled.img`
  position: absolute;
  top: 2px;
  left: calc(50% - 37px);
  height: 70px;
  width: 70px;
  border-radius: 50%;
  display: inline-block;
  -o-object-fit: cover;
  object-fit: cover;
`;
export const Deatils = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #4d4c4c;
  text-align: center;
`;
export const ReviewsSection = styled.div`
  color: #868686;
  line-height: 1.54;
  text-align: center;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  margin-bottom: 20px;
  /* max-height: 64.68px; */
  transition: 0.2s max-height;
  overflow: hidden;
`;
