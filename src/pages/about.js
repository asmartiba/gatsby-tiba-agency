import * as React from 'react'
import {StaticImage} from 'gatsby-plugin-image'
import {Nav} from "../components/Nav";
import Layout from "../components/Layout"
import Footer from "../components/Footer"
import { main, image, flexContainer, title, background } from '../components/mycomponents.module.css'

const AboutPage = () => {
  return (
    <main className={main}>
    <Layout title={background}>
    <title>About</title>
    <h2 className={title}>About Me</h2>
    <div className={flexContainer}>
    <StaticImage src='../images/me.jpg' alt='photo-of-me' className={image}/>

      <p style={{fontSize: 18}}>As a doer, it interests me to discover things around me. Stepping out of comfort-zone has just made it expand.
      Interested in linguistics, philosophy, art, entheogens and IT.
      Painting thoughts… inspired by the existential intelligence, a wider understanding of the mind and surroundings. Breaking the ego’s interpretation and limitation of reality brings divine infinity.  An artwork is not what it is not, a place to draw conscience, feelings and emotions in this quantum world.</p>
  
    </div>
    </Layout>
    <Footer copy="Asmar Tiba" year={2023}/>
    </main>
  )
}

export default AboutPage