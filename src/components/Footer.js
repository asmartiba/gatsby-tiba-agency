import * as React from "react";
import { footer } from './layout.module.css'

const Footer = ({copy, year}) => {
    return (
        <div className={footer}>
            <p> Copyright &#169; {copy} {year}</p>
        </div>
    )
}

export default Footer