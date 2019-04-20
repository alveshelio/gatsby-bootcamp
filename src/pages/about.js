import React from 'react'
import Seo from '../components/Seo'

import MainLayout from '../layout/Main'
const About = () => (
  <MainLayout>
    <Seo title="About Me" keywords={[`Front-end`, `Software`, `Developer`, `react`]} />
    <h1>About me</h1>
    <p>I'm a Front-end Software Developer</p>
  </MainLayout>
)

export default About
