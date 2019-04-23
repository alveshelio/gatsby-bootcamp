import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from './Main.module.scss'

const MainLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
      query SiteMetadataQuery {
        site {
          siteMetadata {
            title
            author
          }
        }
      }
    `)

  return (
  <div className={styles.homeLayout}>
    <Header siteTitle={data.site.siteMetadata.title} />
    <main className={styles.contentContainer}>
      {children}
    </main>
    <Footer author={data.site.siteMetadata.author}/>
  </div>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
