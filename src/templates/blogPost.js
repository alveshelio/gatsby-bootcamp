import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import BlogLayout from '../layout/BlogLayout'

export const query = graphql`
  query($slug: String){
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulBlogPost (slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMM DD, YYYY")
      body {
        json
      }
    }
  }`

const BlogPost = ({ data }) => (
  <BlogLayout>
    {
      () => {
        const options = {
          renderNode: {
            "embedded-asset-block":
              (node) => <img alt={node.data.target.fields.title['en-US']} src={node.data.target.fields.file['en-US'].url} />
          }
        }
        return (
          <div>
            <h1>{data.contentfulBlogPost.title}</h1>
            <span>published on: {data.contentfulBlogPost.publishedDate}</span>
            {documentToReactComponents(data.contentfulBlogPost.body.json, options)}
          </div>
        )
      }
    }
  </BlogLayout>
)


export default BlogPost
