import styled from "styled-components";

export const HeaderStyles = styled.header`
  background: ${(props) => props.theme.colors.elements};
  box-shadow: 0 0 8px #00000060;
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background 0.3s;

  h4 {
    margin-left: 2rem;
  }

  span {
    margin-right: 2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 8rem;
    padding: 0.3rem;
    cursor: pointer;
    border-radius: 4px;
    transition: all 0.3s;
    user-select: none;
  }

  span:hover {
    box-shadow: 0 0 6px #00000060;
    background: ${(props) => props.theme.colors.background};
  }
`;
