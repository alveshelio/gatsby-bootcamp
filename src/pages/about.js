import React from 'react'
import SEO from '../components/seo'

import MainLayout from '../layout/Main'
const About = () => (
  <MainLayout>
    <SEO title="About Me" keywords={[`Front-end`, `Software`, `Developer`, `react`]} />
    <h1>About me</h1>
    <p>I'm a Front-end Software Developer</p>
  </MainLayout>
)

export default About
