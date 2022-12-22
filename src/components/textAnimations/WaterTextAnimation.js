import React from "react"
import styled, { keyframes } from "styled-components"

export default function WaterTextAnimation() {
  return (
    <Wrapper>
      <Text>Water</Text>
      <Wave>Water</Wave>
    </Wrapper>
  )
}

const animation = keyframes`
0%, 100%{
clip-path: polygon(
0% 47%, 10% 48%, 33% 54%,
54% 60%, 70% 61%, 84% 59%,
100% 52%, 100% 100%, 0% 100%
); } 
50%{
clip-path: polygon(
0% 60%, 15% 65%, 34% 66%,
51% 62%, 67% 50%, 84% 45%,
100% 46%, 106% 100%, 0% 100%
);
}
`
const Wrapper = styled.div`
  display: grid;
  place-items: center;
  user-select: none;
  padding: 30px 30px;
`
const Text = styled.h1`
  font-size: 60px;
  position: absolute;
  color: white;
  -webkit-text-stroke-width: 0.3px;
  -webkit-text-stroke-color: black;
`
const Wave = styled.h1`
  font-size: 60px;
  position: absolute;
  color: blue;
  animation: ${animation} 3s ease-in-out infinite;
`
