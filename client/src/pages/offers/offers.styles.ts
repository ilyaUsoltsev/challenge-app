import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CarImage = styled.img`
  width: 300px;
`;

export const Content = styled.div`
  position: relative;
  border-radius: 5px;
  text-align: center;
  background-color: white;
  width: 325px;
  height: 325px;
  padding: 12px;
  transition: box-shadow 0.5s;
  cursor: pointer;
  &:hover {
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);
  }
`;

export const Cell = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 12px 0;
  flex-basis: 50%;
  @media (min-width: 600px) {
    flex-basis: 50%;
  }
  @media (min-width: 992px) {
    flex-basis: 33.3%;
  }
  @media (min-width: 1320px) {
    flex-basis: 25%;
  }
`;

export const Price = styled.div`
  padding: 12px 24px;
  background: rgb(252, 96, 32);
  color: white;
  border-radius: 5px;
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
`;

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
