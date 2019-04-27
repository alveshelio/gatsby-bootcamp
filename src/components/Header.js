import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styles from './header.module.scss'

const Header = ({ siteTitle }) => (
  <header className={styles.headerContainer}>
    <h1>{siteTitle}</h1>
    <nav>
      <ul>
        <li><Link activeClassName={styles.active} to='/'>Home</Link></li>
        <li><Link activeClassName={styles.active} to='/blog'>Blog</Link></li>
        <li><Link activeClassName={styles.active} to='/about'>About</Link></li>
        <li><Link activeClassName={styles.active} to='/contact'>Contact</Link></li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
