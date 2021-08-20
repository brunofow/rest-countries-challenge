import styled from 'styled-components'

export const Spinner = styled.div`
  width: 50px;
  height: 50px;
  background: ${(props) => props.theme.colors.elements};
  border-radius: 50%;
  border: 5px solid ${(props) => props.theme.colors.elements};
  border-top: 5px solid #00000080;
  animation: load 1s linear infinite;
  transition: all 0.2s;

  @keyframes load {
    100% {
      transform: rotate(360deg);
    }
  }
`
