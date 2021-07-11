import { FC } from "react";
import Header from "../components/Header/Header";
import { Container } from "./LayoutStyles";

export const Layout: FC = ({ children }) => (
  <Container>
    <Header />
    <main>{children}</main>
  </Container>
);
