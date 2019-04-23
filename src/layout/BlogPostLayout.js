import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Seo from '../components/Seo'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from './BlogPostLayout.module.scss'

const BlogPostLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query BlogPostQuery($slug: String){
      site {
        siteMetadata {
          title
          author
        }
      }
      markdownRemark ( fields: { slug: { regex: $slug } }) {
        frontmatter {
          title
          date
          tags
        }
        html
      }
    }
  `)

  console.warn('data in BlogPostLayout', data)
  return (
    <div className={styles.blogPostLayout}>
      <Seo
        title='Things I blog about!'
        keywords={[`Front-end`, `Software`, `Developer`, `react`]}
      />
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className={styles.blogPostContentContainer}>
        {typeof children === 'function' && children(data.markdownRemark)}
      </main>
      <Footer author={data.site.siteMetadata.author} />
    </div>
  )
}

BlogPostLayout.propTypes = {
  children: PropTypes.func.isRequired,
}

export default BlogPostLayout
