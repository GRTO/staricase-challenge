import { FC } from "react";
import { ErrorLabelContainer, ErrorLabelItem } from "./ErrorLabelStyles";
import { ErrorLabelProps } from "./types";

const ErrorLabel: FC<ErrorLabelProps> = ({ errors }) => (
  <ErrorLabelContainer>
    {errors.map((error, index) => (
      <ErrorLabelItem>
        <div key={`${error.url}-${index}`}>{error.url}</div>
        <div key={`${error.message}-${index}`}>{error.message}</div>
      </ErrorLabelItem>
    ))}
  </ErrorLabelContainer>
);

export default ErrorLabel;
