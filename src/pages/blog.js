import React from "react"
import { Link } from "gatsby"

import BlogLayout from "../layout/BlogLayout"
import './blog.module.scss'

const Blog = () => (
  <BlogLayout>
    {edges => {
      console.warn('edges', edges)
      if (edges && edges.length > 0) {
        return edges.map(postNode => (
          <article key={postNode.node.id}>
            <header>
              <h2>{postNode.node.title}</h2>
              <span>Created on: {postNode.node.publishedDate}</span>
            </header>
            <p>{postNode.node.excerpt}</p>
            <Link to={`/blog/${postNode.node.slug}`}>Read More</Link>
          </article>
        ))
      }
      return <p>No posts yet...</p>
    }}
  </BlogLayout>
)

export default Blog
