import styled, {createGlobalStyle} from 'styled-components'

export const Container = styled.div`
  width: 90%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;
`

export default createGlobalStyle`
  body::-webkit-scrollbar {
    width: 14px;               
  }

  body::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.secondary};
    border-radius: 20px;
  }
  
  * {
    margin: 0;
    padding: 0;
    font-family: 'Lobster', cursive;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
  }

  input {
    width: 360px;
    height: 48px;
    border-radius: 8px;
    background-color: ${(props) => props.theme.colors.secondary};
    font-size: 26px;
  }

  button {
    border-radius: 20px;
    width: 185px;
    height: 48px;
    font-size: 24px;
    background-color: ${(props) => props.theme.colors.tertiary};
    border: none;
    cursor: pointer;

    :hover {
      background-color: ${(props) => props.theme.colors.secondary};
    }
  }

  h1 {
    width: 100%;
    position: absolute;
    font-size: 45px;
    top: 0;
    text-align: center;
    background-color: #201f3b;
    padding: 20px;
  }
`;