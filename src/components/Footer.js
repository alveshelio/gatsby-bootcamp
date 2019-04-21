import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({ author }) => (
  <footer>
    <span>Created by {author}</span>
    {` `}
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
)

Footer.propTypes = {
  author: PropTypes.string.isRequired
}

export default Footer
