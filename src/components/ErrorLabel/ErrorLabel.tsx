import { FC } from "react";
import { ErrorDTO } from "../../hooks/Service/types/errors";
import { ErrorLabelContainer, ErrorLabelItem } from "./ErrorLabelStyles";

interface ErrorLabelProps {
  errors: Array<ErrorDTO>;
}

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
