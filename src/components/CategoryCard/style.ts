import styled from "styled-components";

export const Container = styled.div`
  padding: 0.75rem;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  :hover {
    transition: all 0.2s;
    background: #eaecee;
    border-radius: 12px;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 160px;
  border: none;
  border-radius: 12px;
  overflow: hidden;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  :hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.2);
  }
  :not(:hover) {
    transition: all 0.2s ease-in-out;
    transform: scale(1);
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: flex-start;
  margin-top: 1rem;
`;

export const Title = styled.p`
  font-size: 18px;
  margin: 0px;
  color: black;
`;

export const SubTitle = styled.p`
  font-size: 14px;
  margin: 0px;
  color: #808b96;
`;
