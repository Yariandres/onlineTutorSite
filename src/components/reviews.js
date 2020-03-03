import React from "react"

import Customer from "./customer"

const Reviews = () => {
  return (
    <div className="reviews">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-3 col-lg-8 col-xl-8">
            <Customer/>
          </div>
            
          <div className="col-sm-12 col-md-3 col-lg-8 col-xl-8">
            <p className="paragraph italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus	   pendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
            <p className="paragraph">Gilliam Patatoe. A real Person</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews