import React from "react"

import Logo from "./logo"
import Ceci from "./heroImage"

const Hero = () => {
  return (
    <section className="hero">

      <div className="container-fluid">
        <Logo/>
      </div>

      <div className="container">       
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-8">
            <h1 className="hero__heading">Learn to Speak Spanish <br/> When Suits You</h1>
            <p className="hero__paragraph">One to one language lessons with <br/> native speaking Spanish <br/> teachers</p>  
          </div>

          <div className="col-xs-12 col-sm-12 col-md-4">
            <Ceci/>          
          </div>

              
        </div>
      </div>
    </section>
  )
}

export default Hero