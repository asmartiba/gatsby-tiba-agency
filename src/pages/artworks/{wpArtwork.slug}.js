import * as React from 'react'
import Layout from '../../components/Layout'
import {graphql} from 'gatsby'

const ArtworkPage = ({data: {wpArtwork: {artworkMeta: artwork}}}) => {

    return (
        <Layout pageTitle="Self-Portrait">
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
      }
    }
  }`

export default ArtworkPage;