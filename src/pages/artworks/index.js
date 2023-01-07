import * as React from 'react'
import {graphql, Link} from 'gatsby'
import Layout from '../../components/Layout'
import {StaticImage} from 'gatsby-plugin-image';
import {Nav} from "../../components/Nav";
import Footer from "../../components/Footer"
import ArtworkList from "../../components/ArtworkList"
import { main, image, flexContainer, title, background } from '../../components/mycomponents.module.css'


const Artworks = ({data: {allWpArtwork: {edges}}}) => {
    return (
        <main className={main}>
        <Layout title={background}>
        {edges.map((item) => {
          const artwork = item.node.artworkMeta;
          const slug = item.node.slug;
          return <Link to={`/artworks/${slug}`}>
            <p key={item.node.id}>{artwork.title}</p>
          </Link>
        })}
        </Layout>
        <Footer copy="Asmar Tiba" year={2023}/>
        </main>
    )
}

export const query = graphql`query {
    allWpArtwork {
      edges {
        node {
          artworkMeta {
            title
            year
            style
          }
          id
          slug
        }
      }
    }
  }`

export default Artworks;