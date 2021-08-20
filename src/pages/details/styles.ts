import styled from 'styled-components'

export const BackContainer = styled.div`
  position: absolute;
  top: 4rem;
  width: 90%;
  height: 80vh;

  @media (max-width: 768px) {
    top: 2rem;
  }
`

export const BackButton = styled.div`
  width: 6rem;
  height: 2rem;
  background: ${(props) => props.theme.colors.elements};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 4px;
  box-shadow: 0 0 8px #00000060;
  cursor: pointer;
`

export const CountryContainer = styled.article`
  width: 90%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  margin-top: 8rem;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 120vh;
    margin-top: 16rem;
  }
`

export const Flag = styled.section`
  width: 45%;
  height: 80%;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    height: 22rem;
    top: 8rem;
  }
`

export const CountryDetails = styled.section`
  width: 45%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  div {
    width: 100%;
    display: flex;
  }

  div .left,
  .right {
    display: flex;
    flex-direction: column;
  }

  div .left span,
  div .right span {
    line-height: 2rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 8rem;
    div {
      flex-direction: column;
    }

    div .left {
      margin-bottom: 2rem;
    }
  }
`

export const Footer = styled.div`
  align-items: center;

  div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.4rem;
  }

  span {
    background: ${(props) => props.theme.colors.elements};
    padding: 0.4rem;
    padding-left: 1rem;
    padding-right: 1rem;
    text-align: center;
    line-height: 1rem;
    font-size: 0.9rem;
    z-index: 3;
    cursor: pointer;
    max-width: 12ch;
    max-height: 1.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (max-width: 768px) {
    width: 100%;

    strong {
      align-self: flex-start;
      margin-bottom: 1rem;
    }
  }
`
