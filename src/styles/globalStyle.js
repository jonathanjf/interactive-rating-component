import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: hsl(216, 12%, 8%);
  }

  input[type="radio"]:checked + label {
    background-color: hsl(217, 12%, 63%);
    color: white;
  }
`;