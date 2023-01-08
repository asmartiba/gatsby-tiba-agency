import * as React from 'react'
import Layout from '../../components/Layout'
import {graphql, Link} from 'gatsby'
import {GatsbyImage, getImage} from 'gatsby-plugin-image'
import Footer from '../../components/Footer'
import Artwork from '../../components/artwork'
import {artShow, main, toCentre, artworkDetails, artworkInfo, button} from '../../components/mycomponents.module.css'

const ArtworkPage = ({data: {wpArtwork: {artworkMeta: artwork, mediums: {nodes: mediums},},},}) => {
    const image = getImage(artwork.image.localFile);
  
    return (
      <main className={main}>
        <Layout>
          <div className={toCentre}>
            <GatsbyImage image={image} alt={artwork.image.altText} className={artShow}/>
            <div className={artworkDetails}>
            <h2>Title:</h2>
            <p>Year:</p>
            <p>Style: </p>
            <p>Material:</p>
            <p>Size:</p>
            <p>Description:</p>
            </div>
            <div className={artworkInfo}>
              <h2>{artwork.title}</h2>
              <p>{artwork.year}</p>
              <p>{artwork.style}</p>
              <p>{artwork.material}</p>
              <p>{artwork.resolution}</p>
              <p>{artwork.description}</p>
              <p>{artwork.price}</p>
            </div>
          </div>
          <div className={toCentre}>
          <Link to={'/artworks'}><button className={button}>back</button></Link>
          </div>

        </Layout>
        <Footer copy="Asmar Tiba" year={2023}/>
      </main>
      
    )
}

export const query = graphql`query ($id: String) {
  wpArtwork(id: {eq: $id}) {
    artworkMeta {
      title
      style
      year
      resolution
      description
      material
      price
      image {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        altText
      }
    }
    mediums {
      nodes {
        artworks {
          nodes {
            uri
            mediums {
              nodes {
                uri
              }
            }
          }
        }
      }
    }
  }
}`


export default ArtworkPage;