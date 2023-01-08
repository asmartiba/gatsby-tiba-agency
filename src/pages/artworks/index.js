import * as React from 'react'
import {graphql, Link} from 'gatsby'
import Layout from '../../components/Layout'
import {StaticImage} from 'gatsby-plugin-image';
import {Nav} from "../../components/Nav";
import Footer from "../../components/Footer"
import ArtworkList from "../../components/ArtworkList"
import { main, image, flexContainer, title, background } from '../../components/mycomponents.module.css'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';


const Artworks = ({
  data: {
    allWpArtwork: {edges},
    wpPage: {artworksFields},
  },
}) => {
  console.log(artworksFields);
  console.log(`testing is best`)
  
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
                  gatsbyImageData(placeholder:BLURRED, transformOptions: {grayscale:true})
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


export default Artworks;