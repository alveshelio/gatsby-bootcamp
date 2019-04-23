import React from "react"
import { Link } from "gatsby"

import BlogLayout from "../layout/BlogLayout"
import styles from './blog.module.scss'

const Blog = () => (
  <BlogLayout>
    {edges => {
      if (edges && edges.length > 0) {
        return edges.map(postNode => (
          <article key={postNode.node.id}>
            <header>
              <h2>{postNode.node.frontmatter.title}</h2>
              <span>Created on: {postNode.node.frontmatter.date}</span>
            </header>
            <p>{postNode.node.excerpt}</p>
            <Link to={`/blog/${postNode.node.fields.slug}`}>Read More</Link>
          </article>
        ))
      }
      return <p>No posts yet...</p>
    }}
  </BlogLayout>
)

export default Blog
