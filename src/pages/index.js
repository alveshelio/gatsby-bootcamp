import React from "react"

import MainLayout from "../layout/Main"
import Image from "../components/Image"
import Seo from "../components/Seo"

const IndexPage = () => (
  <MainLayout>
    <Seo title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </MainLayout>
)

export default IndexPage
