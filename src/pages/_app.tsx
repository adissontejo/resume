import { ThemeProvider } from "styled-components";
import { appWithTranslation } from "next-i18next";

import "~/config";

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

export default appWithTranslation(MyApp);
