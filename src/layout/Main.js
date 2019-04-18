import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../components/header'
import styles from './home.module.scss'

const MainLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className={styles.homeLayout}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main className={styles.contentContainer}>
          {children}
        </main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )}
  />
)

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
