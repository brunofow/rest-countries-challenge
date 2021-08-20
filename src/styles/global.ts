import styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
  }

  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font-size: ${(props) => props.theme.fontSizes.small};
    font-family: 'Nunito Sans', sans-serif;
    transition: background .3s;
  }
`

export const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`
