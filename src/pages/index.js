// Stap 1: Importeer React
import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
// Stap 2: definieer je component
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <h1>Tiba's Art</h1>
      <Link to="/about">About page</Link>
      <Link to="/gallery">Gallery page</Link>
      <br></br>
      <StaticImage
        alt="randomized unsplash image!"
        src="https://i0.wp.com/artinmake.com/wp-content/uploads/2022/07/self-portrait-scaled.jpg?resize=1547%2C2048&ssl=1"
        width={400}
      />
      <p></p>
    </main>
  )
}


export default IndexPage