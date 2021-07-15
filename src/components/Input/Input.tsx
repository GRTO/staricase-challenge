import { FC, memo } from "react";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { ErrorContainer, Input, Label } from "./InputStyles";
import { InputProps } from "./types";

const InputElement: FC<InputProps> = memo(
  ({ value, label, name, onChange = () => {}, hasError, ...props }) => (
    <>
      {label && <Label htmlFor={name}>{label}</Label>}
      <Input
        value={value}
        name={name}
        hasError={hasError}
        onChange={onChange}
        {...props}
      />
      <ErrorContainer>
        {hasError && <ErrorMessage errorLabel={hasError} />}
      </ErrorContainer>
    </>
  )
);

export default InputElement;
