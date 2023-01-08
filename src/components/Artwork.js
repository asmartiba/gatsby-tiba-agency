import React from "react";
import {Link, graphql} from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Artwork = ({data: {allWpArtwork: {edges}}}) => {
    return (
        <Link>
            {edges.map((item) => {
            const artwork = item.node.artworkMeta;
            const slug = item.node.slug;
            const image = getImage(item.node.artworkMeta.image.localFile);
            return <div><Link to={`/artworks/${slug}`}>
                <GatsbyImage image={image} style={{height: 300, width: 300}}/>
                <p key={item.node.id}>{artwork.title} -BUT SOMETHING HAS TO BE EXTRA {artwork.year}</p>
            </Link></div>
            })}
        </Link>
    )
}

export const artwork = graphql`query {
  allWpArtwork {
    edges {
      node {
        artworkMeta {
          title
          year
          image {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        id
        slug
      }
    }
  }
}`

export default Artwork;