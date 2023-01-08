import React from "react";
import {Link, graphql} from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Artwork = ({artwork, slug}) => {

    return (
        <Link to={slug}>
            <article>
            </article>
        </Link>
    )
}

export default Artwork;