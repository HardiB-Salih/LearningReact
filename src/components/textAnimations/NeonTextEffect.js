import React from "react"
import styled, { keyframes } from "styled-components"

export default function NeonTextEffect() {
  return (
    <Wrapper>
      <NeonWrapper>
        <Text>Hola</Text>
        <Gradient></Gradient>
        <Animate></Animate>
      </NeonWrapper>
    </Wrapper>
  )
}

const anim = keyframes`
100%{
    transform: translate(50% 50%);
}
`

const Wrapper = styled.div`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000000;
`
const NeonWrapper = styled.div`
  display: inline-flex;
  filter: brightness(200%);
  overflow: hidden;
`
const Text = styled.span`
  color: #ffffff;
  background: #000000;
  font-size: 200px;
  font-weight: bold;
  text-transform: uppercase;

  ::before {
    content: "Hola";
    position: absolute;
    mix-blend-mode: difference;
    filter: blur(3px);
  }
`
const Gradient = styled.span`
  background: linear-gradient(90deg, blue, green, red);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  mix-blend-mode: multiply;
`
const Animate = styled.span`
  background: radial-gradient(
    50% 50% at 50% 50%,
    #ffffff 0%,
    rgba(0, 0, 0, 0.35) 100%
  );
  position: absolute;
  top: -100%;
  left: -100%;
  right: 0;
  bottom: 0;
  mix-blend-mode: color-dodge;
  animation: ${anim} 5s linear infinite;
`
