import React from 'react'
import Seo from '../components/Seo'

import MainLayout from '../layout/MainLayout'

const Contact = () => (
  <MainLayout>
    <Seo title="Contact Me" keywords={[`Contact`, `Front-end`, `Software`, `Developer`, `react`]} />
    <h1>Contact me</h1>
    <p>You can reach me on <a href="https://twitter.com/@helioalves" target='_blank' rel='noopener noreferrer'>Twitter</a></p>
  </MainLayout>
)

export default Contact
