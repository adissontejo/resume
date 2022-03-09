import "~/config";

import { ThemeProvider } from "styled-components";
import { GlobalStyle, Fonts, theme } from "~/styles";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Fonts />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
