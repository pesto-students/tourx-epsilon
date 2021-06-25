import styled from "styled-components";

export const Header = styled.div`
  font-size: ${(props) => props.theme.fonts.header.size};
  font-weight: ${(props) => props.theme.fonts.header.weight};
  line-height: ${(props) => props.theme.fonts.header.lineHeight};
  margin: 0px;
`;

export const Subheader = styled.div`
  display: flex;
  width: 100%;
  > div {
    width: 50%;
    margin: 0px 4px;
    transition: all 0.2s;
    hr {
      height: 3px;
      background: grey;
      border-radius: 10px;
    }

    hr.active {
      background: black;
    }

    > div {
      display: flex;
      align-items: center;
      justify-content: start;

      > div {
        height: 24px;
        width: 24px;
        margin: 0px 4px 0px 0px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;
      }

      > div.active {
        background: black;
        height: 24px;
        width: 24px;
        padding: 0.5rem;
        color: white;
      }

      span {
        font-size: 13px;
        margin-left: 8px;
      }
    }
  }
`;

export const Button = styled.button`
  background: black;
  color: white;
  border: none;
  font-size: 14px;
  border-radius: 4px;
  padding: 8px 18px;
  display: inline;
  margin: 0rem 0.5rem;
  align-self: right;
  cursor: pointer;
`;
export const Layout = styled.div``;

export const ErrorLayout = styled.div`
  min-width: 250px;
  min-height: 50px;
  background: #fece2f;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0.75rem;
`;

export const ErrorSpan = styled.span`
  margin: 0rem 0.75rem;
`;
