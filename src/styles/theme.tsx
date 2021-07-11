import { FC } from "react";
import { ThemeProvider } from "styled-components";

import theme from "../themes/default";
import GlobalStyles from "./globals";

const Theme: FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;
