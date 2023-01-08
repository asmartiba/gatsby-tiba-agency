import * as React from 'react'
import {graphql, Link} from 'gatsby'
import Layout from '../../components/Layout'
import {StaticImage} from 'gatsby-plugin-image';
import {Nav} from "../../components/Nav";
import Footer from "../../components/Footer"
import ArtworkList from "../../components/ArtworkList"
import { main, image, flexContainer, title, background, artwork, subtitle } from '../../components/mycomponents.module.css'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import {Artwork} from "../../components/artwork"


const ArtworksPage = ({
  data: {
    allWpArtwork: {edges},
    wpPage: {artworksFields},
  },
}) => {
    return (
        <main className={main}>
        <Layout title={background}>
        {edges.map((item) => {
          const artwork = item.node.artworkMeta;
          const slug = item.node.slug;
          const image = getImage(item.node.artworkMeta.image.localFile);
          return <div className={flexContainer}><Link to={`/artworks/${slug}`}>
            <GatsbyImage image={image} style={{height: 300, width: 300}}/>
            <p className={subtitle} key={item.node.id}>{artwork.title} - {artwork.year}</p>
          </Link></div>
        })}
        </Layout>
        <Footer copy="Asmar Tiba" year={2023}/>
        </main>
    )
}

export const query = graphql`
  query {
    wpPage(slug: {eq: "artworks"}) 
    {
      artworksFields {
        title
        picture {
          localFile {
            childImageSharp {
              gatsbyImageData(quality: 100, placeholder:BLURRED, layout:FULL_WIDTH)
            }
          }
        }
      }
    }
    allWpArtwork {
      edges {
        node {
			  	artworkMeta {
            title
            year
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder:BLURRED)
                }
              }
            }
          }
        slug
        id
      }
    }
  }
}`


export default ArtworksPage;