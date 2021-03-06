import React from "react"

import Logo from "./logo"
import Ceci from "./heroImage"

const Hero = () => {
  return (

      <section className="hero">     
        <Logo/>
           
        <div className="container">
          <div className="row">           
              <div className="col-xs-12 col-sm-12 col-md-6">
                <h1 className="text-big hero__heading">Learn to Speak Spanish <br/> When Suits You</h1>
                <p className="text-medium hero__paragraph">One to one language lessons with <br/> native speaking Spanish <br/> teachers</p>  
              </div>

              <div className="col-xs-12 col-sm-12 col-md-6">
                <Ceci/>          
              </div>
            </div>
        </div>
      </section>
  )
}

export default Hero