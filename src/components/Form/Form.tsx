import { FC } from "react";
import { FormProps } from "./types";

const Form: FC<FormProps> = ({ children, ...props }) => (
  <form {...props}>{children}</form>
);

export default Form;
