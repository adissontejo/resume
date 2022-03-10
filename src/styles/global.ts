import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    white-space: pre-line;

    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.primary};
  }

  button {
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }
`;

export default GlobalStyle;
