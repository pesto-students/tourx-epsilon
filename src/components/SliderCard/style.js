import styled from "styled-components";

export const Container = styled.div`
  width: 250px;
  height: ${(props) => (props.active ? "330px" : "300px")};
  transform: ${(props) =>
    props.active ? "translateY(-10px)" : "translateY(0px)"};
  position: relative;
`;
export const Image = styled.img`
  height: 100%;
  width: 90% !important;
  border-radius: 10px;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 60px;
  right: 15px;
  cursor: pointer;
`;

export const Text = styled.div`
  font-size: 16px;
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 5px;
`;

export const StarWrapper = styled.div`
  margin-left: 20%;
  margin-bottom: 10px;
`;
