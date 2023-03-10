import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { container, nav, navLinks, navLinkItem, navLinkText } from './layout.module.css'
import { main, title, mainTitle, background } from '../components/mycomponents.module.css'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`query {
    site {
      siteMetadata {
        title
      }
    }
  }`);

  return (
    <div className={container}>
      <title>{data.site.siteMetadata.title}</title>
      <nav className={nav}>
      <header className={mainTitle}>{data.site.siteMetadata.title}</header>
        <ul className={navLinks}>
          <li className={navLinkItem}><Link className={navLinkText} to="/">Home</Link></li>
          <li className={navLinkItem}><Link className={navLinkText} to="/artworks">Artworks</Link></li>
          <li className={navLinkItem}><Link className={navLinkText} to="/about">About</Link></li>
          <li className={navLinkItem}><Link className={navLinkText} to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <main>
        <h2>{children}</h2>
      </main>
    </div>
  )
}

export default Layout
