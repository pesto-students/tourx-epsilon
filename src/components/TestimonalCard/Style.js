import styled from "styled-components";

export const Conatiner = styled.div`
  /* width: calc(100%/3); */
  /* margin-bottom: 50px; */
  display: flex;
  justify-content: space-between;

  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
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
  font-size: 18px;
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
  margin-bottom: 5px;
  @media screen and (max-width: 1024px) {
    font-size: 12px;
  }
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  /* margin-top: 30px; */
`;
