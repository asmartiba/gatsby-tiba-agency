import * as React from "react"
import { graphql, Link } from "gatsby"
import {Nav} from "../components/Nav";
import Layout from "../components/Layout"
import Footer from "../components/Footer"
import Artwork from "../components/artwork"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import { main, subtitle, title, background,artwork } from '../components/mycomponents.module.css'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'



const IndexPage = ({
  data: {
    wpPage: {homeFields},
  },
}) => {
  console.log(homeFields)

  const image = getImage(homeFields.picture.localFile);

  return (
    <main className={main}>
      <Layout title={background}>
      <section>
      <h1 className={title}>Welcome to my world</h1>
      <GatsbyImage image={image} className={artwork}/>
      </section>

      <section>
        <h2>Featured Artworks</h2>

      </section>
      </Layout>
      <Footer copy="Asmar Tiba" year={2023}/>
    </main>
  )
}

export const query = graphql`query homeQuery {
  wpPage(slug: {eq:"home"}) {
    homeFields {
      artworks {
        ...on WpArtwork {
          id
          slug
          artworkMeta {
            title
            year
            image {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder:BLURRED, transformOptions:{grayscale:true})
                }
              }
            }
          }
        }
      }
      calltoaction {
        title
        url
      }
      title
      picture {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder:BLURRED)
          }
        }
      }
    }
  }
}`

export default IndexPage