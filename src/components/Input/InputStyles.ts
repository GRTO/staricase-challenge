import styled from "styled-components";
import { InputProps } from "./types";

export const Input = styled.input<InputProps>`
  border: 0.1rem solid
    ${(props) =>
      props.hasError ? props.theme.colors.error : props.theme.colors.primary};
  font: inherit;
  border-radius: 0.2rem;
  padding: 0.5rem;

  &:focus {
    outline-color: ${(props) =>
      props.hasError ? props.theme.colors.error : props.theme.colors.primary};
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.colors.primary};
  font-weight: bold;
`;
