import React from "react"
import styled from "styled-components"

export default function MultiColorText() {
  return (
    <Wrapper>
      <Container>
        <Text>multi color text with css</Text>
      </Container>
    </Wrapper>
  )
}

const colors = ["#5E81A2", "#2C8559", "#8714C6", "#D1862E", "#DDF24A"]
const Wrapper = styled.div`
  /* background: #000; */
  line-height: 1;
  min-height: 100%;
  display: grid;
  place-items: center;
  min-height: calc(100vh * 16px);
`
const Text = styled.h1`
  font-size: 60px;
  font-weight: 900;
  width: -webkit-min-content;
  width: -max-min-content;
  width: min-content;
  margin: auto;
  text-transform: uppercase;
  background: linear-gradient(
    219deg,
    ${colors[0]} 19%,
    transparent 19%,
    transparent 20%,
    ${colors[1]} 39%,
    transparent 39%,
    transparent 40%,
    ${colors[2]} 40%,
    ${colors[2]} 59%,
    transparent 59%,
    transparent 60%,
    ${colors[3]} 60%,
    ${colors[3]} 79%,
    transparent 79%,
    transparent 80%,
    ${colors[4]} 80%
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`
const Container = styled.div`
  padding: 1.5rem;
  text-align: center;
  background: radial-gradient(
      circle at 1.4% 1.4%,
      ${colors[0]} 0.8%,
      transparent 0.8%
    ),
    radial-gradient(circle at 5.5% 3%, ${colors[1]} 0.45%, transparent 0.45%),
    radial-gradient(circle at 2.5% 3.5%, ${colors[2]} 0.5%, transparent 0.5%),
    radial-gradient(circle at 4.5% 1.2%, ${colors[3]} 0.25%, transparent 0.25%),
    radial-gradient(circle at 98% 98%, ${colors[0]} 0.8%, transparent 0.8%),
    radial-gradient(circle at 95% 95%, ${colors[1]} 0.45%, transparent 0.45%),
    radial-gradient(circle at 94.5% 94.5%, ${colors[2]} 0.5%, transparent 0.5%),
    radial-gradient(
      circle at 98.5% 95.8%,
      ${colors[3]} 0.25%,
      transparent 0.25%
    );
`
