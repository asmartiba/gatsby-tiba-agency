import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

const ArtworkList = () => {
  return (
    <div>
    <h1>A list of artworks</h1>
    </div>
  )
}

export const querythat = graphql`query MyQuery {
    allWpArtwork {
      edges {
        node {
          artworkMeta {
            title
            year
            style
          }
        }
      }
    }
  }`

export default ArtworkList