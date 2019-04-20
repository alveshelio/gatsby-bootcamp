import React from "react"
import { Link } from "gatsby"

import MainLayout from "../layout/Main"
import Seo from "../components/Seo"

const SecondPage = () => (
  <MainLayout>
    <Seo title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </MainLayout>
)

export default SecondPage
