import * as React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
const IndexPage = () => (
  <Layout>
    <Wrapper>Hello World</Wrapper>
  </Layout>
)
export const Head = () => <Seo title="Home" />

export default IndexPage

const Wrapper = styled.div``
