import * as React from "react";
import Layout from "../components/Layout"
import Footer from "../components/Footer"
import { main, image, flexContainer, title, background } from '../components/mycomponents.module.css'

const Contact = () => {
    return (
        <main className={main}>
            <Layout title={background}>
            <h2 className={title}>Contact</h2>
            </Layout>
            <Footer copy="Asmar Tiba" year={2023}/>
        </main>
    )
}

export default Contact;