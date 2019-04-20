import React from 'react'
import Seo from '../components/Seo'

import BlogLayout from '../layout/BlogLayout'

const Blog = () => (
  <BlogLayout>
    <Seo title="Things I blog about!" keywords={[`Front-end`, `Software`, `Developer`, `react`]} />
    <h1>Things I blog about!</h1>
    <p>Content will come sometimes soon...</p>
  </BlogLayout>
)

export default Blog
