import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from './Blog.module.scss'

const BlogLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query BlogTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={styles.blogLayout}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className={styles.blogContentContainer}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

BlogLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BlogLayout
