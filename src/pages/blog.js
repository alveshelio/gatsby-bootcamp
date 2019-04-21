import React from "react"
import { Link } from "gatsby"

import BlogLayout from "../layout/BlogLayout"

const Blog = () => (
  <BlogLayout>
    {edges => {
      if (edges && edges.length > 0) {
        return edges.map(postNode => (
          <article key={postNode.node.id}>
            <h1>{postNode.node.frontmatter.title}</h1>
            <span>Created on: {postNode.node.frontmatter.date}</span>
            <p>{postNode.node.excerpt}</p>
            <Link to="/blog">Read More</Link>
            <hr />
          </article>
        ))
      }
      return <p>No posts yet...</p>
    }}
  </BlogLayout>
)

export default Blog
