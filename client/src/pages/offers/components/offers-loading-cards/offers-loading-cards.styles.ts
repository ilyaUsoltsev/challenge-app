import styled, { keyframes } from 'styled-components';

const ShimmerAnimation = keyframes`
 0% {
        background-position: -1200px 0;
    }
    100% {
        background-position: 1200px 0;
    }
`;

export const ShimmerCard = styled.div`
  border-radius: 5px;
  background-color: #ccc;
  width: 325px;
  height: 325px;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${ShimmerAnimation};
  animation-timing-function: linear;
  background: #ddd;
  background: linear-gradient(to right, #f6f6f6 8%, #f0f0f0 18%, #f6f6f6 33%);
  background-size: 1200px 100%;
`;
