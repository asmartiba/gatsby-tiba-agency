import MenuItem from "./menuItem";
import * as React from "react";
import { nav } from './layout.module.css'

function Nav() {
  return (
    <nav className={nav}>
      <MenuItem link="/home" text="Home"/>
      <MenuItem link="/artworks" text="Artworks"/>
      <MenuItem link="/contact" text="Contact"/>
      <MenuItem link="/about" text="About"/>
    </nav>
  )
}

export default Nav