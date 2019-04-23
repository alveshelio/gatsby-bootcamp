import React from 'react'
import { graphql } from 'gatsby'
import BlogLayout from '../layout/BlogLayout'

export const query = graphql`
  query($slug: String){
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark ( fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        tags
      }
      html
    }
  }`

const BlogPost = ({ data }) => (
  <BlogLayout>
    {
      () => (
        <div>
          <h1>{data.markdownRemark.frontmatter.title}</h1>
          <span>published on: {data.markdownRemark.frontmatter.date}</span>
          <div dangerouslySetInnerHTML={{
            __html: data.markdownRemark.html
          }} />
        </div>
      )
    }
  </BlogLayout>
)


export default BlogPost
