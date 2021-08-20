import styled from 'styled-components'

export const SearchContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  top: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`

export const InputBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  svg {
    position: absolute;
    left: 4%;
  }

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
    margin-bottom: 1rem;

    svg {
      left: 9%;
    }
  }
`

export const Input = styled.input`
  width: 22rem;
  height: 2.5rem;
  border-radius: 4px;
  border: 0;
  padding-left: 40px;
  background: ${(props) => props.theme.colors.elements};
  color: ${(props) => props.theme.colors.text};
  box-shadow: 0 0 8px #00000060;

  ::placeholder {
    color: ${(props) => props.theme.colors.input};
  }

  @media (max-width: 768px) {
    width: 85%;
  }
`

export const DropdownContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  .dropdown {
    width: 12rem;
    box-shadow: 0 0 8px #00000060;
    border-radius: 6px;
  }

  .Dropdown-control {
    color: ${(props) => props.theme.colors.text};
    background: ${(props) => props.theme.colors.elements};
    border: 0;
    border-radius: 6px;
  }

  .Dropdown-arrow {
    display: none;
  }

  .Dropdown-menu {
    background: ${(props) => props.theme.colors.elements};
    border: 0;
    border-radius: 6px;
    margin-top: 4px;
  }

  .Dropdown-menu div {
    color: ${(props) => props.theme.colors.text};
  }

  .Dropdown-menu div:hover {
    background: ${(props) => props.theme.colors.background};
  }

  .Dropdown-option.is-selected {
    background: ${(props) => props.theme.colors.background};
  }

  svg {
    position: absolute;
    right: 20px;
  }
`

export const Countries = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  gap: 3rem;

  position: absolute;
  top: 10rem;

  @media (max-width: 1156px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    top: 14rem;
  }
`

export const Country = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Flag = styled.div`
  width: 15rem;
  min-height: 10rem;
  position: relative;

  img {
    border-radius: 6px 6px 0 0;
  }
`

export const Details = styled.div`
  min-width: 15rem;
  max-width: 15rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: ${(props) => props.theme.colors.elements};
  border-radius: 0 0 6px 6px;

  strong {
    margin-bottom: 1rem;
  }

  p {
    font-weight: 600;
  }

  span {
    font-weight: normal;
  }
`
