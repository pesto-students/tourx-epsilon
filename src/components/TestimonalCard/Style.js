import styled from "styled-components";

export const Conatiner = styled.div`
  /* width: calc(100%/3); */
  /* margin-bottom: 50px; */
  display: flex;
  min-height: 240px;
  justify-content: space-between;
  cursor: pointer;

  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  padding: 20px 20px;
  @media screen and (max-width: 540px) {
    margin-bottom: 30px;
  }
`;
export const SectionLeft = styled.div`
  width: 55%;
`;
export const SectionRight = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-end;
`;
export const Text = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.colors.black};
  font-weight: 400;
  margin-bottom: 5px;
  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }
`;
export const Name = styled.div`
  font-size: 14px;
  color: #7d7878;
  font-weight: 400;
  margin: 12px 0px;
  @media screen and (max-width: 1024px) {
    font-size: 12px;
  }
`;

export const Image = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  /* margin-top: 30px; */
`;
