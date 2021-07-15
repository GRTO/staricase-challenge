import styled from "styled-components";

export const LoaderContainer = styled.div`
  display: inline-block;
  transform: translateZ(1px);
`;

export const LoaderElement = styled.div`
  display: inline-block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.primary};
  animation: loadingCircleAnimation 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;

  @keyframes loadingCircleAnimation {
    0%,
    100% {
      animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
    }
    0% {
      transform: rotateY(0deg);
    }
    50% {
      transform: rotateY(1800deg);
      animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
    }
    100% {
      transform: rotateY(3600deg);
    }
  }
`;
