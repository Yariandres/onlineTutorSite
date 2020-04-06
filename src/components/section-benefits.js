import React from "react";
import BenefitsCard from "./benefit-card";

const Benefits = () => {
  return (
    <div className="benefits">      
      <div className="benefit__wrapper">   
        <h2 className="text-center text-big text-uppercase benefits__heading">learn spanish from anywhere</h2>          
        <BenefitsCard/>
      </div>     
    </div>
  )
}

export default Benefits;