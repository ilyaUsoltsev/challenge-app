import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    padding: 0;
    margin: 0;
    font-family: sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`;
