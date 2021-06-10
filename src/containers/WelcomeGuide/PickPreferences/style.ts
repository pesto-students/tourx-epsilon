import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 300px;
  justify-content: center;
  align-items: start;
  margin-top: 24px;
`;

export const CategoryContainer = styled.div`
  height: 300px;
  margin-top: 12px;
  overflow: auto;
  width: 100%;
`;

export const CatagoryCard = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0.5rem 0.75rem;
  margin: 0.5rem 0rem;
  cursor: pointer;
`;

export const ImageContainer = styled.div`
  height: 60px;
  width: 60px;
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

export const TagContainer = styled.div`
  display: flex;
  margin-top: 12px;
`;

export const Tag = styled.span`
  display: flex;
  padding: 4px 8px;
  border-radius: 5px;
  border: 2px solid #e8eaee;
  font-size: 12px;
  align-items: center;
  justify-content: space-between;
  margin: 0px 0.25rem;
  cursor: pointer;

  &.remove_all {
    background: #f2f4f8;
  }
`;
