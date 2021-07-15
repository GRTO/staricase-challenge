import { FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import Theme from "../styles/theme";
import { VerificationProvider } from "../store/verification/VerificationProvider";

const AllTheProviders: FC = ({ children }) => (
  <Theme>
    <VerificationProvider>{children}</VerificationProvider>
  </Theme>
);

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "queries">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";

export { customRender as render };
