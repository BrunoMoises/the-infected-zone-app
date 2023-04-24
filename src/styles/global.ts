import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Yellowtail', cursive;
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
`;