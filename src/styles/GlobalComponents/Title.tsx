import styled from "styled-components";

interface TitleProps {
  textAlign?: string;
}

const Title = styled.h2<TitleProps>`
  font-weight: bold;
  color: ${(props) => props.theme.colors.scondary};
  margin-bottom: 0.5rem;
  text-align: ${(props) => props.textAlign || ''};
`;

export default Title;
