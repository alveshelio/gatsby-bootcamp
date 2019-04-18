import React from 'react'
import SEO from '../components/seo'

import MainLayout from '../layout/Main'

const Contact = () => (
  <MainLayout>
    <SEO title="Contact Me" keywords={[`Contact`, `Front-end`, `Software`, `Developer`, `react`]} />
    <h1>Contact me</h1>
    <p>You can reach me on <a href="https://twitter.com/@helioalves" target='_blank' rel='noopener noreferrer'>Twitter</a></p>
  </MainLayout>
)

export default Contact
