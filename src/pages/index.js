import * as React from "react"
import { graphql, Link } from "gatsby"
import {Nav} from "../components/Nav";
import Layout from "../components/Layout"
import Footer from "../components/Footer"
import Artwork from "../components/artwork"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import { main, subtitle, title, background,artwork, artworks, artShow, material, indexFlex} from '../components/mycomponents.module.css'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'



const IndexPage = ({
  data: {
    allWpArtwork: {edges},
    wpPage: {artworksFields},
  },
}) => {
    let i = 2;
    return (
        <main className={main}>
        <Layout title={background}>
        <h2 className={title}>Welcome to my world</h2>

        <h3 className={subtitle}>Featured artworks:</h3>
        {edges.map((item, index) => {
          const artwork = item.node.artworkMeta;
          const slug = item.node.slug;
          const image = getImage(item.node.artworkMeta.image.localFile);
          if (index < 4) {
          return <div className={indexFlex}>
          <div className={artworks}><Link to={`/artworks/${slug}`}>
            <GatsbyImage image={image} className={artShow}/>
            <p className={subtitle} key={item.node.id}>{artwork.title} ({artwork.year})</p>
          </Link></div></div>}
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
            material
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

export default IndexPage