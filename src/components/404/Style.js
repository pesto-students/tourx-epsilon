import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  /* height: 100vh; */
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Text = styled.div`
  font-size: 22px;
  font-weight: 500;
  padding: 10px 0px;
`;
export const Reload = styled.div`
  background-color: ${(props) => props.theme.colors.purple_1};
  color: white;
  font-size: 22px;
  padding: 10px 20px;
  cursor: pointer;
  width: fit-content;
  border-radius: 10px;
`;

export const Illustration = styled.img`
  max-width: 500px;
  width: 350px;
  margin-bottom: 20px;
`;
