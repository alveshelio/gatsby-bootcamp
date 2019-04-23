import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Seo from "../components/Seo"
import Header from "../components/Header"
import Footer from "../components/Footer"
import styles from "./BlogLayout.module.scss"

const BlogLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query BlogQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              date
              tags
            }
            html
            excerpt
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <div className={styles.blogLayout}>
      <Seo
        title="Things I blog about!"
        keywords={[`Front-end`, `Software`, `Developer`, `react`]}
      />
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className={styles.blogContentContainer}>
        {typeof children === 'function' && children(data.allMarkdownRemark.edges)}
      </main>
      <Footer author={data.site.siteMetadata.author} />
    </div>
  )
}

BlogLayout.propTypes = {
  children: PropTypes.func.isRequired,
}

export default BlogLayout
