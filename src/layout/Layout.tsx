import { FC } from "react";
import Header from "../components/Header/Header";
import { Container, Main } from "./LayoutStyles";

export const Layout: FC = ({ children }) => (
  <Container>
    <Header />
    <Main>{children}</Main>
  </Container>
);
