import * as React from "react"
import { Link } from "gatsby"
import {Nav} from "../components/Nav";
import Layout from "../components/Layout"
import Footer from "../components/Footer"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import { main, subtitle, title, background } from '../components/mycomponents.module.css'
import { StaticImage } from 'gatsby-plugin-image'


const IndexPage = () => {
  return (
    <main className={main}>
      <Layout title={background}>
      <title>Home Page</title>
      <h1 className={title}>Welcome to my world</h1>
      {/* <StaticImage alt="example" src="../" width={100}/> */}
      
      <h3 className={subtitle}>Take a look around</h3>
      </Layout>
      <Footer copy="Asmar Tiba" year={2023}/>
    </main>
  )
}

export default IndexPage