import React from "react"

import Customer from "./customer"

const Reviews = () => {
  return (
    <div className="reviews">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-3">
            <Customer/>
          </div> 

          <div className="col-xs-12 col-sm-12 col-md-9">
            <p className="reviews__paragraph text-medium italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus	   pendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>

            <p className="reviews__name text-medium">Gilliam Patatoe. A real Person</p>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default Reviews