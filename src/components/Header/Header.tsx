import { FC } from "react";
import { ContainerHeader, Div1 } from "./HeaderStyles";
import Image from "../Image/Image";
import StaircaseLogo from "../../assets/images/staircase-logo.png";

const Header: FC = () => (
  <ContainerHeader>
    <Div1>
      <a href={"https://www.staircase.co/"}>
        <Image src={StaircaseLogo} alt="staircase logo" height="25rem" />
      </a>
    </Div1>
  </ContainerHeader>
);

export default Header;
