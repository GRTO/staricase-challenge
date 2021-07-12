import { FC } from "react";
import { Error } from "./ErrorMessageStyles";
import { ErrorMessageProps } from "./types";

export const ErrorMessage: FC<ErrorMessageProps> = ({ errorLabel }) => (
  <Error>{errorLabel}</Error>
);
