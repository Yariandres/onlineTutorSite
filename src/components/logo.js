import React from "react"
import { Link } from "gatsby"

import img from '../images/ceci-logo.png'

const Logo = () => (
  <div className="logo">
    <Link to="/">
      <img src={img} alt="Website logo" className="logo__img"/>
    </Link>
  </div>
)

export default Logo;