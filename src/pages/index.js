import React from "react"
import { Link } from "gatsby"

import MainLayout from "../layout/Main"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <MainLayout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </MainLayout>
)

export default IndexPage
