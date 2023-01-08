import * as React from 'react'
import Layout from '../../components/Layout'
import {graphql} from 'gatsby'
import {GatsbyImage, getImage} from 'gatsby-plugin-image'

const ArtworkPage = ({data: {wpArtwork: {artworkMeta: artwork}}}) => {
    const image = getImage(artwork.image.localFile);
    return (
        <Layout pageTitle="Self-Portrait">
            <GatsbyImage image={image} alt={artwork.image.altText}/>
            <h2>Title: {artwork.title}</h2>
            <p>Year: {artwork.year}</p>
            <p>Style: {artwork.style}</p>
            <p>Material: {artwork.material}</p>
            <p>Size: {artwork.resolution}</p>
            <p>Description: {artwork.description}</p>
            <p>Price: €{artwork.price}</p>
        </Layout>
    )
}

export const query = graphql`query ($id: String) {
    wpArtwork(id: {eq:$id}) {
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
                gatsbyImageData(placeholder:BLURRED)
              }
            }
            altText
          }
      }
    }
  }`

export default ArtworkPage;