import styled from "styled-components";

export const ErrorLabelContainer = styled.div`
  background-color: ${(props) => props.theme.colors.error1};
  font-size: 1rem;
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 1.5rem;
`;

export const ErrorLabelItem = styled.div`
  border-bottom: 0.5rem;
`;
