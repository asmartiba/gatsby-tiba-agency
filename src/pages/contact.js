import * as React from "react";
import Layout from "../components/Layout"
import Footer from "../components/Footer"
import { main, image, flexContainer, title, background, description, contactCard, contactInfo,instagram, button } from '../components/mycomponents.module.css'
import { graphql, Link } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'

export const Contact = ({data: { wpPage: { contactMeFields },},}) => {
    const image = getImage(contactMeFields.picture.localFile);

    return (
        <main className={main}>
            <Layout>
            <h2 className={title}>{contactMeFields.title}</h2>
            <div className={contactCard}>
            <GatsbyImage image={image} style={{width: 400}}/>
            <div dangerouslySetInnerHTML={{__html: contactMeFields.description}} className={description}/>
            <div className={contactInfo}>
                <p>Contact info</p> <a href={`mailto:${contactMeFields.email}`}>
                    asmar.tiba@student.ap.be
                </a><br></br>
                <a href={`tel:${contactMeFields.phonenumber}`}>
                    +32484317471
                </a>
                <a href={'https://www.artinmake.com'}><button className={button}>Website</button></a>
                <a target="_blank" href={contactMeFields.instagram}>
                    <StaticImage src='../images/instagram.png' className={instagram}/>
                </a>
                </div>
            </div>
            </Layout>
            <Footer copy="Asmar Tiba" year={2023}/>
        </main>
    )
}

export const query = graphql`query contact {
    wpPage(slug: {eq: "contact"}) {
      contactMeFields {
        title
        description
        email
        instagram
        phonenumber
        website
        picture {
            localFile {
                childImageSharp {
                    gatsbyImageData
                }
            }
        }
      }
    }
  }`

export default Contact;