import styled from "styled-components";

export const Conatiner = styled.div`
  width: 350px;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  padding: 20px;
`;
export const SectionLeft = styled.div`
  width: 60%;
`;
export const SectionRight = styled.div`
  width: 35%;
`;
export const Text = styled.div`
  font-size: 20px;
  color: ${(props) => props.theme.colors.black};
  font-weight: 400;
  margin-bottom: 10px;
`;
export const Name = styled.div`
  font-size: 18px;
  color: #7d7878;
  font-weight: 400;
  margin-bottom: 10px;
`;

export const Image = styled.img`
  width: 100%;
  height: 80%;
  border-radius: 150px;
  margin-top: 20px;
`;
